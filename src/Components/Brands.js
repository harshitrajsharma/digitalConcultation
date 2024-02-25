import React from "react";

export default function Brands(){
    return(
        <div className="container mx-auto px-5 py-8 grid grid-cols-2 sm:grid-cols-3 max-w-8xl lg:px-10 xl:px-16 lg:py-4 xl:py-4 lg:mx-auto lg:h-auto lg:grid lg:grid-cols-6 lg:gap-6 lg:items-center">
            <div className="p-3 flex justify-center items-center">
                <img className="object-cover" src="./amazon.webp" width={"80%"}/>
            </div>
            <div className="p-3 flex justify-center items-center">
                <img className="object-cover" src="./dribbble.svg" width={"80%"}/>
            </div>
            <div className="p-3 flex justify-center items-center">
                <img className="object-cover" src="./HubSpot.webp" width={"80%"}/>
            </div>
            <div className="p-3 flex justify-center items-center">
                <img className="object-cover" src="./Notion.svg" width={"80%"}/>
            </div>
            <div className="p-3 flex justify-center items-center">
                <img className="object-cover" src="./Netflix.svg" width={"80%"}/>
            </div>
            <div className="p-3 flex justify-center items-center">
                <img className="object-cover" src="./Zoom.webp" width={"100%"}/>
            </div>
        </div>
    )
}