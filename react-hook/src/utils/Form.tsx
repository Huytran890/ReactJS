import { useId } from "react"

const Form = () => {
    const id = useId();
    console.log({ id });

    return (
        <div className="flex items-center gap-x-1 mx-2">
            {/* ví dụ  */}
            {/* <h3>Form</h3>
            <label htmlFor='my-name'>Name: </label>
            <input type="text" name="name" id='my-name' /> */}

            {/* Giải pháp */}
            <h3>Form</h3>
            <label htmlFor={id}>Name: </label>
            <input
                className="bg-slate-300 rounded-lg px-2 py-2 w-[220px] border-none focus:outline-none"
                type="text" name="name" id={id} />
        </div>
    )
}

export default Form