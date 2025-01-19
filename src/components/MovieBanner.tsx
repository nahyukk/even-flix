import axios from "axios";
import { useEffect, useState } from "react";
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
}