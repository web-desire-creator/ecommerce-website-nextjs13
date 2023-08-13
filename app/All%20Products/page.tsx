"use client"
import ProductDisplay from "@/components/ProductDisplay"
import React, { useEffect, useState } from 'react';
import Link from "next/link"
import { getProductsData } from "@/app/views/Products"
export default function Page() {
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
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
            {
                data.map((item: any, index) => (
                    <div key={index}>
                        <Link href={`/All%20Products/${item.id}`}>
                            <ProductDisplay key={item.id} img={item.image} name={item.name} price={item.price} />
                        </Link>
                    </div>
                ))}
        </div>
    )
}