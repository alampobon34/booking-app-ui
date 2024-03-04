import React from 'react'
import { Title } from '../titles/Title'
import Image from 'next/image'
import Button from '../buttons/Button'

const Offer = () => {
    return (
        <div className="flex flex-col gap-4 py-[30px]">
            <Title title="Offers" />
            <div className="bg-[url('/assets/offer.jpg')] bg-no-repeat bg-cover bg-center rounded-xl text-white">
                {/* <Image src="/assets/offer.jpg" height={360} width={1440} alt='' /> */}
                <div className='flex flex-col gap-1 py-10 px-5'>
                    <h1 className='text-xl md:text-3xl font-bold'>New year, new adventures</h1>
                    <p className="text-[14px] md:text-lg">Save 15% or more when you book and stay <br />before 1 April 2024</p>
                    <div className='w-[30%] md:w-[10%] mt-2'>
                        <Button name='Find Deal' type='button' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer