import React from 'react'

interface Props {
    name: string;
    type: 'button' | 'submit';
    onClick?: () => void;
}
const Button = ({ name, type, onClick }: Props) => {
    return (
        <button onClick={onClick} className='bg-primary px-3 py-2 text-white w-full' type={type}>{name}</button>
    )
}

export default Button