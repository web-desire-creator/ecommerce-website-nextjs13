"use client" 
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from './ui/Button'
import Cookies from 'js-cookie';
import {useRouter} from 'next/navigation';


export default function Checkout(props:{name:string, price: number, size:string , quantity:number}) {

  const router = useRouter()

const handleDeleteItem=async(item:string, router:any)=>{

      try {
        const userid = Cookies.get("user_id")
        if (userid) {
          const res = await fetch(`/api/cart?item=${item}`,{
              method:"DELETE",
              headers: [["userid", userid]]
          }
          )
          const result = await res.json()
          console.log(result)
          router()
          
        } else {
          throw new Error("Not Authorized") 
        }
        
      } catch (error) {
        console.log(error)
      }
        
    }
  return (
    <div>
        <Card>
  <CardHeader>
    <CardTitle>{props.name}</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Price=$ {props.price}</p>
  </CardContent>
  <CardContent>
    <p>Size : {props.size}</p>
  </CardContent>
  <CardContent>
    <p>Quantity : {props.quantity}</p>
  </CardContent>
  <CardFooter>
    <p>
    <Button onClick={() => handleDeleteItem(props.name, router.refresh())}> 
        Delete
    </Button>
    </p>
  </CardFooter>

</Card>
    </div>
  )
}
