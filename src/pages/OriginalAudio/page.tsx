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

  const fetchMovies = async (startPage: number, pagesToLoad: number = 1) => {
    if (loading) return;
    setLoading(true);
  
    try {
      // 여러 페이지를 한꺼번에 요청
      const promises = Array.from({ length: pagesToLoad }, (_, index) =>
        axios.get(requests.fetchMovies, {
          params: { page: startPage + index },
        })
      );
      const responses = await Promise.all(promises);
  
      // 각 페이지 데이터에서 영화 리스트 추출 및 병합
      const newMovies = responses.flatMap((response) => response.data.results);
  
      // 중복 제거 후 상태 업데이트
      setMovies((prevMovies) => {
        const uniqueMovies = [
          ...prevMovies,
          ...newMovies.filter(
            (movie) => !prevMovies.some((prevMovie) => prevMovie.id === movie.id)
          ),
        ];
        return uniqueMovies;
      });
  
      // 더 이상 데이터가 없으면 중단
      setHasMore(newMovies.length > 0);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    } finally {
      setLoading(false);
    }
  };
  
  // 초기 로드 시 여러 페이지 요청
  useEffect(() => {
    fetchMovies(1, 3); // 3페이지를 한꺼번에 요청하여 60개 로드
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 400
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
        <div className="mt-[4.2%] pt-[5rem] p-[0_4%]">
          <CardGrid mediaList={mediaList} />
          {loading && <p className="text-center mt-4">Loading more movies...</p>}
        </div>
      </div>
    </div>
  );
};

export default OriginalAudio;
