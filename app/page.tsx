import Hero from "./views/Hero";
import Products from "./views/Products";


export default function Home() {
  return (
    <>
    <Hero/>
    {/* @ts-expect-error Server Component */} 
    <Products/>
    </>
  )
}
