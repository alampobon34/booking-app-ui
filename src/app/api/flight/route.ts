import { FLIGHTS } from "@/data/mock-api/flights";
import { Flight } from "@/types";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
    try {

        let page: any = request.nextUrl.searchParams.get('page') && request.nextUrl.searchParams.get('page') !== null ? request.nextUrl.searchParams.get('page') : 1;

        let desc: any = request.nextUrl.searchParams.get('desc') && request.nextUrl.searchParams.get('desc') !== null ? request.nextUrl.searchParams.get('desc') : 1;

        let minRange: any = request.nextUrl.searchParams.get('minRange') && request.nextUrl.searchParams.get('minRange') !== null ? request.nextUrl.searchParams.get('minRange') : 1;

        let maxRange: any = request.nextUrl.searchParams.get('maxRange');

        let children: any = request.nextUrl.searchParams.get('children') && request.nextUrl.searchParams.get('children') !== null ? request.nextUrl.searchParams.get('children') : 0;

        let adult: any = request.nextUrl.searchParams.get('adult') && request.nextUrl.searchParams.get('adult') !== null ? request.nextUrl.searchParams.get('adult') : 1;

        let departureCity: any = request.nextUrl.searchParams.get('departureCity') && request.nextUrl.searchParams.get('departureCity') !== null ? request.nextUrl.searchParams.get('departureCity') : '';


        let arrivalCity: any = request.nextUrl.searchParams.get('arrivalCity') && request.nextUrl.searchParams.get('arrivalCity') !== null ? request.nextUrl.searchParams.get('arrivalCity') : '';

        let departureDate: any = request.nextUrl.searchParams.get('departureDate') && request.nextUrl.searchParams.get('departureDate') !== null ? request.nextUrl.searchParams.get('departureDate') : '';

        let returnDate: any = request.nextUrl.searchParams.get('returnDate') && request.nextUrl.searchParams.get('returnDate') !== null ? request.nextUrl.searchParams.get('returnDate') : '';

        let airLinesName: any = request.nextUrl.searchParams.get('airLinesName') && request.nextUrl.searchParams.get('airLinesName') !== null ? request.nextUrl.searchParams.get('airLinesName') : '';
        const flights: Flight[] = FLIGHTS.filter((flight) => {
            let selectFlight = true;
            if (!flight.departureCity.toLocaleLowerCase().includes(departureCity?.toLocaleLowerCase() ?? '')) {
                selectFlight = false;
            }
            if (!flight.arrivalCity.toLocaleLowerCase().includes(arrivalCity?.toLocaleLowerCase() ?? '')) {
                selectFlight = false;
            }
            if (flight.departureDate !== departureDate) {
                selectFlight = false;
            }
            if (flight.children && flight.children !== +children) {
                selectFlight = false;
            }
            if (flight.adult && flight.adult !== +adult) {
                selectFlight = false;
            }
            if (airLinesName && airLinesName !== null) {
                if (!flight.airLinesName.toLowerCase().includes(airLinesName.toLowerCase())) {
                    page = 1;
                    selectFlight = false;
                }
            }
            if (minRange) {
                if (flight.price < minRange) {
                    selectFlight = false;
                }
            }
            if (maxRange && flight.price > maxRange) {
                selectFlight = false;
            }
            return selectFlight;
        });
        if (+desc === 1) {
            flights.sort((a, b) => b.price - a.price);
        } else {
            flights.sort((a, b) => a.price - b.price);
        }
        const pageSize = 10;
        const startIndex = (+page - 1) * pageSize;
        const dataList = flights.slice(startIndex, startIndex + pageSize);
        return NextResponse.json({ data: dataList, status: 200, total: flights.length, from: startIndex, to: startIndex + dataList.length });
    } catch (e) {
        return NextResponse.json({ error: e, status: 500 })
    }
} 