import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import requests from "../api/requests";

interface Movie {
    backdrop_path: string;
    title?: string;
    original_title?: string;
    overview?: string;
    videos?: {
        results: { key: string }[];
    };
}

interface Genre {
    id: number;
    name: string;
}


export default function MovieBanner() {
    const [movie, setmovie] = useState<Movie | null>(null);
    const [isClicked, setisClicked] = useState(false);
    const [genres, setgenres] = useState<Genre[]>([]);
    const [isDropdownOpen, setisDropdownOpen] = useState(false);

    useEffect(() => {
        fetchData();
        fetchGenres();
    }, []);

    const fetchGenres = async () => {
        const { data } = await axios.get(requests.fetchGenres)
        setgenres(data.genres || []);
    };

    const fetchData = async () => {
        const request = await axios.get(requests.fetchMovies);
        const movieId = request.data.results[Math.floor(Math.random() * request.data.results.length)].id;

        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
            params: {
                append_to_response: "videos",
            },
        });
        setmovie(movieDetail);
    };

    const truncate = (str: string | undefined, n: number) => {
        return str && str.length > n ? str.substring(0, n - 1) + "..." : str;
    };

    if (!isClicked) {
        return (
            <header className="relative h-[700px] lg:h-[800px] bg-cover bg-center"
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-1">
                    <div className="absolute h-16 flex items-center px-[4%]">
                        <span className="text-xl font-medium md:text-4xl">
                            영화
                        </span>
                        <div className="ml-10 block font-sans align-top relative overflow-visible">
                            <button
                                onClick={() => setisDropdownOpen(!isDropdownOpen)}
                                className="w-full border border-white text-base bg-black hover:bg-black/15 flex pl-2.5 pr-2 p-1 relative items-center"
                            >
                                장르
                                <svg
                                    className="-mr-1 ml-5 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.44l3.71-4.21a.75.75 0 111.14.98l-4 4.5a.75.75 0 01-1.14 0l-4-4.5a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <ul className="absolute left-0 p-2 z-10 bg-black text-sm grid grid-cols-3 gap-2 max-h-80 overflow-y-auto w-72 shadow-lg
                                border border-white/20 border-solid">
                                    {Array.isArray(genres) && genres.map((genre) => (
                                        <li
                                            key={genre.id}
                                            className="px-1 cursor-pointer whitespace-nowrap"
                                            onClick={() => console.log(`장르 ID: ${genre.id}`)}
                                        >
                                            {genre.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                <div className="absolute top-64 inset-x-14 space-y-4 text-white">
                    <h1 className="text-4xl font-bold md:text-6xl mb-4">
                        {movie?.title || movie?.original_title}
                    </h1>

                    <div className="items-center cursor-default flex font-medium text-xl pt-2">
                        <img src="/top10.png" className="w-9 h-9 mr-3" />
                        <span className="text-2xl">오늘의 추천 작품</span>
                    </div>

                    <h1 className="w-720px leading-snug pt-4 font-medium text-lg max-w-md h-80px">
                        {truncate(movie?.overview, 120)}
                    </h1>

                    <div className="flex space-x-4 pt-4">
                        <button className="px-7 py-2 text-black bg-white rounded hover:bg-gray-300 font-medium flex items-center"
                            onClick={() => setisClicked(true)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M5 3v18l15-9L5 3z" />
                            </svg>
                            <span>재생</span>
                        </button>
                        <button className="px-7 py-2 text-white bg-gray-500/35 rounded hover:bg-gray-200/25 font-medium flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"
                                    clipRule="evenodd"
                                />
                                <path d="M11 7h2v6h-2zm0 8h2v2h-2z" />
                            </svg>
                            상세정보
                        </button>
                    </div>

                </div>
            </header>
        );
    } else {
        return (
            <div className="flex items-center justify-center w-full h-screen">
                <iframe className="w-full h-full"
                    src={`https://www.youtube.com/embed/${movie?.videos?.results[0]?.key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie?.videos?.results[0]?.key}`}
                    title="youTube video player"
                    allow="autoplay; fullscreen"
                    allowFullScreen>
                </iframe>
            </div>
        );
    }

}