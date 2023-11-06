import { createContext, useContext } from 'react';
import { User } from '../hooks/UseContextOverriding';

export const DashboardContext = createContext<User | undefined>(undefined);

// custom hook
export const useUserContext = () => {
	const user = useContext(DashboardContext);

	if (user === undefined) {
		throw new Error('useUserContext must be used with a DashboardContext');
	}
	return user;
};
