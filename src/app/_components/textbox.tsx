interface TextboxProps {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Textbox({
    placeholder, 
    value, 
    onChange
}: TextboxProps) {
    return (
        <div className="w-full px-6">
            <input
                type="text"
                value={value}
                onChange={onChange}
                className="py-3 w-full px-6 rounded-[14px] 
                bg-[#E6FFE9] text-[#4A848F] border border-[#83CCAB]"
                placeholder={placeholder}
            />
        </div>
    )
}

export default Textbox;