import { Hotel } from '@/types'
import Image from 'next/image'
import React from 'react'

interface Prop {
    item: Hotel
}

const RecentSearchCard = ({ item }: Prop) => {
    return (
        <div className='w-full md:w-[350px] h-[100px] inline-block mr-5 border rounded-xl bg-white shadow-xl p-4'>
            <div className='flex items-center gap-4 h-full'>
                <div className='w-[20%] h-full border'>
                    <Image className='w-[80px] h-full object-cover' src={item.imageUrl} height={60} width={60} alt='' />
                </div>
                <div className='w-[80%]'>
                    <h1 className='w-[200px] truncate text-[16px] font-semibold text-custom-black-900'>{item.title}</h1>
                    <p className='text-[14px] font-normal text-custom-black-600'>{item.cityName}</p>
                </div>
            </div>
        </div>
    )
}

export default RecentSearchCard