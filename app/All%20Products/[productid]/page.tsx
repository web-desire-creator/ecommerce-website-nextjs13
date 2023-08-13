"use client"
import Order from "@/components/Order"
import React, { useEffect, useState } from 'react';
import { getProductsData } from "@/app/views/Products";
export default function Page({ params }: { params: { productid: string } }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: any = await getProductsData();
                setData(result);
            } catch (error) {
                // Handle any errors that occur during the async operation
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data.filter((unit: any) => unit.id == params.productid).map((item: any, index) => (
                <div key={index} className="flex flex-col md:flex-row md:gap-x-24 gap-y-10">
                    <Order key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} />
                </div>
            ))}
        </div>
    )
}
