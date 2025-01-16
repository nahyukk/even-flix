import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import requests from "../../api/requests";
import CardList from "../../components/CardList";
import instance from "../../api/axios";
import PosterList from "../../components/PosterList";

// props 타입 잊지 마세요!
interface MovieOrSeries {
  id: number;
  backdrop_path: string;
  poster_path: string;
}

const HomePage: React.FC = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<MovieOrSeries[]>([]);
  const [popularMovies, setPopularMovies] = useState<MovieOrSeries[]>([]);

  // fetchDataHome 컴포넌트는 fetchData로 따로 컴포넌트화 시켜서 재사용할 수 있지만
  // 각 page에서 개인 api 연결 공부를 위해 page에 넣음
  const fetchDataHome = async (url: string) => {
    try {
      console.log("요청 URL:", url);
      const response = await instance.get(url);
      return response.data.results;
    } catch (error) {
      console.log("API 요청 에러", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchHome = async () => {
      try {
				// 1페이지에 20개 라서 40개 불러올 경우 여러 페이지를 불러와야함.
				const nowPlayingMoviePage1 = await fetchDataHome(
          `${requests.fetchNowPlayingMovies}?language=ko-KR&page=1`
        );
        const nowPlayingMoviePage2 = await fetchDataHome(
          `${requests.fetchNowPlayingMovies}?language=ko-KR&page=2`
        );

        const nowPlayingMovieData = [...nowPlayingMoviePage1, ...nowPlayingMoviePage2];

        const popularMoviesData = await fetchDataHome(
          requests.fetchPopularMoviesData
        );

        setNowPlayingMovies(nowPlayingMovieData);
				// 1페이지에 20개인데 top10 이라 10개만 불러올 경우
        setPopularMovies(popularMoviesData.slice(0, 10));
      } catch (error) {
        console.log("데이터 못 가져왔지롱~", error);
      }
    };
    fetchHome();
  }, []);

  return (
    <div className="homepage relative">
      <div className="banner relative z-0 h-[630px]">
        <Banner />
      </div>
      <div className="mainbody relative z-20 pb-10">
        <CardList
          title="지금 상영중인 영화"
          moviesAndSeries={nowPlayingMovies.map((movie) => ({
            id: movie.id,
            backdropUrl: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
          }))}
        />
        <PosterList
          title="오늘 전세계의 TOP 10 영화"
          moviesAndSeries={popularMovies.map((movie) => ({
            id: movie.id,
            posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }))}
        />
      </div>
    </div>
  );
};

export default HomePage;
