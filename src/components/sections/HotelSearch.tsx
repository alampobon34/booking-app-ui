'use client'
import { Hotel, HotelSearchParams, Pagination } from '@/types'
import React, { useEffect, useState } from 'react'
import Checkbox from '../inputs/Checkbox';
import { useRouter } from 'next/navigation';
import HotelCard from '../cards/HotelCard';
import api, { getListApiRequest } from '@/utils/axios';
import axios from 'axios';
import NumberInput from '../inputs/NumberInput';
import { GrPowerReset } from 'react-icons/gr';
import { IoSearchOutline } from 'react-icons/io5';

interface Data extends Pagination {
    data: Hotel[];
}

interface Props {
    searchParams: HotelSearchParams;
    hotelList: Data
}

const HotelSearch = ({ searchParams, hotelList }: Props) => {
    // console.log(searchParams);
    const router = useRouter();
    const [searchParam, setSearchParam] = useState<HotelSearchParams>(searchParams);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [dataList, setDataList] = useState<Data>(hotelList);
    const [desc, setDesc] = useState<number>(searchParam?.desc === 1 ? 1 : 0);
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number | null>(null);
    const [rating, setRating] = useState<number | null>(searchParam.ratings ?? 0);

    const handleDesc = (event: any) => {
        const value = event.target.value;
        console.log(value);
        setDesc(value);
        setSearchParam({ ...searchParam, desc: value === 1 ? 1 : 0 })
    }

    const reset = () => {
        setMaxValue(null);
        setMinValue(0);
        setRating(null);
        setSearchParam({ ...searchParam, minRange: 0, maxRange: null, ratings: null })
    }

    const handleAmountSearch = () => {
        setSearchParam({ ...searchParam, minRange: minValue, maxRange: maxValue })
    }

    const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const checked = event.target.checked;
        setSearchParam({ ...searchParam, ratings: checked ? +value : null })
        setRating(checked ? +value : null);
    }

    useEffect(() => {
        router.push(`/hotel/?city=${searchParam.city}&checkInDate=${searchParam.checkInDate}&checkOutDate=${searchParam.checkOutDate}&room=${searchParam.room}&adult=${searchParam.adult}&children=${searchParam.children}&desc=${desc}&page=${currentPage}&minRange=${searchParam.minRange}&maxRange=${searchParam.maxRange ?? ''}&ratings=${searchParam.ratings ?? ''}`);
    }, [searchParam])
    return (
        <div className='w-full flex flex-col py-4 gap-2'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-3'>
                <div className='w-full md:w-1/4'>

                </div>
                <div className='w-full md:w-3/4 flex justify-end md:justify-between items-center flex-1'>
                    <div className='flex-1'>
                        <h1 className='hidden md:block text-lg md:text-xl font-bold'>{searchParam.city ? searchParam.city.toUpperCase() : ''} : {hotelList.data && hotelList.total ? hotelList.total : ''} Records Found.</h1>
                    </div>
                    <select value={desc} onChange={handleDesc} className="border p-2 rounded-md outline-none text-sm">
                        <option className='text-sm' value="0">Low-High</option>
                        <option className='text-sm' value="1">High-Low</option>
                    </select>
                </div>
                <h1 className='text-lg text-end md:text-xl font-bold md:hidden'>{searchParam.city ? searchParam.city.toUpperCase() : ''} : {hotelList.data && hotelList.total ? hotelList.total : ''} Records Found.</h1>
            </div>

            <div className='flex flex-col md:flex-row gap-3'>
                <div className='w-full md:w-1/4 md:pb-3'>
                    <div className='bg-border-color w-full h-full rounded-xl p-3 flex flex-col gap-6'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='pl-2 text-lg font-semibold'>Price Range</h1>
                            <form>
                                <div className="flex flex-col gap-3 px-2">
                                    <NumberInput value={minValue} name='minValue' placeholder='Min Value' type='number' min='0' onChange={(event) => setMinValue(+event.target.value)} />
                                    <NumberInput value={maxValue} name='maxValue' placeholder='Max Value' type='number' min='0' onChange={(event) => setMaxValue(+event.target.value)} />
                                    <div className='w-full flex gap-2 mt-2'>
                                        <button type="button" onClick={reset} className="w-full h-[32px] text-primary-black border border-primary rounded-sm flex justify-center items-center hover:bg-primary hover:text-white group">
                                            <GrPowerReset className="text-primary group-hover:text-white" size={18} />
                                        </button>
                                        <button disabled={minValue < 0 || (maxValue != null && maxValue <= 0) || (maxValue != null && maxValue <= minValue)} type="button" onClick={handleAmountSearch} className="w-full h-[32px] bg-primary rounded-sm flex justify-center items-center cursor-pointer">
                                            <IoSearchOutline className='text-white' size={18} />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className='flex flex-col gap-2 bg-white rounded-lg py-3'>
                            <h1 className='pl-2 text-lg font-semibold'>Ratings</h1>
                            <div className="flex flex-col gap-3 px-2">
                                {
                                    [1, 2, 3, 4, 5].map((el, index) => <Checkbox key={index} label='Star' name='rating' onChange={handleCheckBox} value={el} isChecked={rating === el} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-3/4'>
                    <div className=''>
                        {
                            hotelList.data && hotelList.data.length > 0 ?
                                hotelList.data.map((hotel, index) => <HotelCard hotel={hotel} key={index} />)
                                :
                                <div className='w-full h-full'>
                                    <h1 className='flex justify-center items-center text-lg md:text-xl font-bold'>Sorry Not Data Found.</h1>
                                </div>
                        }
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between gap-3'>
                <div className='w-full md:w-1/4'>
                </div>
                <div className='w-3/4 flex justify-between items-center'>
                    <p className='text-[14px] font-semibold text-custom-black-600'>Showing {hotelList.from + 1} - {hotelList.to + 1}</p>
                    <div className='flex justify-end items-center flex-1'>
                        <div className='flex gap-2'>
                            <button disabled={hotelList.from === 0} onClick={() => { setCurrentPage(currentPage - 1); setSearchParam({ ...searchParam, page: currentPage - 1 }) }} className='hover:text-primary text-custom-black-900' type='button'>Previous</button>
                            <button disabled={hotelList.to === hotelList.total} onClick={() => { setCurrentPage(currentPage + 1); setSearchParam({ ...searchParam, page: currentPage + 1 }) }} className='hover:text-primary text-custom-black-900' type='button'>Next</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HotelSearch