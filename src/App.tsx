import React from "react";
import "./App.css";

import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/page";
import Profile from "./pages/Profile/page";
import DetailModal from "./pages/DetailPage/page";
import OriginalAudio from "./pages/OriginalAudio/page";
import { MediaType } from "./models/Media";
import NewContentsPage from "./pages/NewContentsPage/page";
import SearchPage from "./pages/SearchPage/page";
import MyList from "./pages/MyList/page";
import { FavoriteProvider } from "./context/FavoriteContext";
import MoviePage from "./pages/MoviePage/page";
import SeriesPage from "./pages/SeriesPage/page";

const Layout = () => {
	return (
		<div>
			<NavBar />

			<Outlet />

			<Footer />
		</div>
	);
};

function App() {
	const location = useLocation();
	const state = location.state as { backgroundLocation?: Location };
	const background = state?.backgroundLocation;
	return (
		<FavoriteProvider>
			<div className="app">
				<Routes location={background || location}>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="browse" element={<HomePage />} />
						<Route path="latest" element={<NewContentsPage />} />
						<Route path="browse/my-list" element={<MyList />} />
						<Route path="search" element={<SearchPage />} />
						<Route
							path="browse/genre/34399"
							element={<MoviePage />}
						/>
						<Route
                            path="browse/genre/83"
                            element={<SeriesPage />}
                        />
            <Route path="account/profiles" element={<Profile />} />
						<Route path="browse/original-audio" element={<OriginalAudio />} />
					</Route>
				</Routes>
				{background && (
					<Routes>
						<Route
							path="movie/:id"
							element={<DetailModal mediaType={MediaType.MOVIE} />}
						/>
						<Route
							path="tv/:id"
							element={<DetailModal mediaType={MediaType.TV} />}
						/>
					</Routes>
				)}
			</div>
		</FavoriteProvider>
	);
}

export default App;
