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
					</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailModal;
