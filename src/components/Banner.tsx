import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import requests from "../api/requests";

interface movie {
    backdrop_path: string;
    title?: string;
    name?: string;
    original_name?: string;
    overview?: string;
    videos?: {
        results: { key: string }[];
    };
}

export default function Banner() {
    const [movie, setmovie] = useState<movie | null>(null);
    const [isClicked, setisClicked] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const request = await axios.get(requests.fetchNowPlaying);
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-0"
                ></div>
                <div className="absolute top-64 inset-x-14 space-y-4 text-white">
                    <h1 className="text-4xl font-bold md:text-6xl mb-4">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>

                    <div className="items-center cursor-default flex font-medium text-xl pt-2">
                        <img src="/top10.png" className="w-9 h-9 mr-3"/>
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