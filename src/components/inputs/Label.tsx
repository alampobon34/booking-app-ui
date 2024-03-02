import React from 'react'
interface Props {
    title: string;
    labelFor: string;
}
const Labe = ({ title, labelFor }: Props) => {
    return (
        <label htmlFor={labelFor}>{title}</label>
    )
}

export default Labe