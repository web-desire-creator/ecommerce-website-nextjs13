import Image from "next/image"
import { TwitterIcon, FacebookIcon, LinkedinIcon } from "lucide-react"
import SectionSeparator from "./ui/SectionSeparator"
export default function Footer() {
  return (
    <div className="mt-20">
    <div className="flex flex-col gap-y-4 md:grid md:grid-cols-5">
        <div className="md:col-span-2">
        <Image src='/Logo.webp' width={200} height={200} alt="Logo"></Image>
        <div className="w-1/2 text-lg text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</div>
        <div className="flex gap-x-4  mt-6">
            <TwitterIcon/>
            <FacebookIcon/>
            <LinkedinIcon/>

        </div>
        </div>
        <div>
            <h3 className="text-xl font-bold">Company</h3>
            <ul className="flex flex-col gap-y-2 text-lg text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
            </ul>
        </div>
        <div>
        <h3 className="text-xl font-bold">Support</h3>
        <ul className="flex flex-col gap-y-2 text-lg text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
        <li>Support Carrer</li>
        <li>24h Service</li>
        <li>Quick Chat</li>
        </ul>
        </div>
        <div>
        <h3 className="text-xl font-bold">Contact</h3>
        <ul className="flex flex-col gap-y-2 text-lg text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
        <li>Whatsapp</li>
        <li>Support 24h</li>
        </ul>
        </div>
    </div>
    <SectionSeparator/>
    <div className="pt-10 flex flex-col gap-y-4 md:flex-row justify-between text-lg text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">

        <div className="font-bold">
        Copyright@2022 Dine<br/>Market
        </div>
        <div className="font-bold">
        Design by. WebDesire<br/> Design Studio
        </div>
    
        <div className="font-bold">
        Code by. WebDesire<br/> on Github
        </div>
    </div>
    </div>
  )
}
