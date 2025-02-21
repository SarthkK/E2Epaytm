import { prisma } from "@repo/db";
import { NextResponse } from "next/server";


export async function GET(){
    const res = await prisma.user.create({
        data: {
            name: "Sarthk",
            email: "sarthk2@gmail.com"
        }, 
        select: {
            name: true,
            email: true
        }
    })
    return NextResponse.json({res})
}