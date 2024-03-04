import HotelSearch from '@/components/sections/HotelSearch';
import { Hotel, HotelSearchParams, Pagination } from '@/types';
import { getListApiRequest, getListWithPagination } from '@/utils/axios';
interface Props {
    searchParams: HotelSearchParams
}

interface Data extends Pagination {
    data: Hotel[];
}
const page = async ({ searchParams }: Props) => {
    // console.log(searchParams);
    const data = await getListWithPagination<Hotel[]>(`/hotel/?city=${searchParams.city}&checkInDate=${searchParams.checkInDate}&checkOutDate=${searchParams.checkOutDate}&room=${searchParams.room}&adult=${searchParams.adult}&children=${searchParams.children}&desc=${searchParams.desc}&page=${searchParams.page}&minRange=${searchParams.minRange}&maxRange=${searchParams.maxRange}&ratings=${searchParams.ratings}`);
    return (
        <section>
            <div className='container'>
                <HotelSearch hotelList={data} searchParams={searchParams} />
            </div>
        </section>
    )
}

export default page