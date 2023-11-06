import { RxPlay } from "react-icons/rx";
interface ButtonWatchProps {
    className?: string;
}
const ButtonWatch = (props: ButtonWatchProps) => {
    return (
        <>
            <RxPlay size={40} className={`p-2 rounded-[50%] flex justify-center items-center bg-primary cursor-pointer transition-all duration-300 ${props.className}`} />
        </>
    )
}

export default ButtonWatch