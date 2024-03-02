import { NextResponse } from "next/server";
export async function GET(request: Request) {
    try {
        const categories: any[] = [];
        return NextResponse.json({ data: categories, status: 200 });
    } catch (e) {
        return NextResponse.json({ error: e, status: 500 })
    }
}