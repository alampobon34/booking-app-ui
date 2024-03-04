import React from 'react'

interface Props {
    name: string;
    type: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    min?: string;
    max?: string;
    value?: number | null;
}

const NumberInput = ({ name, type, placeholder, onChange, min, max, value }: Props) => {
    return (
        <input onChange={onChange} value={value ? value : ''} type={type} name={name} min={min} max={max} placeholder={placeholder}
            className={`w-full outline-none border border-primary-color pl-2 py-2 rounded-md`} />
    )
}

export default NumberInput