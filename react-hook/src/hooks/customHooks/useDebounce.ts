import { useEffect, useState } from 'react';

//! custom hook useDebounce dùng để ngăn chặn việc gọi API liên tục hoặc phải làm cho tất cả state thay đổi liên tục trong quá trình xử lý logic. Nó chỉ thực hiện khi người dùng dừng hành động
//! Ví dụ: type để tìm kiếm phải fetch data liên tục, nó sẽ chờ đến khi kết thúc type

export const useDebounce = <T>(value: T, delay = 500) => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => clearTimeout(timeout);
	}, [value, delay]);

	return debouncedValue;
};
