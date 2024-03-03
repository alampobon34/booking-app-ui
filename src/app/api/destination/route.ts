import { DESTINATIONS } from "@/data/mock-api/destination";
import { City } from "@/types";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
    try {
        const destinations: any[] = DESTINATIONS;
        return NextResponse.json({ data: destinations, status: 200 });
    } catch (e) {
        return NextResponse.json({ error: e, status: 500 })
    }
}