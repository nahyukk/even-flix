import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import SubHeader from '../../components/SubHeader';

interface Movie {
  id: number;
  backdrop_path: string;
  title: string;
}

const OriginalAudio = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1); // 현재 페이지
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [hasMore, setHasMore] = useState(true); // 더 가져올 데이터 여부
  const loadedPages = new Set<number>(); // 로드된 페이지 추적

  const fetchMovies = async (currentPage: number) => {
    if (loading || !hasMore || loadedPages.has(currentPage)) return; // 중복 요청 방지
    setLoading(true);

    try {
      const response = await axios.get('/discover/movie', {
        params: { page: currentPage },
      });
      const newMovies = response.data.results;

      setMovies((prevMovies) => [...prevMovies, ...newMovies]); // 데이터 추가
      setHasMore(newMovies.length > 0); // 더 이상 데이터가 없으면 종료
      loadedPages.add(currentPage); // 현재 페이지 기록
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(1); // 초기 데이터 로드
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
      fetchMovies(page); // 무한 스크롤 데이터 로드
    }
  }, [page]);

  return (
    <div>
      <SubHeader />
      <div className="main__view relative min-h-[1000px]">
        <div className="mt-[4.2%] pt-[4rem]">
          <div className="grid grid-cols-5 gap-4">
            {movies.map((movie) => (
              <div key={movie.id} className="p-2">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.title}
                  className="rounded-[2px]"
                />
                <p className="text-center mt-2">{movie.title}</p>
              </div>
            ))}
          </div>
          {loading && <p className="text-center mt-4">Loading more movies...</p>}
        </div>
      </div>
    </div>
  );
};

export default OriginalAudio;
