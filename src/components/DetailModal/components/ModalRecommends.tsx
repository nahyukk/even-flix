import React, { FC } from "react";
import { Recommend } from "../Model/Recommend";
import ModalRecommend from "./ModalRecommend";

interface ModalSimilarsProps {
	recommends: Recommend[];
}

const ModalSimilars: FC<ModalSimilarsProps> = ({ recommends }) => {
	return (
		<div className="px-12 py-8">
			<p className="text-xl font-semibold">함께 시청된 콘텐츠</p>
			<div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
				{recommends.map((recommend) => (
					<ModalRecommend recommend={recommend} />
				))}
			</div>
		</div>
	);
};

export default ModalSimilars;
