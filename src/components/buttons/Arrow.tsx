import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
interface Props {
    isLeft: boolean;
    handleClick: () => void
}
const Arrow = ({ isLeft, handleClick }: Props) => {
    if (isLeft) {
        return (
            <button type='button' onClick={handleClick} className='bg-gray-100 rounded-full w-[30px] md:w-[36px] h-[30px] md:h-[36px] flex justify-center items-center group'>
                <FaArrowLeft size={15} className="group-hover:text-primary" />
            </button>
        )
    } else {
        return (
            <button type='button' onClick={handleClick} className='bg-gray-100 rounded-full w-[30px] md:w-[36px] h-[30px] md:h-[36px] flex justify-center items-center group'>
                <FaArrowRight size={15} className="group-hover:text-primary" />
            </button>
        )
    }
}

export default Arrow


