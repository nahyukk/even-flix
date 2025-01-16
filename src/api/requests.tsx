const requests = {
    fetchNowPlaying: "movie/now_playing",
    fetchNetflixOriginals: "/discover/tv?with_networks=213",
    fetchTrending: "/trending/all/week",
    fetchTopRated: "movie/top_rated",
    fetchActionMovies: "/discover/movie?with_genres=28",
    fetchComedyMovies: "/discover/movie?with_genres=35",
    fetchHorrorMovies: "/discover/movie?with_genres=27",
    fetchRomanceMovies: "/discover/movie?with_genres=10749",
    fetchDocumentaries: "/discover/movie?with_genres=99",


		// 홈화면에서 사용하는 부분 (위와 중복이 있을 수도 있지만 헷갈리지 않도록 이름을 다르게 했습니다.)
		fetchNowPlayingMovies: "/movie/now_playing",
		fetchPopularMoviesData: "/movie/popular"

}

export default requests;