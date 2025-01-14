import React, { Dispatch, SetStateAction, useRef } from "react";

const DetailModal = ({
	setIsModalOpen,
}: {
	setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<div className="presenter z-10 absolute">
			<div className="wrapper-model fixed inset-0 bg-black bg-opacity-70 flex justify-center">
				<div
					className="modal relative bg-neutral-900 w-full max-w-6xl mt-8 mx-2 rounded-lg overflow-hidden"
				>
			</div>
		</div>
	);
};

export default DetailModal;
