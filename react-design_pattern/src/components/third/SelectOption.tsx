import Select from "./Select"

const SelectOption = () => {
    return (
        <>
            <div className="p-16">
                <Select>
                    <Select.Option key='1'>Option 1</Select.Option>
                    <Select.Option key='2'>Option 2</Select.Option>
                    <Select.Option key='3'>Option 3</Select.Option>
                </Select>
            </div>
        </>
    )
}

export default SelectOption