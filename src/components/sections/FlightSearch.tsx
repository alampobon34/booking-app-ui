'use client'
import { Flight, FlightSearchParams, Pagination } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import NumberInput from '../inputs/NumberInput';
import { GrPowerReset } from 'react-icons/gr';
import { IoSearchOutline } from 'react-icons/io5';
import Checkbox from '../inputs/Checkbox';
import FlightCard from '../cards/FlightCard';

interface Data extends Pagination {
    data: Flight[];
}

interface Props {
    searchParams: FlightSearchParams;
    flightList: Data;
    airLinesList: string[];
}



const FlightSearch = ({ searchParams, flightList, airLinesList }: Props) => {
    // console.log(flightList);
    const router = useRouter();
    const [searchParam, setSearchParam] = useState<FlightSearchParams>(searchParams);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [dataList, setDataList] = useState<Data>(flightList);
    const [desc, setDesc] = useState<number>(searchParam?.desc === 1 ? 1 : 0);
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number | null>(null);
    const [airLinesName, setAirLinesName] = useState<string>(searchParam.airLinesName ?? '');

    const handleDesc = (event: any) => {
        const value = event.target.value;
        setDesc(value);
        setSearchParam({ ...searchParam, desc: value === 1 ? 1 : 0 })
    }

    const reset = () => {
        setMaxValue(null);
        setMinValue(0);
        setAirLinesName('');
        setSearchParam({ ...searchParam, minRange: 0, maxRange: null, airLinesName: '' })
    }

    const handleAmountSearch = () => {
        setSearchParam({ ...searchParam, minRange: minValue, maxRange: maxValue })
    }

    const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const checked = event.target.checked;
        setSearchParam({ ...searchParam, airLinesName: checked ? value.toLowerCase() : '' })
        setAirLinesName(checked ? value.toLowerCase() : '');
    }

    useEffect(() => {
        router.push(`/flight/?departureCity=${searchParams.departureCity}&arrivalCity=${searchParams.arrivalCity}&departureDate=${searchParams.departureDate}&returnDate=${searchParams.returnDate}&adult=${searchParams.adult}&children=${searchParams.children}&desc=${desc}&page=${currentPage}&minRange=${minValue}&maxRange=${maxValue}&airLinesName=${airLinesName ?? ''}`);
    }, [searchParam])
    return (
        <div className='w-full flex flex-col py-4 gap-2'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-3'>
                <div className='w-full md:w-1/4'>

                </div>
                <div className='w-full md:w-3/4 flex justify-end md:justify-between items-center flex-1'>
                    <div className='flex-1'>
                        <h1 className='hidden md:block text-lg md:text-xl font-bold'>{searchParam.departureCity ? searchParam.departureCity.toUpperCase() : ''} : {flightList.data && flightList.total ? flightList.total : ''} Records Found.</h1>
                    </div>
                    <select value={desc} onChange={handleDesc} className="border p-2 rounded-md outline-none text-sm">
                        <option className='text-sm' value="0">Low-High</option>
                        <option className='text-sm' value="1">High-Low</option>
                    </select>
                </div>
                {/* <h1 className='text-lg text-end md:text-xl font-bold md:hidden'>{searchParam.city ? searchParam.city.toUpperCase() : ''} : {flightList.data && flightList.total ? flightList.total : ''} Records Found.</h1> */}
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
                            <h1 className='pl-2 text-lg font-semibold'>Airlines</h1>
                            <div className="flex flex-col gap-3 px-2">
                                {
                                    airLinesList && airLinesList.map((el, index) => <Checkbox label='' name='airLinesName' onChange={handleCheckBox} value={el} isChecked={airLinesName === el.toLowerCase()} key={index} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-3/4'>
                    <div className=''>
                        {
                            flightList.data && flightList.data.length > 0 ?
                                flightList.data.map((flight, index) => <FlightCard flight={flight} key={index} />)
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
                    <p className='text-[14px] font-semibold text-custom-black-600'>Showing {flightList.from + 1} - {flightList.to + 1}</p>
                    <div className='flex justify-end items-center flex-1'>
                        <div className='flex gap-2'>
                            <button disabled={flightList.from === 0} onClick={() => { setCurrentPage(currentPage - 1); setSearchParam({ ...searchParam, page: currentPage - 1 }) }} className='hover:text-primary text-custom-black-900' type='button'>Previous</button>
                            <button disabled={flightList.to === flightList.total} onClick={() => { setCurrentPage(currentPage + 1); setSearchParam({ ...searchParam, page: currentPage + 1 }) }} className='hover:text-primary text-custom-black-900' type='button'>Next</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FlightSearch