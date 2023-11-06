import useFetch from "../hooks/customHooks/useFetch"

interface User {
    userId: number
    name: string
}

const FetchData = () => {
    const { data, loading, error } = useFetch<User[]>('https://localhost:4000')

    if (error) {
        console.log(error)
    }

    return (
        <div>
            {loading && <div>Loading...</div>}
            {data && (
                <div>
                    {data?.map((item) => (
                        <div key={item.userId}>{item.name}</div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default FetchData