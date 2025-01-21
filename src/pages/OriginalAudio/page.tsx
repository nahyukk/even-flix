import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import requests from '../../api/requests';
import SubHeader from '../../components/SubHeader';
import CardGrid from '../../components/CardGrid';
import { Media, Movie } from '../../models/Media';
import { mapMediaList } from '../../models/Media';

const OriginalAudio = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadedPages = new Set<number>();

  // API로 가져온 데이터를 Media 형식으로 변환
  const mediaList: Media[] = mapMediaList({ results: movies });

  // API 요청 함수
  const fetchMovies = async (startPage: number, pagesToLoad: number = 1) => {
    if (loading) return; // 중복 요청 방지
    setLoading(true);

    try {
      const promises = Array.from({ length: pagesToLoad }, (_, index) =>
        axios.get(requests.fetchMovies, {
          params: { page: startPage + index },
        })
      );
      const responses = await Promise.all(promises);

      // 새로운 영화 데이터를 추출
      const newMovies = responses.flatMap((response) => response.data.results);

      setMovies((prevMovies) => {
        const uniqueMovies: Movie[] = [
          ...prevMovies,
          ...newMovies.filter(
            (movie: Movie) =>
              !prevMovies.some((prevMovie: Movie) => prevMovie.id === movie.id)
          ),
        ];
        return uniqueMovies;
      });

      // 더 이상 가져올 데이터가 없을 경우 처리
      setHasMore(newMovies.length > 0);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    } finally {
      setLoading(false);
    }
  };

  // 초기 데이터 로드
  useEffect(() => {
    fetchMovies(1, 3); // 첫 3페이지 로드
  }, []);

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 400 &&
        hasMore &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, loading]);

  // 페이지 변경 시 추가 데이터 로드
  useEffect(() => {
    if (page > 1) {
      fetchMovies(page);
    }
  }, [page]);

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
