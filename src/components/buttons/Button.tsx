import React from 'react'

interface Props {
    name: string;
    type: 'button' | 'submit';
    onClick?: () => void;
}
const Button = ({ name, type, onClick }: Props) => {
    return (
        <button onClick={onClick} className='bg-primary px-2 py-1 md:px-3 md:py-2 text-white w-full rounded-md' type={type}>{name}</button>
    )
}

export default Button