import React from "react";
import "./App.css";

import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/page";
import DetailModal from "./components/DetailModal/page";
import { MediaType } from "./models/Media";

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
		<div className="app">
			<Routes location={background || location}>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="browse" element={<HomePage />} />
					<Route
						path="movie/:id"
						element={<DetailModal mediaType={MediaType.MOVIE} />}
					/>
					<Route
						path="series/:id"
						element={<DetailModal mediaType={MediaType.TV} />}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
