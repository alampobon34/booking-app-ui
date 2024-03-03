'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import SearchForm from './SearchForm'
import Button from '../buttons/Button'

const Hero = () => {
    useEffect(() => {
        function getData() {
            fetch('https://www.booking.com/searchresults.en-gb.html?ss=Dhaka&ssne=Dhaka&ssne_untouched=Dhaka&label=gen173nr-1FCAEoggI46AdIM1gEaBSIAQGYAQm4ARfIAQzYAQHoAQH4AQuIAgGoAgO4AuvBiq8GwAIB0gIkNjE5Mzg5MDMtNjYwMC00OTA3LTkwYjAtN2NmYTk5YTMwOWEx2AIG4AIB&sid=ff034a9d7086f6219f4fa499ea713dde&aid=304142&lang=en-gb&sb=1&src_elem=sb&src=index&dest_id=-2737683&dest_type=city&checkin=2024-03-07&checkout=2024-03-10&group_adults=4&no_rooms=1&group_children=2&age=2&age=6', {
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/html'
                }

            }).then(res => res.json()).then(res => console.log(res));

        }

    }, [])
    return (
        <section className="relative mb-6 md:mb-24">
            <Image src="/assets/hero.jpeg" height={360} width={1440} alt='' />
            <div className='absolute top-[2%] lg:top-[20%] left-[5%] text-white flex flex-col gap-2 lg:gap-5'>
                <div className='flex flex-col gap-0'>
                    <h1 className='text-2xl md:text-5xl font-bold'>Find Your Next Tour</h1>
                    <p className='mt-2 text-md md:text-xl font-normal'>Where you want to go?</p>
                </div>
                <div className='w-[40%]'>
                    <Button name='Explore' type='button' />
                </div>
            </div>
            <div className='xs:absolute sm:absolute md:-bottom-20 w-full mt-6'>
                <SearchForm />
            </div>
        </section>
    )
}

export default Hero;