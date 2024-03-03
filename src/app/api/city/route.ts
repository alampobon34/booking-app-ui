import { CITIES } from "@/data/mock-api/cities";
import { City } from "@/types";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
    try {
        const cities: City[] = CITIES;
        return NextResponse.json({ data: cities, status: 200 });
    } catch (e) {
        return NextResponse.json({ error: e, status: 500 })
    }
}