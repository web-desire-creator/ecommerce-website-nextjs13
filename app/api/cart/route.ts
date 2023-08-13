import { NextRequest, NextResponse } from "next/server";
import {db,cartTable} from "@/sanity/lib/drizzle"
import {v4 as uuid} from "uuid"
import { cookies } from "next/dist/client/components/headers";
import {eq} from "drizzle-orm"
import { headers } from 'next/headers'
import product from "@/sanity/product";
// fetch (`http://localhost:3000/api/cart?user_id=${cookies().get("user_id")?.value}`)
export const GET = async(request : NextRequest)=>{
    const req = request.nextUrl
    const uid = req.searchParams.get("user_id") as string
    try{
        const res=await db.select().from(cartTable);
        return NextResponse.json(res)
    }
    catch(error){
        console.log (error)
        return NextResponse.json({message: "Something went wrong"})
    }
}

export const POST=async (request:NextRequest) => {
    
    const req= await request.json()
    const uid= uuid()
    const setCookies =cookies();
    const user_id = setCookies.get("user_id")
    if(!user_id){
        setCookies.set("user_id",uid)
    }
    
    
    try{
        const res = await db.insert(cartTable).values({

            user_id: cookies().get("user_id")?.value as string,
            product_id:req.product_id,
            quantity:req.quantity,
            size: req.size,
            price: req.price
        }).returning();
        return NextResponse.json({message:"Successfull run"})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({message:"Something went wrong"})
    }
}

export const DELETE=async (request:NextRequest) => {

    const userid = headers().get("userid")
    const productId = request.nextUrl.searchParams.get("item")

    try{ 
        if (userid && productId) {
            const res = await db.delete(cartTable).where(
            eq(cartTable.user_id, userid) && eq(cartTable.product_id, productId)).returning();
            return NextResponse.json({data:res})
        } else {
            return NextResponse.json("Not authorized")
        }
}
catch(error){
    console.log(error)
    return NextResponse.json({message:"Something went wrong"})
}
}