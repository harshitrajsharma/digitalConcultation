import React from "react";

export default function Hero() {
    return (
        <div className="container mx-auto px-5 py-8 flex flex-col md:flex-row xl:max-w-8xl lg:mx-auto lg:px-10 xl:px-16 lg:py-6">
            <div className="md:hidden flex w-60% justify-center items-center mx-auto">
                <img className="my-auto" src="./Image1.webp" width={"100%"} />
            </div>
            <div className="md:w-1/2 md:pr-28 md:pl-4 md:py-12 md:text-left xl:gap-6 flex flex-col justify-center ">
                <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold pb-6 leading-12 lg:leading-20">Navigating the digital landscape for succcess</h1>
                <p className="text-base md:text-lg ">
                    Our digital Marketing agency helps businesses to grow and succeed online through a range of services including SEO, PPO social media marketing and content creation.
                </p>
                <div className="mt-6 py-3">
                    <a href="#" className="lg:border-2 border-black rounded-lg text-white bg-black px-6 py-3 hover:bg-lime-400 hover:text-black hover:shadow-lg hover:shadow-lime-400">Book a consultation</a>
                </div>
            </div>
            <div className="w-1/2 hidden md:flex">
                <img className="my-auto" src="./Image1.webp" width={"100%"} />
            </div>
        </div>
    )
}