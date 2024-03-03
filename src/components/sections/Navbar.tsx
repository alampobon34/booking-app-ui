'use client'
import { NAVLINKS, CURRENCIES } from '@/data/data'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from '../links/NavLink'
import Image from 'next/image'
import { Currency } from '@/types'


const Navbar = () => {
    const [currency, setCurrency] = useState<string>(CURRENCIES[0].value);

    const handleCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrency(e.target.value)
    }

    return (
        <nav className='w-full h-12 sticky top-0 bg-white py-2 z-50 border-b'>
            <div className='flex justify-between items-center container'>
                <div>
                    <Link className='text-2xl font-bold text-primary' href="/">BOOKING.APP</Link>
                </div>

                <div className='hidden md:flex items-center gap-6'>
                    {
                        NAVLINKS.map((navLink, index) => <NavLink navLink={navLink} key={index} />)
                    }
                </div>

                <div>
                    <div className='flex items-center gap-1'>
                        <Image src={currency} alt="Logo"
                            width={16}
                            height={16}
                            objectFit="contain" />
                        <select onChange={handleCurrency} className='appearance-none outline-none bg-transparent' name="" id="">
                            {
                                CURRENCIES.map((currency, index) => <option key={index} value={currency.value}>{currency.name}</option>)
                            }
                        </select>
                    </div>

                    <div>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar