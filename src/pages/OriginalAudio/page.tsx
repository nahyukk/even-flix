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

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/discover/movie', {
          params: {
            // 언어 및 국가 필터 실험
            // with_original_language: 'ko',
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <SubHeader />
      <div className="main__view relative min-h-[1000px]">
        <div className="mt-[4.2%] pt-[4rem]">
          <div className="grid grid-cols-5">
            {movies.length === 0 ? (
              <p>Loading movies...</p>
            ) : (
              movies.map((movie) => (
                <div key={movie.id} className="p-2">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} // backdrop_path 사용
                    alt={movie.title}
                    className="rounded-[2px]" // 이미지 CSS
                  />
                  <p className="text-center mt-2">{movie.title}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OriginalAudio;
