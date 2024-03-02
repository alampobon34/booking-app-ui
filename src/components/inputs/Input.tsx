import React from 'react'
interface Props {
    name: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readonly: boolean;
    styles?: string;
    type: 'number';
    value: string | number;
    min: number
}
const Input = ({ name, onChange, placeholder, readonly, styles, type, value, min }: Props) => {
    return (
        <input value={value} min={min} className={`${styles}`} type={type} name={name} id="" readOnly={readonly} onChange={onChange} placeholder={placeholder} />
    )
}

export default Input