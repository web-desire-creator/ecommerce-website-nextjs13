import SectionSeparator from "./ui/SectionSeparator"
export default function ProductDetails() {
  return (
    <div>
        <div className="flex items-center ">
        <div className="mt-8 relative scroll-m-20 text-2xl font-semibold tracking-tight pb-10 mb-10 text-black  flex flex-col gap-y-4 md:flex-row justify-between text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">Product Information</div>
        <div className="invisible w-0 h-0 md:w-max md:h-max md:visible absolute opacity-5 -mt-10 -pt-10 -z-10 text-9xl">OVERVIEW</div>
        </div>
        <SectionSeparator/>
        <div className="flex flex-col gap-y-16">

        <div className="flex flex-col md:flex-row gap-x-52 gap-y-10 md:gap-y-52 justify-between">
            <div className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">PRODUCT DETAILS</div>
            <div className="text-xl text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-40 items-start">
            <div className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">PRODUCT CARE</div>
            <ul className="text-xl text-muted-foreground">
            <li>Hand wash using cold water.</li>
            <li>Do not using bleach.</li>
            <li>Hang it to dry.</li>
            <li>Iron on low temperature.</li>
            </ul>
        </div>
        </div>
    </div>
  )
}
