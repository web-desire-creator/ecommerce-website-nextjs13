"use client"
import Checkout from "@/components/Checkout";
import CheckOutBtn from "@/components/CheckOutBtn";
import {useSelector} from "react-redux";
import { RootState } from "@/store/store";

const checkEnviroment = () => {
  let base_url = process.env.VERCEL_ENV === "development"
   ? "http://localhost:3000"
   : "https://ecommerce-website-ten-eta.vercel.app.vercel.app/"

   return base_url
}

async function getData() {
  const res = await fetch(`${checkEnviroment()}/api/cart`, {
    next: {revalidate:0}
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

interface data{
  id : number,
  user_id: string,
  product_id: string,
  quantity:number,
  size: string,
  price:number
}

export default async function Home() {

  const userid = useSelector((state: RootState) => state.userSlice.id);


  const response:data[] = await getData();
  const cartItems:data[] = response.filter(item => item.user_id === userid) 
  return (
    <div >
    {
        cartItems.length>0?
        cartItems.map((item: any, index:any) => (
         <div key={index} className="my-10">
           <Checkout key={index} name={item.product_id} price={item.price} size={item.size} quantity={item.quantity}/>
         </div> 
        )):<div className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          No Products available
          </div>
      }
      <div className="flex justify-center">
        <CheckOutBtn cartItems={cartItems} />
      </div>
        </div>
  )
}