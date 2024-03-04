'use client'
import { Hotel } from '@/types';
import { getListApiRequest } from '@/utils/axios';
import React, { useEffect, useState } from 'react'
import { Title } from '../titles/Title';
import RecentSearchCard from '../cards/RecentSearchCard';
import Arrow from '../buttons/Arrow';

const RecentSearch = () => {
    const [searchResult, setSearchResult] = useState<Hotel[]>();
    const handleLeft = () => {
        let slider = document.getElementById('recent-search');
        console.log(slider);
        if (slider) {
            const width = slider.clientWidth < 500 ? slider.clientWidth : 350;
            slider.scrollLeft = slider.scrollLeft - width;
        }
    }

    const handleRight = () => {
        let slider = document.getElementById('recent-search');
        if (slider) {
            const width = slider.clientWidth < 500 ? slider.clientWidth : 350;
            slider.scrollLeft = slider.scrollLeft + width;
        }
    }
    useEffect(() => {
        async function getLocal() {
            const bookmarkList = localStorage.getItem('HOTEL_IDS');
            if (bookmarkList) {
                const hotel = await getListApiRequest<Hotel[]>(`/hotel/${bookmarkList}`);
                setSearchResult(hotel);
            }
        }
        getLocal();
    }, [])
    return (
        <div className="flex flex-col gap-4 pb-[30px] pt-[45px]">
            <div className='flex justify-between items-center'>
                <Title title="Your Bookmark List" />
                <div>
                    <div className='flex justify-center items-center gap-2'>
                        <Arrow handleClick={handleLeft} isLeft={true} />
                        <Arrow handleClick={handleRight} isLeft={false} />
                    </div>
                </div>
            </div>
            <div style={{ scrollbarWidth: "none" }} id='recent-search' className='w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth no-scrollbar'>
                {searchResult && searchResult.slice(0).reverse().map((item, index) => {
                    return (
                        <RecentSearchCard key={item.id} item={item} />
                    );
                })}
            </div>
        </div>
    )
}

export default RecentSearch