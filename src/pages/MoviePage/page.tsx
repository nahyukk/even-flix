import React, { useEffect, useState } from "react";
import MovieBanner from "../../components/MovieBanner";
import requests from "../../api/requests";
import CardList from "../../components/CardList";
import instance from "../../api/axios";
import PosterList from "../../components/PosterList";
import { mapMedia, Media } from "../../models/Media";
import { useParams } from "react-router-dom";


const MoviePage: React.FC = () => {
    const [forYou, setForYou] = useState<Media[]>([]);
    const [todayTop10SeriesKR, setTodayTop10SeriesKR] = useState<Media[]>([]);
    const [realitySeries, setRealitySeries] = useState<Media[]>([]);
    const [topRatedSeries, setTopRatedSeries] = useState<Media[]>([]);
    const [englishContents, setEnglishContents] = useState<Media[]>([]);
    const [uSMovies, setUSMovies] = useState<Media[]>([]);
    const [koreanSeries, setKoreanSeries] = useState<Media[]>([]);
    const [popularMovies, setPopularMovies] = useState<Media[]>([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState<Media[]>([]);
    const [sFAndFantasySeries, setSFAndFantasySeries] = useState<Media[]>([]);

  // fetchDataHome 컴포넌트는 fetchData로 따로 컴포넌트화 시켜서 재사용할 수 있지만
  // 각 page에서 개인 api 연결 공부를 위해 page에 넣음
  const fetchDataHome = async (url: string) => {
    try {
      const response = await instance.get(url);
      const results = response.data.results;

      // backdrop_path가 없는 부분 filtering
      const filteredResults = results
			.filter(
        (item: any) => item.backdrop_path !== null
      )
			.map(mapMedia);

      return filteredResults;
    } catch (error) {
      console.log("API 요청 에러", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchHome = async () => {
      try {
        // 회원님을 위해 엄선한 오늘의 콘텐츠
        const forYouPage1 = await fetchDataHome(
          `${requests.fetchForYou}?page=1`
        );
        const forYouPage2 = await fetchDataHome(
          `${requests.fetchForYou}?page=2`
        );
        const forYouPage3 = await fetchDataHome(
          `${requests.fetchForYou}?page=3`
        );

        const forYouData = [...forYouPage1, ...forYouPage2, ...forYouPage3];

        // 오늘 대한민국의 TOP 10 시리즈
        const todayTop10SeriesData = await fetchDataHome(
          requests.fetchTodayTop10Series
        );

        const todayTop10SeriesDataKR = todayTop10SeriesData.filter(
          (media: Media) => media.originCountry?.includes("KR")
        );

        let todayTop10SeriesFinalKR: Media[] = [];
        if (todayTop10SeriesDataKR.length >= 10) {
          todayTop10SeriesFinalKR = todayTop10SeriesDataKR;
        } else {
          const needed = 10 - todayTop10SeriesDataKR.length;
          const nonKrSeries = todayTop10SeriesData.filter(
            (media: Media) => !media.originCountry?.includes("KR")
          );
          const fillOthers = nonKrSeries.slice(0, needed);
          todayTop10SeriesFinalKR = [...todayTop10SeriesDataKR, ...fillOthers];
        }

        // 재미를 주는 리얼리티 시리즈
        const realitySeriesPage1 = await fetchDataHome(
          `${requests.fetchRealitySeries}?language=ko-KR&page=1`
        );
        const realitySeriesPage2 = await fetchDataHome(
          `${requests.fetchRealitySeries}?language=ko-KR&page=2`
        );
        const realitySeriesPage3 = await fetchDataHome(
          `${requests.fetchRealitySeries}?language=ko-KR&page=3`
        );

        const realitySeriesData = [
          ...realitySeriesPage1,
          ...realitySeriesPage2,
          ...realitySeriesPage3,
        ];

        // 평단의 찬사! 감명을 주는 시리즈
        const topRatedSeriesData = await fetchDataHome(
          requests.fetchTopRatedSeries
        );

        // 즐거운 영어 세상 속으로!
        const englishContentsData = await fetchDataHome(
          requests.fetchEnglishContents
        );

        // 미국 영화
        const uSMoviesPage1 = await fetchDataHome(
          `${requests.fetchUSMovies}?page=1`
        );
        const uSMoviesPage2 = await fetchDataHome(
          `${requests.fetchUSMovies}?page=2`
        );
        const uSMoviesPage3 = await fetchDataHome(
          `${requests.fetchUSMovies}?page=3`
        );

        const uSMoviesData = [
          ...uSMoviesPage1,
          ...uSMoviesPage2,
          ...uSMoviesPage3,
        ];

        // 한국 시리즈
        const koreanSeriesPage1 = await fetchDataHome(
          `${requests.fetchKoreanSeries}?page=1`
        );
        const koreanSeriesPage2 = await fetchDataHome(
          `${requests.fetchKoreanSeries}?page=2`
        );
        const koreanSeriesPage3 = await fetchDataHome(
          `${requests.fetchKoreanSeries}?page=3`
        );

        const koreanSeriesData = [
          ...koreanSeriesPage1,
          ...koreanSeriesPage2,
          ...koreanSeriesPage3,
        ];

        // 오늘 전세계의 TOP 10 영화
        const popularMoviesData = await fetchDataHome(
          requests.fetchPopularMovies
        );

        // 지금 상영 중인 영화
        // 1페이지에 20개 라서 40개 불러올 경우 여러 페이지를 불러와야함.
        const nowPlayingMoviePage1 = await fetchDataHome(
          `${requests.fetchNowPlayingMovies}?language=ko-KR&page=1`
        );
        const nowPlayingMoviePage2 = await fetchDataHome(
          `${requests.fetchNowPlayingMovies}?language=ko-KR&page=2`
        );

        const nowPlayingMovieData = [
          ...nowPlayingMoviePage1,
          ...nowPlayingMoviePage2,
        ];

        // SF &  판타지 시리즈
        const sFAndFantasySeriesPage1 = await fetchDataHome(
          `${requests.fetchSFAndFantasySeries}?page=1`
        );
        const sFAndFantasySeriesPage2 = await fetchDataHome(
          `${requests.fetchSFAndFantasySeries}?page=2`
        );

        const sFAndFantasySeriesData = [
          ...sFAndFantasySeriesPage1,
          ...sFAndFantasySeriesPage2,
        ];

        setForYou(forYouData);
        setTodayTop10SeriesKR(todayTop10SeriesFinalKR.slice(0, 10));
        setRealitySeries(realitySeriesData);
        setTopRatedSeries(topRatedSeriesData);
        setEnglishContents(englishContentsData);
        setUSMovies(uSMoviesData);
        setKoreanSeries(koreanSeriesData);
        // 1페이지에 20개인데 top10 이라 10개만 불러올 경우
        setPopularMovies(popularMoviesData.slice(0, 10));
        setNowPlayingMovies(nowPlayingMovieData);
        setSFAndFantasySeries(sFAndFantasySeriesData.slice(0, 36));
      } catch (error) {
        console.log("데이터 못 가져왔지롱~", error);
      }
    };
    fetchHome();
  }, []);

  return (
    <div className="moviepage relative">
      <div className="moviebanner relative z-0 h-[630px]">
        <MovieBanner />
      </div>
      <div className="mainbody relative z-5 pb-10">
			<CardList
          title="회원님을 위해 엄선한 오늘의 콘텐츠"
          mediaList={forYou}
        />
        <PosterList
          title="오늘 대한민국의 TOP 10 시리즈"
          mediaList={todayTop10SeriesKR}
        />
        <CardList
          title="재미를 주는 리얼리티 시리즈"
          mediaList={realitySeries}
        />
        <CardList
          title="평단의 찬사! 감명을 주는 시리즈"
          mediaList={topRatedSeries}
        />
        <CardList
          title="즐거운 영어 세상 속으로!"
          mediaList={englishContents}
        />
        <CardList title="미국 영화" mediaList={uSMovies} />

        <CardList title="한국 시리즈" mediaList={koreanSeries} />
        <PosterList
          title="오늘 전세계의 TOP 10 영화"
          mediaList={popularMovies}
        />
        <CardList title="지금 상영중인 영화" mediaList={nowPlayingMovies} />
        <CardList title="SF & 판타지 시리즈" mediaList={sFAndFantasySeries} />
      </div>
    </div>
  );
};

export default MoviePage;
