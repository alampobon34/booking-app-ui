import React from 'react'

interface Props {
    name: string;
    label: string;
    id: string;
    checked: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Radio = ({ name, id, label, onChange, checked, value }: Props) => {
    return (
        <div className='flex items-center gap-2'>
            <input type="radio" name={name} id={id} onChange={onChange} checked={checked} value={value} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default Radio