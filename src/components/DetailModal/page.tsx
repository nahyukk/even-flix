import React, { Dispatch, SetStateAction, useRef } from "react";
import useOnClickOutside from "../../hooks/useOnclickOutside";

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
					<span
						className="modal-close absolute top-4 right-4 bg-gray-950 p-2 rounded-full z-10 cursor-pointer"
						onClick={() => setIsModalOpen(false)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							width="20"
							height="20"
							aria-hidden="true"
							className="text-white"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z"
								fill="currentColor"
							/>
						</svg>
					</span>
					<div className="modal__poster-container relative">
						<div className="modal__poster-blur absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-neutral-900"></div>
						<img
							className="modal__poster-img w-full h-auto"
							src="https://image.tmdb.org/t/p/original/2JB2nJQOBZ7Q9vAtzbha2YsqJbH.jpg"
							alt="modal__poster-img"
						></img>
						<div className="modal__buttons-container absolute bottom-4 left-8 sm:bottom-8 sm:left-8 md:bottom-12 md:left-8 lg:bottom-16 lg:left-8 flex items-center space-x-4">
							<div className="modal_play-button-container flex items-center justify-center space-x-3">
								<button
									className="flex relative items-center px-4 py-1 text-black text-xs bg-white font-semibold rounded-md border-none hover:bg-gray-200 sm:px-3 sm:py-1 sm:text-base md:px-5 md:py-1 md:text-lg lg:px-6 lg:py-2 lg:text-xl"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										className="w-5 h-5 mr-2 sm:w-6 sm:h-6 md:w-7 md:h-7"
									>
										<path
											d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
											fill="currentColor"
										></path>
									</svg>
									재생
								</button>
					</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailModal;
