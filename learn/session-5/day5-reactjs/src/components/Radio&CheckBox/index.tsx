import { ChangeEvent, useState } from "react";

const MyFrom2 = () => {
    // ! Multi check box
    // const courses = [
    //     { id: 1, name: 'Html' },
    //     { id: 2, name: 'Javascript' },
    //     { id: 3, name: 'React Js' }
    // ];

    // const [checked, setChecked] = useState<number[]>([]);

    // const handelCheck = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    //     console.log('<<=== id ===>>', id);
    //     console.log('<<=== change: ===>>', e.target.checked);
    //     setChecked(prev => {
    //         const isCheck = checked.includes(id);
    //         //Bỏ check nếu đã check
    //         if (isCheck) {
    //             return checked.filter(item => item !== id)
    //         }
    //         //Còn lại thêm mới để check
    //         return [...prev, id];
    //     })
    // }

    // const handleSubmit = () => {
    //     console.log(checked)
    // }

    // ! Radio
    const [topping, setTopping] = useState("Medium")

    const onOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTopping(e.target.value)
    }
    return (
        // todo: Multi check box
        // <div>
        //     {courses.map(course => (
        //         <label key={course.id}>
        //             <input
        //                 type='checkbox'
        //                 checked={checked.includes(course.id)}
        //                 onChange={(e) => handelCheck(e, course.id)}
        //             />
        //             {course.name}
        //         </label>
        //     ))}

        //     <button type='submit' onClick={handleSubmit}>Submit</button>
        // </div>

        // todo: radio
        <div>
            <h3>Select Pizza Size</h3>

            <input
                type="radio"
                name="topping"
                value="Regular"
                id="regular"
                checked={topping === "Regular"}
                onChange={onOptionChange}
            />
            <label htmlFor="regular">Regular</label>

            <input
                type="radio"
                name="topping"
                value="Medium"
                id="medium"
                checked={topping === "Medium"}
                onChange={onOptionChange}
            />
            <label htmlFor="medium">Medium</label>

            <input
                type="radio"
                name="topping"
                value="Large"
                id="large"
                checked={topping === "Large"}
                onChange={onOptionChange}
            />
            <label htmlFor="large">Large</label>

            <p>
                Select topping <strong>{topping}</strong>
            </p>
        </div>
    );
}

export default MyFrom2