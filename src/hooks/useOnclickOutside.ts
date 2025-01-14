import React, { useEffect } from "react";

interface useOnClickOutsideProps {
	ref: React.MutableRefObject<HTMLElement | null>;
	handler: (event: MouseEvent | TouchEvent) => void;
}

const useOnClickOutside = ({ ref, handler }: useOnClickOutsideProps) => {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			// 모달 영역이 아니라면 return으로 함수 종료
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}
			handler(event);
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);
		return () => {
			// 컴포넌트 제거 시 이벤트 리스너도 제거
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, handler]); // ref, handler 의존성 배열에 추가
};

export default useOnClickOutside;
