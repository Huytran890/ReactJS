import { Todo } from '../entities/Todo';

const todos = [
	{
		id: 1,
		title: 'Learn HTML',
		completed: false,
	},
	{
		id: 2,
		title: 'Learn CSS',
		completed: false,
	},
	{
		id: 3,
		title: 'Learn Javascript',
		completed: false,
	},
	{
		id: 4,
		title: 'Learn React',
		completed: false,
	},
	{
		id: 5,
		title: 'Learn Next.js',
		completed: false,
	},
];

/**
 * Mock function that mimics fetching todos from a database.
 */
export const fetchTodos = async (query = ''): Promise<Todo[]> => {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	console.log('fetched todos');

	const filteredTodos = todos.filter((todo) =>
		todo.title.toLowerCase().includes(query.toLowerCase())
	);

	// Uncomment the line below to trigger an error
	// throw new Error();

	return [...filteredTodos];
};

/**
 * Mock function that mimics adding a todo to a database.
 */
//! Pick tạo ra 1 kiểu dữ liệu mới chỉ chứa 1 trường được định nghĩa, giúp hạn chế đầu vào của hàm.
export const addTodo = async (todo: Pick<Todo, 'title'>): Promise<Todo> => {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const newTodo = {
		id: todos.length + 1,
		title: todo.title,
		completed: false,
	};

	// Todo is stored in memory and cleared on page reload
	todos.push(newTodo);

	return newTodo;
};
