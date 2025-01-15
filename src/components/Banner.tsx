import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import requests from "../api/requests";

interface Movie {
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
    const [Movie, setMovie] = useState<Movie | null>(null);
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
        setMovie(movieDetail);
    };

    const truncate = (str: string | undefined, n: number) => {
        return str && str.length > n ? str.substring(0, n - 1) + "..." : str;
    };

    if (!isClicked) {
        return (
            <header className="relative h-[448px] md:h-[600px] bg-cover bg-center"
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black"></div>
                <div className="absolute top-32 left-10 space-y-4 text-white">
                    <h1 className="text-3xl font-bold md:text-5xl">
                        {Movie?.title || Movie?.name || Movie?.original_name}
                    </h1>

                    <h1 className="w-720px leading-snug pt-4 font-medium text-base max-w-md h-80px">
                        {truncate(Movie?.overview, 100)}
                    </h1>

                    <div className="flex space-x-4">
                        <button className="px-4 py-2 text-black bg-white rounded hover:bg-gray-300"
                            onClick={() => setisClicked(true)}>
                            재생
                        </button>
                        <button className="px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-500">
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
                    src={`https://www.youtube.com/embed/${Movie?.videos?.results[0]?.key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${Movie?.videos?.results[0]?.key}`}
                    title="youTube video player"
                    allow="autoplay; fullscreen"
                    allowFullScreen>
                </iframe>
            </div>
        );
    }

}