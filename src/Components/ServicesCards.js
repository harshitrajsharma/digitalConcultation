import React from "react";
import WhiteCards from "./WhiteCards";
import BlackCards from "./BlackCards";

export default function ServicesCards() {
    return (
        <div className="container mx-auto px-5 py-8 lg:px-10 xl:px-16 lg:py4 xl:py-4 lg:mx-auto lg:h-auto lg:items-center ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <WhiteCards line1="Search engine" line2="optimization" image="./seo.webp" link="" />
                <BlackCards line1="Pay per click" line2="advertising" image="./Payperclick.jpg" link="" />
                <BlackCards line1="Social media" line2="marketing" image="./Socialmedia.webp" link="" />
                <WhiteCards line1="E-mail" line2="marketing" image="./email.png" link="" />
            </div>
        </div>
    )
}