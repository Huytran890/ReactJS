import { useState, useEffect } from 'react';

const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(() => {
		const media = window.matchMedia(query);
		return media.matches;
	});

	useEffect(() => {
		const media = window.matchMedia(query);
		console.log(media);

		const handleResize = () => {
			if (media.matches !== matches) {
				setMatches(media.matches);
			}
		};

		// Throttle the resize event to improve performance
		const handleResizeThrottled = () => {
			let timeoutId: number;
			return () => {
				if (timeoutId) {
					clearTimeout(timeoutId);
				}
				timeoutId = setTimeout(() => {
					handleResize();
				}, 100);
			};
		};

		window.addEventListener('resize', handleResizeThrottled());

		return () => window.removeEventListener('resize', handleResizeThrottled());
	}, [matches, query]);

	return matches;
};

export default useMediaQuery;
