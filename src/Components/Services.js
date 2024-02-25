import React from "react";

export default function Services(){
    return(
        <div className="container mx-auto px-5 py-8 flex-col md:flex-row max-w-8xl lg:px-10 xl:px-16 lg:py-4 xl:py-4 lg:mx-auto lg:h-auto flex gap-8">
            <div className="ml-4 text-4xl font-semibold bg-lime-400 rounded-md pb-1 px-1">
                Services
            </div>
            <div className="text-base">
                <p className="text-center md:text-left md:w-100 xl:w-4/5">
                    At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services includes:
                </p>
            </div>
        </div>
    )
}