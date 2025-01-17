import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import axios from "../../api/axios";
import { mapSearch, Media } from "../../models/Media";
import Card from "../../components/Card";

const SearchPage = () => {
	const useQuery = () => {
		return new URLSearchParams(useLocation().search);
	};
	const query = useQuery().get("q");
	const debouncedQuery = useDebounce(query, 500);

	const [searchResults, setSearchResults] = useState<Media[]>([]);

	useEffect(() => {
		if (debouncedQuery) {
			fetchSearch(debouncedQuery);
		}
	}, [debouncedQuery]);

	const fetchSearch = async (query: string) => {
		try {
			const request = await axios.get(
				`/search/multi?include_adult=false&query=${query}`
			);
			const mappedResult = mapSearch(request.data);
			setSearchResults(mappedResult);
		} catch (error) {
			console.log("Error: ", error);
		}
	};

	//
	return (
		<div>
			{searchResults.length > 0 ? (
				<div className="px-12 py-8">
					<div className="grid gap-x-2 gap-y-8 grid-cols-2 sm:grid-cols-3 md:grid-col-3 xl:grid-cols-5">
						{searchResults.map((result) => (
							<Card
								key={result.id}
								id={result.id}
								backdropPath={`https://image.tmdb.org/t/p/original/${result.backdropPath}`}
							/>
						))}
					</div>
				</div>
			) : (
				<div className="flex flex-col pt-12 pb-96 justify-center items-center text-xs">
					<div>
						<p>{`입력하신 검색어 '${debouncedQuery}'(와)과 일치하는 결과가 없습니다.`}</p>
						<p className="py-4">추쳔 검색어:</p>
						<ul className="pl-8 list-disc">
							<li>다른 키워드를 입력해보세요.</li>
							<li>시리즈나 영화를 찾고 있으신가요?</li>
							<li>
								영화 제목, 시리즈 제목, 또는 배우나 감독의 이름으로 검색해
								보세요.
							</li>
							<li>
								코미디, 로맨스, 스포츠 또는 드라마와 같은 당르 명으로
								검색해보세요
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default SearchPage;
