import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

//! Middleware persist dùng để lưu trữ store locally

type TBearStoreState = {
	bears: number;
	color: string;
	size: string;
	increasePopulation: () => void;
	removeAllBears: () => void;
};

export const useBearStore = create<TBearStoreState>()(
	persist(
		(set) => ({
			bears: 0,
			color: 'red',
			size: 'big',
			increasePopulation: () =>
				set((state) => ({
					bears: state.bears + 1,
				})),
			removeAllBears: () => set({ bears: 0 }),
		}),
		{
			//! name is unique
			name: 'bear store',
			//! mặc định là localStorage còn những cái khác ...
			// storage: createJSONStorage(() => localStorage),

			//! Dùng để lọc state muốn lưu
			partialize: (state) =>
				Object.fromEntries(
					Object.entries(state).filter(
						([key]) => !['size', 'color'].includes(key)
					)
				),
		}
	)
);
