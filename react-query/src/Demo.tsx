import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { addTodo, fetchTodos } from "./api";
import TodoCard from "./components/TodoCard";

// caching 

export default function Demo() {
    const queryClient = useQueryClient();

    const [search] = useState("");
    const [title, setTitle] = useState("");

    // useQuery dùng để lấy dữ liệu
    const { data: todos, isLoading, isError, error } = useQuery({
        queryKey: ["todos", { search }],
        queryFn: () => fetchTodos(search),

        // Thời gian làm mới dữ liệu (= 0 thì không gọi ngầm về server)
        // staleTime: 0,

        // đổi từ cachingTime to gcTime (= 0 thì gỡ bỏ caching): là thời gian tồn tại caching dữ liệu (nếu = 0 thì luôn luôn fetching luôn hiện loading)
        // gcTime: 0 //(default: 5000)
    });


    // usemutation để thực hiện thao tác với dữ liệu CUD
    const { mutateAsync: addTodoMutation } = useMutation({
        mutationFn: addTodo,
        onSuccess: () => {
            // refresh lại trang (gọi lại fetch data -> useQuery)
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    return (
        <div>
            <div>
                <input
                    name="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    onClick={async () => {
                        try {
                            await addTodoMutation({ title });
                            setTitle("");
                        } catch (e) {
                            console.log(e);
                        }
                    }}
                >
                    Add Todo
                </button>
            </div>
            {todos?.map((todo) => (
                <TodoCard key={todo.id} todo={todo} />
            ))}
        </div>
    );
}