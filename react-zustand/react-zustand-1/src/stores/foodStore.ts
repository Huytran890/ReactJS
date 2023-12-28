import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';

const initialFoodValue = {
	fish: 0,
	mouse: 0,
};

//! subscribeWithSelector middleware dùng tương tự như subscribe

export const useFoodStore = create<typeof initialFoodValue>()(
	devtools(
		subscribeWithSelector(
			persist(() => initialFoodValue, { name: 'food store' })
		),
		{ name: 'food store' }
	)
);

//! setState có thể được gọi ở bất kì đâu tương tự vs getState
export const addOneFish = () =>
	useFoodStore.setState((state) => ({ fish: state.fish + 1 }));

export const removeOneFish = () =>
	useFoodStore.setState((state) => ({ fish: state.fish - 1 }));

export const removeAllFish = () => useFoodStore.setState({ fish: 0 });
