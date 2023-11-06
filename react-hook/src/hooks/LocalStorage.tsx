import { useState } from "react";
import { useLocalStorage } from "./customHooks/useLocalStorage";


const LocalStorage = () => {
    const [value, setValue] = useState('');

    const { getItem, setItem, removeItem } = useLocalStorage('value');

    return (
        <div>
            <h1 className='mb-2 text-3xl font-bold'>useLocalStorage</h1>
            <input
                className='mb-4 bg-slate-300 rounded-lg px-2 py-2 w-[220px] border-none focus:outline-none'
                type='text'
                placeholder="Store something..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <div className='flex flex-row gap-2'>
                <button
                    className="w-[60px] border-none px-2 py-2 rounded-md bg-blue-500 text-white mx-1 my-1 hover:opacity-80 active:scale-[.8] transition-all ease-linear duration-300"
                    onClick={() => setItem(value)}
                >
                    Set
                </button>
                <button
                    className="w-[60px] border-none px-2 py-2 rounded-md bg-green-500 text-white mx-1 my-1 hover:opacity-80 active:scale-[.8] transition-all ease-linear duration-300"
                    onClick={() => console.log(getItem())}
                >
                    Get
                </button>
                <button
                    className="border-none px-2 py-2 rounded-md bg-orange-500 text-white mx-1 my-1 hover:opacity-80 active:scale-[.8] transition-all ease-linear duration-300"
                    onClick={removeItem}
                >
                    Remove
                </button>
            </div>
        </div>
    );
}

export default LocalStorage