import HotelSearch from '@/components/sections/HotelSearch';
import { Hotel, HotelSearchParams } from '@/types';
import { getListApiRequest } from '@/utils/axios';
interface Props {
    searchParams: HotelSearchParams
}
const page = async ({ searchParams }: Props) => {
    // console.log(searchParams);
    const data = await getListApiRequest<Hotel[]>(`/hotel/?city=${searchParams.city}&checkInDate=${searchParams.checkInDate}&checkOutDate=${searchParams.checkOutDate}&room=${searchParams.room}&adult=${searchParams.adult}&children=${searchParams.children}&desc=${searchParams.desc}&page=${searchParams.page}&minRange=${searchParams.minRange}&maxRange=${searchParams.maxRange}`);
    return (
        <section>
            <div className='container'>
                <HotelSearch hotelList={data} searchParams={searchParams} />
            </div>
        </section>
    )
}

export default page