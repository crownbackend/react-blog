interface InputProps {
    placeholder: string;
    value: string;
    name: string;
    type: string;
    className: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required: boolean
}

export default function Input({placeholder, value, name, type, className, onChange, required}: InputProps) {
    return (
        <>
            <input type={type}
                   value={value}
                   placeholder={placeholder}
                   name={name}
                   className={className}
                   onChange={onChange}
                   required={required}
            />
        </>
    )
}