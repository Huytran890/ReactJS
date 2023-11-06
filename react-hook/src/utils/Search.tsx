import { memo } from "react";

//! memo sẽ xem xét xem là props có thay đổi so với lần trước đó không nếu có thì component sẽ bị re-render nếu không thì giữ nguyên


interface SearchProps {
    onChange: (text: string) => void;
}
const Search = ({ onChange }: SearchProps) => {
    console.log('Search rendered!');
    return (
        <input
            type='text'
            placeholder='Search users...'
            className="bg-slate-300 rounded-lg px-2 py-2 w-[220px] border-none focus:outline-none"
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default memo(Search);