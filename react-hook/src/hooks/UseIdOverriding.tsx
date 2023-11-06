import Form from "../utils/Form"

//! useId sẽ tạo ra 1 id duy nhất và khi component re-render thì nó sẽ tạo ra 1 id mới
const UseIdOverriding = () => {
    return (
        <>
            <Form />
            <Form />
        </>
    )
}

export default UseIdOverriding