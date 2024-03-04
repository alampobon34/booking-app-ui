import { FLIGHTS } from "@/data/mock-api/flights";
import { Flight } from "@/types";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
    try {
        const req = request.nextUrl.searchParams;
        console.log(req);
        return NextResponse.json({ data: FLIGHTS, status: 200 });
    } catch (e) {
        return NextResponse.json({ error: e, status: 500 })
    }
}