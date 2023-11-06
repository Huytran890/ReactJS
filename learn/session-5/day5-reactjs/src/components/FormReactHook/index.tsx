import { useForm } from "react-hook-form";

const FormReactHook = () => {
    interface formData {
        firstName: string;
        gender: string;
    }

    const { register, handleSubmit } = useForm<formData>();

    const onSubmit = (data: formData) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <input type="submit" />
        </form>
    );
};

export default FormReactHook