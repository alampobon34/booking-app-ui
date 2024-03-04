import FlightSearch from '@/components/sections/FlightSearch';
import { Flight, FlightSearchParams, Pagination } from '@/types';
import { getListWithPagination } from '@/utils/axios';
import React from 'react'

interface Props {
    searchParams: FlightSearchParams
}

const page = async ({ searchParams }: Props) => {
    // console.log(searchParams);
    const data = await getListWithPagination<Flight[]>(`/flight/?departureCity=${searchParams.departureCity}&arrivalCity=${searchParams.arrivalCity}&departureDate=${searchParams.departureDate}&returnDate=${searchParams.returnDate}&adult=${searchParams.adult}&children=${searchParams.children}&desc=${searchParams.desc}&page=${searchParams.page}&minRange=${searchParams.minRange}&maxRange=${searchParams.maxRange}&airLinesName=${searchParams.airLinesName}`);
    return (
        <section>
            <div className='container'>
                <FlightSearch flightList={data} searchParams={searchParams} />
            </div>
        </section>
    )
}

export default page