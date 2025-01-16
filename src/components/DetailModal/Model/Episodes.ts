export interface Episodes {
	id: string;
	name: string;
	airDate: string;
	overview: string;
	posterPath: string;
	episodes: Episode[];
}

export interface Episode {
	airDate: string; // 볼 수 있는 날짜
	episodeNumber: number; // 회차
	id: number;
	name: string;
	overview: string;
	runtime: number;
	// showID: number;
	stillPath: string; // 볼수있는 날짜가 현재보다 작으면 표시
}

// air_date가 현재보다 이전이면 active, 이후라면 inactive?

export const mapEpisodes = (json: any): Episodes => ({
	id: json.id,
	name: json.name,
	airDate: json.air_date,
	overview: json.overview,
	posterPath: json.poster_path,
	episodes: json.episodes.map((episode: any) => ({
		airDate: episode.air_date,
		episodeNumber: episode.episode_number,
		id: episode.id,
		name: episode.name,
		overview: episode.overview,
		runtime: episode.runtime,
		stillPath: episode.still_path,
	})),
});
