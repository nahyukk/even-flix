import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import axios from "../../api/axios";
import { mapSearch, Media } from "../../models/Media";

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
			console.log(request);
			const mappedResult = mapSearch(request.data);
			console.log(mappedResult);
		} catch (error) {
			console.log("Error: ", error);
		}
	};

	return (
	);
};

export default SearchPage;
