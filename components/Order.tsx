"use client";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/Button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { client } from '@/sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'
import ProductDetails from "./ProductDetails";
import {useDispatch} from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";
const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}
export default function Order(props: {id:number; image: any; name: string; price: number }) {
  const dispatch= useDispatch();
  const [number, setNumber] = useState(1);
  const [size,setsize]= useState("s")
  const handleAddtoCart=async()=>{
    const res =await fetch("/api/cart",{
      method:"POST",
      body:JSON.stringify({
        product_id:props.name,
        quantity: number,
        size: size,
        price: number*props.price
      })
    })
    const result =await res.json()
    console.log(result)
    dispatch(cartActions.addToCart({ product: {}, quantity: 1 }));

  }
  return (
    <div>
      <div className="flex flex-col md:flex-row md:gap-x-24 gap-y-10">
        {/* left side */}
        <div className="flex items-start gap-x-10">
          <img src={urlFor(props.image).width(100).url()} />
          <img src={urlFor(props.image).width(500).url()} />
        </div>
        {/* right side */}
        <div className="flex flex-col items-center gap-y-5">
          <div className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            {props.name}
          </div>
          <div className="scroll-m-20 text-xl font-semibold tracking-tight">
            SELECT SIZE
          </div>
          <ul className="flex gap-x-5 text-gray-600 scroll-m-20 text-xl font-semibold tracking-tight">
            <RadioGroup defaultValue="comfortable" className="flex gap-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="XS" id="r1" />
                <Label onClick={()=>setsize("xs")} htmlFor="r1">XS</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="S" id="r2" />
                <Label onClick={()=>setsize("s")} htmlFor="r2">S</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="M" id="r3" />
                <Label onClick={()=>setsize("m")} htmlFor="r3">M</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="L" id="r4" />
                <Label onClick={()=>setsize("l")} htmlFor="r4">L</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="XL" id="r5" />
                <Label onClick={()=>setsize("xl")} htmlFor="r5">XL</Label>
              </div>
            </RadioGroup>
          </ul>
          <div className=" scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Quantity:
          </div>
          <div className="flex gap-x-2 items-center">
            <Button
              onClick={() => {
                if (number > 1)
                  setNumber(number - 1);
                else
                  setNumber(1)
              }}
            >
              -
            </Button>
            <div>{number}</div>
            <Button onClick={() => {
              setNumber(number + 1);
            }}>+</Button>
          </div>
          <div>
            <Button onClick={handleAddtoCart} className="py-10 flex flex-1 gap-x-2 w-40 rounded-none">
              {" "}
              <ShoppingCart /> <div>Add to Cart</div>
            </Button>
          </div>
          <div className="scroll-m-20 text-xl font-semibold tracking-tight">${number * props.price}</div>
        </div>
      </div>
      <div className="pt-10">
        <ProductDetails />
      </div>
    </div>
  );
}

