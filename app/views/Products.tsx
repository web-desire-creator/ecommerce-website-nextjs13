"use client";
import ProductDisplay from "@/components/ProductDisplay";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { client } from "@/sanity/lib/client"
export const getProductsData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    id,
    name,
    catagory,
    price,
    image
  }`);
  return res;
}


export default async function Products() {
  const data = await getProductsData();
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center">
        <div className="text-sm font-medium text-blue-900 leading-none">
          Products
        </div>
        <div className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Check What We Have
        </div>
      </div>
      <div className="invisible md:visible">
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((item: any, index:any) => (
            <SwiperSlide key={index}>
              <Link href={`/All%20Products/${item.id}`}>
                <ProductDisplay
                  key={item.id}
                  img={item.image}
                  name={item.name}
                  price={item.price}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="visible md:invisible md:w-0 md:h-0">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((item: any, index:any) => (
            <SwiperSlide key={index}>
              <Link href={`/All%20Products/${item.id}`}>
                <ProductDisplay
                  key={item.id}
                  img={item.image}
                  name={item.name}
                  price={item.price}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
