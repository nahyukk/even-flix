export interface Recommend {
	backdropPath: string;
	id: number;
	title: string;
	overview: string;
	posterPath: string;
	adult: boolean;
	releaseDate: Date;
	video: boolean;
}

const mapRecommend = (json: any): Recommend[] => {
	return json.results.map((result: any) => ({
		adult: result.adult,
		backdropPath: result.backdrop_path || null,
		id: result.id,
		overview: result.overview,
		posterPath: result.poster_path,
		releaseDate: result.release_date,
		title: result.title,
	}));
};
