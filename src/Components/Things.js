import React from "react";

export default function Things() {
    return (
        <div className="container mx-auto px-5 py-8 xl:max-w-8xl lg:mx-auto lg:px-10 xl:px-16 lg:py-6">
            <div className="flex flex-col md:flex-row border-2 border-gray-200 bg-gray-200 rounded-3xl">
                <div className=" md:w-1/2 px-3 md:pr-16 md:px-6 py-12 md:text-left lg:gap-6 flex flex-col justify-center">
                    <h3 className="text-xl pb-6 sm:text-2xl xl:text-2xl font-bold">Let's make things happen</h3>
                    <p className="text-base sm:text-xl">
                        Contact us today to learn more about how our digital marketing services can help you r business grow and succeed online.
                    </p>

                    <div className=" w-2/5 md:w-1/2 flex md:hidden justify-center mx-auto">
                    <img className="my-auto lg:w-4/5 xl:w-80" src="./Image2.webp" />
                </div>

                    <div className="mt-6 py-3">
                        <a href="" className="lg:border-2 border-black rounded-lg text-white bg-black px-6 py-3 hover:bg-lime-400 hover:text-black hover:shadow-lg hover:shadow-lime-400">Get your free proposal</a>
                    </div>
                </div>

                <div className="hidden md:w-1/2 md:flex justify-center">
                    <img className="my-auto lg:w-4/5 xl:w-80" src="./Image2.webp" />
                </div>
            </div>
        </div>
    )
}