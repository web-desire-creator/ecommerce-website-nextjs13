"use client"
import Logo from "@/public/Logo.webp";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Search } from "lucide-react";
import { Menu } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { menuitems, products } from "@/lib/utlis/mock";
import Link from "next/link";
import {useSelector, useDispatch} from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { userActions } from "@/store/slice/userSlice";


export default function Header() {

  const dispatch = useDispatch()

  useEffect(() => {

    const id = Cookies.get("user_id") as string
    dispatch(userActions.setUser(id))

  }, [])


  const cartValue = useSelector((state: RootState) => state.cartSlice.totalQuantity);
  return (
    <div className="flex justify-between items-center py-16 ml-auto">
      <div className="flex-none">
      <Link href="/.">
        <Image src={Logo} alt="Logo"></Image>
      </Link>
      </div>
      <div>
        <ul className="w-0 invisible md:w-full md:visible flex gap-x-20">
          {menuitems.map((item, index)=>(
            <div key={index}><Link href={`/${item}`}>{item}</Link></div>
          ))}
        </ul>
      </div>
      <div className="w-0 invisible max-w-xs md:w-full md:visible flex items-center gap-x-2">
        <Search className="flex-none" />
        <Input placeholder="What are you looking for?"/>
      </div>
      <Link href={"/cart"}>
      <div className="flex w-0 h-0 invisible md:visible md:flex-none md:w-10 md:h-10">
      <div className="w-2 h-2 rounded-full text-white z-10 text-[7px] flex justify-center bg-red-700">
       {cartValue}
      </div>
      <div>
      <ShoppingCart />
      </div>
      </div>
      </Link>
      <Menubar  className="md:w-0 md:hidden">
        <MenubarMenu>
          <MenubarTrigger>
            <div className="md:w-0 md:hidden">
              <Menu />
            </div>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href="/Female">Female</Link>{" "}
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/Male">Male</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/Kids">Kids</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/All%20Products">All Products</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href="/cart">
              <div className="flex flex-row">
                <div className="relative w-2 h-2 text-[7px] text-white rounded-full bg-red-700">
                <div className="absolute -mt-[6px] mx-[2px]">{cartValue}</div>
                </div>
                <div className="flex flex-none w-10 h-10">
                <ShoppingCart />
                </div>
              </div>
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
