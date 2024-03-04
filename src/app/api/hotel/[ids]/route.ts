import { HOTELS } from "@/data/mock-api/hotels";
import { City, Hotel } from "@/types";
import { NextResponse } from "next/server";
export async function GET(request: Request, { params }: { params: { ids: string } }) {
    try {
        const data: Hotel[] = [];
        if (params) {
            const list = params.ids.split(',');
            console.log(list);
            list.forEach(l => HOTELS.find(h => {
                if (h.id === +l) {
                    data.push(h);
                    return;
                }
            }))
        }
        console.log(data.length);
        return NextResponse.json({ data: data, status: 200 });
    } catch (e) {
        return NextResponse.json({ error: e, status: 500 })
    }
}