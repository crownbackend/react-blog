interface InputProps {
    placeholder: string;
    value: string;
}

export default function Input({placeholder, value}: InputProps) {
    return (
        <>
            <input type="text" value={value} placeholder={placeholder} className="input input-bordered w-full max-w-xs"/>
        </>
    )
}