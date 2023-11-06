import { ChangeEvent, FormEvent, useState } from "react";

const MyForm = () => {
    const [inputs, setInputs] = useState({
        userName: '',
        age: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // [e.target.name] ==> lấy giá trị làm key
        if (e.target.type === 'checkbox') {
            setInputs((values) => ({ ...values, [e.target.name]: e.target.checked }));
            console.log('<<=== test1 ===>>', e.target.name);
        } else {
            setInputs((values) => ({ ...values, [e.target.name]: e.target.value }));
            console.log('<<=== test1 ===>>', e.target.name);
        }
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('<<=== inputs ===>>', inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:</label>
            <input
                type="text"
                name="userName"
                value={inputs.userName}
                onChange={handleChange}
            />
            <label>Enter your age:</label>
            <input
                type="number"
                name="age"
                value={inputs.age}
                onChange={handleChange}
            />
            <input type="submit" />
        </form>
    )
}

export default MyForm