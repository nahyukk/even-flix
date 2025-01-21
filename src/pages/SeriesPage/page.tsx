import React, { useEffect, useState } from "react";
import { mapMediaList, Media } from '../../models/Media';
import instance from '../../api/axios';
import requests from '../../api/requests';
import CardList from "../../components/CardList";
import PosterList from "../../components/PosterList";
import { wait } from "@testing-library/user-event/dist/utils";
import SeriesBanner from "../../components/SeriesBanner";

const SeriesPage : React.FC = () => {
    const [koreanSeries, setkoreanSeries] = useState<Media[]>([]);
    const [topRatedSeries, settopRatedSeries] = useState<Media[]>([]);
    const [realitySeries, setrealitySeries] = useState<Media[]>([]);
    const [weekSeries, setweekSeries] = useState<Media[]>([]);
    const [popular, setpopular] = useState<Media[]>([]);

    const fetchDataSeries = async(url:string) => {
        const response = await instance.get(url);
        const results = mapMediaList(response.data);
        const filteredResults =  results.filter((media: any) => media.backdropPath !== null);
        return filteredResults;
    };

useEffect(() => {
    const fetchSeries = async() => {
        const koreanSeriesData = await fetchDataSeries(requests.fetchKoreanSeries);
        const topRatedSeriesData = await fetchDataSeries(requests.fetchTopRatedSeries);
        const realitySeriesData = await fetchDataSeries(requests.fetchRealitySeries);
        const weekSeriesData = await fetchDataSeries(requests.fetchTV);
        const popularSeriesData = await fetchDataSeries(requests.fetchPopularTv);

        setkoreanSeries(koreanSeriesData);
        settopRatedSeries(topRatedSeriesData);
        setrealitySeries(realitySeriesData);
        setweekSeries(weekSeriesData);
        setpopular(popularSeriesData.slice(0,10));
        
        
    };
    fetchSeries();
},[]);


return (
    <div className="seriespage relative">
        <div className="banner relative z-0 h-[630px]">
            <SeriesBanner />
        </div>
      <div className="main-content relative z-5 pb-10">
        <CardList title="한국 시리즈" mediaList={koreanSeries} />
        <PosterList title="오늘 전 세계의 TOP 10 시리즈" mediaList={popular} />
        <CardList title="평단의 찬사! 감명을 주는 시리즈" mediaList={topRatedSeries} />
        <CardList title="재미를 주는 리얼리티 시리즈" mediaList={realitySeries} />
        <CardList title="이번주 떠오르는 인기 시리즈" mediaList={weekSeries} />
      </div>
    </div>
  );

};

export default SeriesPage;