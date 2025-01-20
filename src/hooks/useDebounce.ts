import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay: number): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		// 딜레이 설정
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		// 값이 변경되면 기존 딜레이 제거
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
}

export default useDebounce;
