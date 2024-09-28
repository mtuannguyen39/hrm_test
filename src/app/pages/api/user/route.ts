import { NextResponse } from "next/server";

export async function GET() {
    const user = {id: 1, name: 'tuan', email: '123@gmail.com'};
    return NextResponse.json(user);
}