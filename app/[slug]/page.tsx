"use client"
import { products } from "@/lib/utlis/mock"
import React, { useEffect, useState } from 'react';
import ProductDisplay from "@/components/ProductDisplay"
import { StaticImageData } from "next/image"
import { getProductsData } from "@/app/views/Products"
import Link from "next/link"
export default function Page({ params }: { params: { slug: string } }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getProductsData();
                setData(result);
            } catch (error) {
                // Handle any errors that occur during the async operation
                console.error(error);
            }
        };

        fetchData();
    }, []);
    return <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
        {data.filter((unit: any) => unit.catagory === params.slug).map((item: any, index) => (
            <div key={index}>
                <Link href={`/All%20Products/${item.id}`}>
                    <ProductDisplay key={item.id} img={item.image} name={item.name} price={item.price} />
                </Link>
            </div>
        ))}
    </div>
}