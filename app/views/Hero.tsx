import {ShoppingCart} from 'lucide-react'
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import header from "@/public/header.webp"
import feature1 from "@/public/Featured1.webp"
import feature2 from "@/public/Featured2.webp"
import feature3 from "@/public/Featured3.webp"
import feature4 from "@/public/Featured4.webp"
import Image from 'next/image'
import Link from 'next/link'
export default function Hero() {
  return (
    <section className='flex justify-between items-center'>
        {/* right side */}
        <div>
    <Badge className="bg-[#E1EDFF] text-[#0000FF] rounded-lg text-lg my-5">Sale 70%</Badge>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    An Industrial Take on Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
      </p>
      <Link href={`/All%20Products`}>
      <Button className="mt-5 py-10 flex flex-1 gap-x-2 w-40 rounded-none"> <ShoppingCart/> <div>Start Shopping</div></Button></Link>
      <div className='flex flex-wrap gap-x-5 py-10'>
        <Image src={feature1} alt='logo1'></Image>
        <Image src={feature2} alt='logo1'></Image>
        <Image src={feature3} alt='logo1'></Image>
        <Image src={feature4} alt='logo1'></Image>
      </div>
        </div>
    {/* left side  */}
    <div className='bg-[#FFECE3] rounded-full invisible md:visible w-0 md:w-max md:flex-none'>
        <Image src={header} alt='hero photo'></Image>
    </div>

    </section>

  )
}
