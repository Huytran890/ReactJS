import { useEffect, useState } from 'react';
import axios from 'axios';

interface ApiType<T> {
	data?: T;
	loading?: boolean;
	error?: Error;
}

const useFetch = <T = unknown>(url: string): ApiType<T> => {
	const [data, setData] = useState(undefined);
	const [error, setError] = useState(undefined);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async function () {
			try {
				setLoading(true);
				const response = await axios.get(url);
				setData(response.data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		})();
	}, [url]);

	return { data, error, loading };
};

export default useFetch;
