import React, { Dispatch, SetStateAction, useRef } from "react";
import useOnClickOutside from "../../hooks/useOnclickOutside";
import ModalHeader from "./components/ModalHeader";
import ModalPoster from "./components/ModalPoster";
import ModalPosterButtons from "./components/ModalPosterButtons";

const DetailModal = ({
	setIsModalOpen,
}: {
	setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	const ref = useRef<HTMLDivElement | null>(null);

	useOnClickOutside({ ref: ref, handler: () => setIsModalOpen(false) });

	return (
		<div className="presenter z-10 absolute">
			<div className="wrapper-model fixed inset-0 bg-black bg-opacity-70 flex justify-center">
				<div
					className="modal relative bg-neutral-900 w-full max-w-6xl mt-8 mx-2 rounded-lg overflow-hidden"
					ref={ref}
				>
					<ModalHeader setIsModalOpen={setIsModalOpen} />
					<ModalPoster>
						<ModalPosterButtons />
					</ModalPoster>

					<div className="modal__content px-12 text-white">
						<h1 className="text-2xl font-bold">Movie Title</h1>
						<p className="text-sm opacity-80">Some description goes here...</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailModal;
