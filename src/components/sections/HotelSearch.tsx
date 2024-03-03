'use client'
import { Hotel, HotelSearchParams } from '@/types'
import React, { useEffect, useState } from 'react'
import Checkbox from '../inputs/Checkbox';
import { useRouter } from 'next/navigation';
import HotelCard from '../cards/HotelCard';
import api, { getListApiRequest } from '@/utils/axios';
import axios from 'axios';
import NumberInput from '../inputs/NumberInput';
import { GrPowerReset } from 'react-icons/gr';
import { IoSearchOutline } from 'react-icons/io5';

interface Props {
    searchParams: HotelSearchParams;
    hotelList: Hotel[];
}

const HotelSearch = ({ searchParams, hotelList }: Props) => {
    console.log(hotelList);
    const router = useRouter();
    const [searchParam, setSearchParam] = useState<HotelSearchParams>(searchParams);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [dataList, setDataList] = useState<Hotel[]>(hotelList);
    const [desc, setDesc] = useState<number>(searchParam?.desc === 1 ? 1 : 0);
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number | null>(null);

    const handleDesc = (event: any) => {
        const value = event.target.value;
        console.log(value);
        setDesc(value);
        setSearchParam({ ...searchParam, desc: value === 1 ? 1 : 0 })
    }

    const reset = () => {
        setMaxValue(null);
        setMinValue(0);
        setSearchParam({ ...searchParam, minRange: 0, maxRange: null })
    }

    const handleAmountSearch = () => {
        setSearchParam({ ...searchParam, minRange: minValue, maxRange: maxValue })
    }

    useEffect(() => {
        router.push(`/hotel/?city=${searchParam.city}&checkInDate=${searchParam.checkInDate}&checkOutDate=${searchParam.checkOutDate}&room=${searchParam.room}&adult=${searchParam.adult}&children=${searchParam.children}&desc=${desc}&page=${currentPage}&minRange=${searchParam.minRange}&maxRange=${searchParam.maxRange}`);
    }, [searchParam])
    return (
        <div className='w-full flex flex-col py-4 gap-3'>
            <div className='flex justify-end items-center'>
                <select value={desc} onChange={handleDesc} className="border p-2 rounded-md outline-none text-sm">
                    <option className='text-sm' value="0">Low-High</option>
                    <option className='text-sm' value="1">High-Low</option>
                </select>
            </div>
            <div className='flex flex-col md:flex-row gap-3'>
                <div className='w-full md:w-1/4 md:pb-3'>
                    <div className='bg-border-color w-full h-full rounded-xl p-3 flex flex-col gap-2'>
                        <h1 className='pl-2 text-lg font-semibold'>Price Range</h1>
                        <form>
                            <div className="flex flex-col gap-2 px-2">
                                <NumberInput value={minValue} height={32} name='minValue' placeholder='Min Value' type='number' min='0' onChange={(event) => setMinValue(+event.target.value)} />
                                <NumberInput value={maxValue} height={32} name='maxValue' placeholder='Max Value' type='number' min='0' onChange={(event) => setMaxValue(+event.target.value)} />
                                <div className='w-full flex gap-2'>
                                    <button type="button" onClick={reset} className="w-full h-[32px] text-primary-black border border-custom-black-900 rounded-sm flex justify-center items-center hover:bg-custom-black-900 hover:text-white group">
                                        <GrPowerReset className="text-primary-black group-hover:text-white" size={18} />
                                    </button>
                                    <button disabled={minValue < 0 || (maxValue != null && maxValue <= 0) || (maxValue != null && maxValue <= minValue)} type="button" onClick={handleAmountSearch} className="w-full h-[32px] bg-custom-black-900 rounded-sm flex justify-center items-center cursor-pointer">
                                        <IoSearchOutline color="#fff" size={18} />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-full md:w-3/4'>
                    <div className=''>
                        {
                            hotelList && hotelList.map((hotel, index) => <HotelCard hotel={hotel} key={index} />)
                        }
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-end'>
                <div className='flex gap-2'>
                    <button className='hover:text-primary' type='button'>Previous</button>
                    <button onClick={() => { setCurrentPage(currentPage + 1); setSearchParam({ ...searchParam, page: currentPage + 1 }) }} className='hover:text-primary' type='button'>Next</button>
                </div>
            </div>
        </div>
    )
}

export default HotelSearch