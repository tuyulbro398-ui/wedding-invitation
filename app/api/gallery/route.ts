import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request){

 const body = await req.json()

 const image = await prisma.gallery.create({
  data:{
   image: body.image
  }
 })

 return NextResponse.json(image)

}

export async function GET(){

 const images = await prisma.gallery.findMany()

 return NextResponse.json(images)

}
