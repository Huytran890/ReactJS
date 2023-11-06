//! custom hook useLocalStorage dùng để làm việc với local storage dễ dàng hơn

export const useLocalStorage = (key: string) => {
	const setItem = (value: unknown) => {
		try {
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.log(error);
		}
	};

	const getItem = () => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : undefined;
		} catch (error) {
			console.log(error);
		}
	};

	const removeItem = () => {
		try {
			window.localStorage.removeItem(key);
		} catch (error) {
			console.log(error);
		}
	};

	return { setItem, getItem, removeItem };
};
