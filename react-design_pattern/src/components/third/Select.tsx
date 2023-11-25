import { createContext, useContext, useState } from "react";

type SelectContext = {
    activeOption: string;
    setActiveOption: (key: string) => void;
}

const SelectContext = createContext<SelectContext | undefined>(undefined);

const Select = ({ children, className }: any) => {
    const [activeOption, setActiveOption] = useState("");

    return (
        <SelectContext.Provider value={{ activeOption, setActiveOption }}>
            <select className={className}>
                {children}
            </select>
        </SelectContext.Provider>
    )
};

const Option = ({ key, children }: any) => {
    const { activeOption, setActiveOption } = useSelectContext();

    const isActive = activeOption === key;
    const className = `p-2 ${isActive ? "bg-gray-500" : "bg-white"}`;

    return (
        <option className={className} value={key} onClick={() => setActiveOption(key)}>
            {children}
        </option>
    )
};

Select.Option = Option;

export default Select;

const useSelectContext = () => {
    const context = useContext(SelectContext);

    if (!context) {
        throw new Error("useSelectContext should be used within the scope of a select component");
    }

    return context;
}

