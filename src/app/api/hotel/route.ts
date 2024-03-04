import { HOTELS } from "@/data/mock-api/hotels";
import { Hotel, Pagination } from "@/types";


import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
    try {
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
        let maxRange: any = request.nextUrl.searchParams.get('maxRange');
        let rating: any = request.nextUrl.searchParams.get('ratings');
        const hotels: Hotel[] = HOTELS
            .filter(hotel => {
                let selectHotel = true;
                if (hotel.isBooked) {
                    selectHotel = false;
                }
                if (!hotel.cityName.toLocaleLowerCase().includes(city?.toLocaleLowerCase() ?? '')) {
                    selectHotel = false;
                }
                if (minRange && hotel.price < minRange) {
                    return selectHotel = false;
                }
                if (maxRange && hotel.price > maxRange) {
                    return selectHotel = false;
                }
                if (adult && hotel.maxAdultPerson !== adult) {
                    return selectHotel = false;
                }
                if (children && hotel.maxChildren > children) {
                    return selectHotel = false;
                }
                if (room && hotel.room !== room) {
                    return selectHotel = false;
                }
                if (rating && rating > 0 && hotel.review && hotel.review < rating) {
                    return selectHotel = false;
                }
                return selectHotel;
            })

        if (desc === 1) {
            hotels.sort((a, b) => b.price - a.price);
        } else {
            hotels.sort((a, b) => a.price - b.price);
        }
        const pageSize = 10;
        const startIndex = (page - 1) * pageSize;
        const dataList = hotels.slice(startIndex, startIndex + pageSize);
        return NextResponse.json({ data: dataList, status: 200, total: hotels.length, from: startIndex, to: startIndex + dataList.length });
    } catch (e) {
        return NextResponse.json({ error: e, status: 500 })
    }
}