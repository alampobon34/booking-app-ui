import { HOTELS } from "@/data/mock-api/hotels";
import { Hotel } from "@/types";

import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
    try {
        const pageSize = 10;
        const city = request.nextUrl.searchParams.get('city');
        const checkInDate = request.nextUrl.searchParams.get('checkInDate');
        const checkOutDate = request.nextUrl.searchParams.get('checkOutDate');
        let room: any = request.nextUrl.searchParams.get('room') ?? "1";
        room = !isNaN(room) && room !== null ? parseInt(room) : 1;
        let adult: any = request.nextUrl.searchParams.get('adult') ?? "1";
        adult = !isNaN(adult) && adult !== null ? parseInt(adult) : 1;
        let children: any = request.nextUrl.searchParams.get('children') ?? "1";
        children = !isNaN(children) && children !== null ? parseInt(children) : 1;
        let desc: any = request.nextUrl.searchParams.get('desc') ?? "0";
        desc = !isNaN(desc) && desc !== null ? parseInt(desc) : 0;
        let page: any = request.nextUrl.searchParams.get('page') ?? "1";
        page = !isNaN(page) && page !== null ? parseInt(page) : 1;
        let minRange: any = request.nextUrl.searchParams.get('minRange') ?? "0";
        minRange = !isNaN(minRange) && minRange !== null ? parseInt(minRange) : 1;
        let maxRange: any = request.nextUrl.searchParams.get('maxRange')
        console.log('url', maxRange);
        const hotels: Hotel[] = HOTELS
            .filter(
                hotel => {
                    if (hotel.cityName.toLocaleLowerCase().includes(city?.toLocaleLowerCase() ?? '')
                        &&
                        hotel.isBooked === false && hotel.price >= minRange) {
                        if (maxRange && maxRange > minRange ) {
                            return hotel.price <= maxRange;
                        }else{
                            return hotel;
                        }
                    }
                }
            ).sort((a, b) => {
                if (desc) {
                    return b.price - a.price
                } else {
                    return a.price - b.price
                }
            });

        const dataList = hotels ? hotels.slice(page * pageSize, (page + 1) * pageSize) : [];

        // &&
        // hotel.room <= room
        // &&
        // hotel.maxAdultPerson <= adult
        // &&
        // hotel.maxChildren <= children
        return NextResponse.json({ data: dataList, status: 200 });
    } catch (e) {
        return NextResponse.json({ error: e, status: 500 })
    }
}