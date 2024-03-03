'use client'
import React from 'react'
import { Title } from '../titles/Title';
import DestinationCard from '../cards/DestinationCard';
import { DESTINATIONS } from '@/data/mock-api/destination';
import Arrow from '../buttons/Arrow';

const Destination = () => {
    const handleLeft = () => {
        let slider = document.getElementById('destination-section');
        console.log(slider);
        if (slider) {
            const width = slider.clientWidth < 500 ? 320 : 300;
            slider.scrollLeft = slider.scrollLeft - width;
        }
    }

    const handleRight = () => {
        let slider = document.getElementById('destination-section');
        if (slider) {
            const width = slider.clientWidth < 500 ? 320 : 300;
            slider.scrollLeft = slider.scrollLeft + width;
        }
    }
    return (
        <div className="flex flex-col py-8 gap-4">
            <div className='flex justify-between items-center'>
                <Title title="Explore Your Destination" />
                <div>
                    <div className='flex justify-center items-center gap-2'>
                        <Arrow handleClick={handleLeft} isLeft={true} />
                        <Arrow handleClick={handleRight} isLeft={false} />
                    </div>
                </div>
            </div>
            <div style={{ scrollbarWidth: "none" }} id='destination-section' className='w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth no-scrollbar'>
                {DESTINATIONS.map((item, index) => {
                    return (
                        <DestinationCard
                            key={index}
                            title={item.title}
                            image={item.image}
                            packages={item.packages}
                            price={item.price}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Destination