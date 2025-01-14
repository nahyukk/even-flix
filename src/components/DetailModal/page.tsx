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
				</div>
			</div>
		</div>
	);
};

export default DetailModal;
