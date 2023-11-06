import { useTransition } from "react";

interface TabButtonProps {
    onClick: () => void;
    title: string;
}
const TabButton = ({
    onClick,
    title
}: TabButtonProps) => {
    // const [isPending, startTransition] = useTransition();

    // const handleClick = () => {
    //     startTransition(() => {
    //         onClick?.();
    //     });
    // };



    return (
        // Cách dùng thứ 2
        // isPending ? (
        //     <p>Loading...</p>
        // ) : (
        //     <button
        //         className="border-none px-2 py-2 rounded-md bg-blue-500 text-white mx-1 my-1 hover:opacity-80 active:scale-[.8] transition-all ease-linear duration-300"
        //         onClick={handleClick}
        //     >
        //         {title}
        //     </button>
        // )

        <button
            className="border-none px-2 py-2 rounded-md bg-sky-500 text-white mx-1 my-1 hover:opacity-80 active:scale-[.8] active:bg-emerald-500
            transition-all ease-linear duration-300"
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default TabButton;