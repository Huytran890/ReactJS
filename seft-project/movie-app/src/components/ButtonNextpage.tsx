interface ButtonNextpageProps {
    className?: string;
}
const ButtonNextpage = (props: ButtonNextpageProps) => {
    return (
        <div className="flex items-center justify-center">
            <a href="" className={`capitalize bg-primary py-3 px-5 text-[#fcfeff] font-medium hover:opacity-80 cursor-pointer rounded transition-all duration-[350ms] ${props.className}`}>next page</a>
        </div>
    )
}

export default ButtonNextpage