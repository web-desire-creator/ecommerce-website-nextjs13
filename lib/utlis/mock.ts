import { product } from "./types";
import P1 from "@/public/p1.png"
import P2 from "@/public/p2.png"
import P3 from "@/public/p3.png"
import P4 from "@/public/p4.png"
import P5 from "@/public/p5.png"
export const products:product[]=[
    {
        id:1,
        name:"Product-1",
        price:230,
        catagory:"Female",
        image:P1
    },
    {
        id:2,
        name:"Product-2",
        price:202,
        catagory:"Male",
        image:P2
    },
    {
        id:3,
        name:"Product-3",
        price:103,
        catagory:"Kids",
        image:P3
    }
    ,
    {
        id:4,
        name:"Product-4",
        price:156,
        catagory:"Male",
        image:P4
    }
    ,
    {
        id:5,
        name:"Product-5",
        price:120,
        catagory:"Female",
        image:P5
    }
    ,
    {
        id:6,
        name:"Product-6",
        price:12,
        catagory:"Female",
        image:P5
    }
];
export const menuitems=[
    "Female",
    "Male",
    "Kids",
    "All Products"
]