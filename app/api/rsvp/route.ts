import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {

 const body = await req.json()

 const wish = await prisma.guestWish.create({
  data:{
   name: body.name,
   message: body.message
  }
 })

 return NextResponse.json(wish)

}

export async function GET(){

 const wishes = await prisma.guestWish.findMany({
  orderBy:{createdAt:"desc"}
 })

 return NextResponse.json(wishes)

}
