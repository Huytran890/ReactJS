import { faker } from '@faker-js/faker';

export interface User {
    id: number;
    name: string;
}

export const users = Array(1000)
    .fill(0)
    .map((_, i) => ({
        id: i,
        name: faker.person.fullName(),
    }));

// Fake function mocking an api
export const fetchUsers = async (search: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()),
    );
};

export const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
    return {
        id: i,
        isSelected: i === 29_999_998,
    };
});

