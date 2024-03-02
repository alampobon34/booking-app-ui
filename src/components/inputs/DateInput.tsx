import React from 'react'
interface Props {
    name: string;
    id: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    value?: string | null;
}
const DateInput = ({ name, id, onChange, placeholder, value }: Props) => {
    return (
        <input onChange={onChange} className='outline-none py-2 bg-gray-100' type="date" placeholder={placeholder} name={name} id={id} />
    )
}

export default DateInput