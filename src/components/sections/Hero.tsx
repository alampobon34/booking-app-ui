'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import SearchForm from './SearchForm'

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
            <div className='absolute top-[10%] left-[5%] text-white'>
                <h1 className=' text-4xl text-bold'>Find your next tour</h1>
                <p className='mt-2 text-xl'>Where you want to go?</p>
            </div>
            <div className='xs:absolute sm:absolute md:-bottom-20 w-full mt-6'>
                <SearchForm />
            </div>
        </section>
    )
}

export default Hero