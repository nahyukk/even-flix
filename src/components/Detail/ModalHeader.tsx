import React from "react";
import { useNavigate } from "react-router-dom";

const ModalHeader = () => {
	const navigate = useNavigate();

	const handleClose = () => {
		navigate(-1);
	};

	return (
		<span
			className="modal-close absolute top-4 right-4 bg-gray-950 p-2 rounded-full z-10 cursor-pointer"
			onClick={() => handleClose()}
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
	);
};

export default ModalHeader;
