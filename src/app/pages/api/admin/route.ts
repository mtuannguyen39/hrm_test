import { NextResponse } from "next/server";

export async function GET() {
    const employees = [
        {id: 1,name: 'Minh Tuan', email: 'tuan@gmail.com'},
        {id: 2,name: 'Tuan Nguyen', email: 'nguyentuan@gmail.com'}
    ];

    return NextResponse.json(employees);
}