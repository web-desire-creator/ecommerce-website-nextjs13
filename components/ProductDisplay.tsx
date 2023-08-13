"use client"

import React from 'react'
import { client } from '@/sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}
export default function ProductDisplay(props: { img: any, name: string, price: number }) {
  return (
    <div className="hover:scale-110 flex flex-col items-center duration-500">
      <div>
        <img src={urlFor(props.img).width(200).url()} />
      </div>
      <div className=" flex gap-x-10">
        <div className="mt-5 scroll-m-20 text-xl font-semibold tracking-tight">{props.name}</div>
        <div className="mt-5 scroll-m-20 text-xl font-semibold tracking-tight">${props.price}</div>
      </div>
    </div>
  )
}
