import { StaticImageData } from "next/image";

export type product={
    id:number;
    name:string;
    price:number;
    catagory:string;
    image: StaticImageData |string
}