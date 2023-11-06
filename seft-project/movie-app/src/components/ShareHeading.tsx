interface Props {
    title: string
}
const ShareHeading = ({ title }: Props) => {
    return (
        <div className="bg-[#2d2e37] py-[10px] px-[16px] border-solid m-auto mb-6">
            <h2 className="text-xl font-medium text-primary">{title}</h2>
        </div>
    )
}

export default ShareHeading