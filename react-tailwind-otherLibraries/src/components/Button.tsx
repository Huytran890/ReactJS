import { useState, memo } from "react";
import { cn } from "../libs/utils";

type ButtonProps = {
    children?: React.ReactNode,
    className?: string,
}

const Button: React.FC<ButtonProps> = ({
    children,
    className,
    ...props
}) => {
    const [pending, setPending] = useState(false);
    console.log("vo");

    return (
        <div className="flex gap-2">
            <button className={cn("bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded",
                className,
                {
                    "bg-neutral-500 border-neutral-700": pending
                }
            )}
                {...props}
            >
                {children}
            </button>
            <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => setPending(!pending)}>
                Change Pending
            </button>
        </div >
    )
}

export default memo(Button)