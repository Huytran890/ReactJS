import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { addTodo, fetchTodos } from "./api";
import TodoCard from "./components/TodoCard";

export default function Demo() {
    const queryClient = useQueryClient();

    const [search, setSearch] = useState("");
    const [title, setTitle] = useState("");

    // useQuery dùng để lấy dữ liệu
    const { data: todos, isLoading } = useQuery({
        queryKey: ["todos", { search }],
        queryFn: () => fetchTodos(search),
        // không gọi ngầm về server
        staleTime: Infinity,
        // đổi từ cachingTime to gcTime (= 0 thì gỡ bỏ caching)
        gcTime: 0
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

    return (
        <div>
            <div>
                <input
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