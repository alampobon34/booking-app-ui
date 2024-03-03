import { Hotel } from '@/types'
import Image from 'next/image'
import React from 'react'
import Button from '../buttons/Button'
import Link from 'next/link'
import { getRatings } from '@/utils/ratings'

interface Prop {
    hotel: Hotel
}

const HotelCard = ({ hotel }: Prop) => {
    return (
        <div className="flex flex-col gap-y-2 md:flex-row bg-white mb-3 p-3 border-[1.5px] border-border-color rounded-xl">
            <div className="md:w-1/4">
                <Image
                    className="h-full w-full rounded-md"
                    src={hotel.imageUrl}
                    height={280}
                    width={280}
                    alt=""
                    objectFit="cover"
                />
            </div>
            <div className="w-full md:w-3/4 px-2 flex flex-col md:gap-y-2 md:ml-2">
                <div className="flex justify-between items-start">
                    <div className='w-full flex justify-between'>
                        <div className=''>
                            <Link href="" className='w-full font-bold text-custom-black-900 text-[18px] hover:text-primary'>
                                {hotel.title}
                            </Link>
                            <p className="flex items-center gap-2 text-[16px] text-custom-black-900">
                                <Image src="/assets/icons/map.svg" height={16} width={16} alt='' />
                                {hotel.cityName}
                            </p>
                            <div className='mt-3 flex flex-col gap-2'>
                                <p className="flex items-center gap-2 text-[14px]">
                                    <Image src="/assets/icons/bed.svg" height={16} width={16} alt='' />
                                    King Size Bed
                                </p>
                                <p className="flex items-center gap-2 text-[14px]">
                                    <Image src="/assets/icons/done.svg" height={16} width={16} alt='' />
                                    Free Breakfast
                                </p>
                                <p className="flex items-center gap-2 text-[14px]">
                                    <Image src="/assets/icons/done.svg" height={16} width={16} alt='' />
                                    Internet Services
                                </p>
                                <p className="flex items-center gap-2 text-[14px]">
                                    <Image src="/assets/icons/done.svg" height={16} width={16} alt='' />
                                    Swimming Pool
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end md:hidden">
                            <p className="">
                                BDT <span className='font-bold text-[20px]'>{hotel.price}</span>
                            </p>
                            <p className="text-[14px]">For {hotel.maxAdultPerson} Person, {hotel.maxChildren} Child</p>
                            <Link href="" className="text-[14px] underline text-custom-black-900">
                                View Detail
                            </Link>
                        </div>


                    </div>
                    <div className="hidden md:flex md:flex-col md:justify-end md:w-2/6 md:gap-1">
                        <div className='flex justify-end gap-2 items-center'>
                            <span className='text-[12px] cursor-pointer'>12 Reviews</span>
                            <div className='bg-[#EAFBFE] border border-[#5DADE9] flex items-center justify-center rounded-t-md rounded-r-md text-white p-1'>
                                <span className='text-[12px] text-custom-black-900 font-medium italic'>{hotel.review} of 10</span>
                            </div>

                        </div>
                        <p className="text-end mt-3">
                            BDT <span className='font-bold text-[20px]'>{hotel.price}</span>
                        </p>
                        <p className="text-end text-[14px]">For {hotel.maxAdultPerson} Person, {hotel.maxChildren} Child</p>
                        <Link href="" className="text-end text-[14px] underline text-custom-black-900">
                            View Detail
                        </Link>
                    </div>
                </div>
                <div className="py-1 mt-4 md:mt-0 md:text-end flex md:justify-end">
                    <div className='w-full md:w-1/4'>
                        <Button name='Reserve' type='button' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelCard