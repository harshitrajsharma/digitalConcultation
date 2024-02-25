import React from "react";

export default function For(){
    return(
        <div className="container mx-auto px-5 py-8 xl:max-w-8xl lg:mx-auto lg:px-10 xl:px-16 lg:py-6">
            <div className="flex flex-col lg:flex-row border-2 border-neutral-900 bg-neutral-900 rounded-3xl text-white text-left px-8 py-12 lg:justify-between gap-6">
                <div className="">
                    <p className="pb-6">
                    For a local restrurant, we implemented a targeted PPO campaign that resulted in a 80% increase in website traffic and a 25% increase in sales.
                    </p>
                    <div>
                        <a href="#" className="text-lime-400 hover:bg-white hover:text-black rounded p-3">
                            Learn more 
                            <img className="-rotate-45 w-6 inline-block pl-2" src="./LimeArrow.svg"/>
                        </a>
                    </div>
                </div>
                <div className="lg:h-100 border-2 border-white"></div>
                <div className="">
                <p className="pb-6">
                    For a local restrurant, we implemented a targeted PPO campaign that resulted in a 80% increase in website traffic and a 25% increase in sales.
                    </p>
                    <div>
                        <a href="#" className="text-lime-400 hover:bg-white hover:text-black rounded p-3">
                            Learn more 
                            <img className="-rotate-45 w-6 inline-block pl-2" src="./LimeArrow.svg"/>
                        </a>
                    </div>
                </div>
                <div className="lg:h-100 border-2 border-white"></div>
                <div className="">
                <p className="pb-6">
                    For a local restrurant, we implemented a targeted PPO campaign that resulted in a 80% increase in website traffic and a 25% increase in sales.
                    </p>
                    <div>
                        <a href="#" className="text-lime-400 hover:bg-white hover:text-black rounded p-3">
                            Learn more 
                            <img className="-rotate-45 w-6 inline-block pl-2" src="./LimeArrow.svg"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}