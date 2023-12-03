import { FormEvent, useRef, useState, experimental_useOptimistic as useOptimistic, experimental_useForm as useForm } from 'react'

//useOptimistic để hiện thị dữ liệu cho user trước khi thực hiện xong ở phía server và khi server trả lại dữ liệu thì nó sẽ override lại giá trị đã hiển thị tạm thời trước đó

// useForm để giải quyết vấn đề hiển thị pending hay action sau khi user submit form

type Todo = {
    id: string;
    title: string
}

type TodoListProps = {
    initialTodos: Todo[];
}

type TOptimisticTodo = Todo & {
    pending?: boolean
}

const UseOptimistic = ({ initialTodos }: TodoListProps) => {
    const [todos, setTodos] = useState(initialTodos);
    const [optimisticTodo, setOptimisticTodo] = useOptimistic<TOptimisticTodo[]>(todos);
    const inputRef = useRef<HTMLInputElement>(null);

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (inputRef.current === null) return;
        const optimisticTodo = {
            id: Math.random(),
            title: inputRef.current.value,
            pending: true
        }
        setOptimisticTodo((pre: any) => [...pre, optimisticTodo]);
        const newTodo = await createTodo(inputRef.current.value);
        setTodos((pre: any) => [...pre, newTodo]);
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor='title'>title</label>
                <input id='title' type='text' ref={inputRef} />
                <br />
                <button type='submit'>create</button>
            </form>
            <ul>
                {optimisticTodo.map(todo => (
                    <li key={todo.id} style={{ opacity: todo.pending ? .5 : undefined }}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}

export default UseOptimistic;

function

function createTodo(title: string) {
    return wait({ id: Math.random(), title: title }, 1000)
}

function wait<T>(value: T, duration: number) {
    return new Promise<T>(resolve => {
        setTimeout(() => resolve(value), duration)
    })
}