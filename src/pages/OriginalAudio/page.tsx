import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import requests from '../../api/requests';
import SubHeader from '../../components/SubHeader';
import CardGrid from '../../components/CardGrid';
import { Media, MediaType } from '../../models/Media'; // MediaType 추가

interface Movie {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
  genre_ids: number[];
  release_date: string;
}

const OriginalAudio = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadedPages = new Set<number>();

  const fetchMovies = async (currentPage: number) => {
    if (loading || !hasMore || loadedPages.has(currentPage)) return;
    setLoading(true);

    try {
      const response = await axios.get(requests.fetchMovies, {
        params: { page: currentPage },
      });
      const newMovies = response.data.results;

      setMovies((prevMovies) => {
        const uniqueMovies = [
          ...prevMovies,
          ...newMovies.filter(
            (movie: { id: number; }) => !prevMovies.some((prevMovie) => prevMovie.id === movie.id)
          ),
        ];
        return uniqueMovies;
      });

      setHasMore(newMovies.length > 0);
      loadedPages.add(currentPage);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 300
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchMovies(page);
    }
  }, [page]);

  // Media 형식으로 데이터 변환
  const mediaList: Media[] = movies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    type: MediaType.MOVIE, // 열거형 사용
    backdropPath: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    posterPath: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    overview: movie.overview,
    genres: movie.genre_ids.map((id) => ({ id, name: `Genre ${id}` })), // 기본 매핑
    releaseDate: movie.release_date,
    originCountry: ['US'], // 기본값
    tagline: '', // 기본값
    adult: false, // 기본값
  }));

  return (
    <div>
      <SubHeader />
      <div className="main__view relative min-h-[1000px]">
        <div className="mt-[4.2%] pt-[4rem]">
          <CardGrid mediaList={mediaList} />
          {loading && <p className="text-center mt-4">Loading more movies...</p>}
        </div>
      </div>
    </div>
  );
};

export default OriginalAudio;
