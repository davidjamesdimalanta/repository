import React from "react";
import Logo from "/assets/utoronto-logo.svg"
import { useState } from 'react';

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);
    

    return(
        <div className="bg-blue-800 text-white py-1 px-6 min-w-min max-h-40 w-full shadow-xl fixed">
            <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center justify-start w-16">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6"
                onClick={() => setShowMenu(!showMenu)}
            >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </div>
            <div className="pl-6">
                <img 
                    src={Logo} 
                    alt="UofT Logo"
                    className="max-h-16 pb-2 " 
                />
            </div>
            <div className="pl-1 flex items-center justify-between w-24">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6">
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <p className="text-sm text-white">Sign In</p>
            </div>
            {showMenu && (
                <div className="absolute top-0 right-0 w-full y-full pt-5 animate-slideDown">
                    <div className="bg-stone-800 shadow-xl pt-6 pb-3 flex flex-col justify-center items-center">
                        <div className="w-full h-auto px-6 py-2 top-0 bg-blue-800 fixed shadow-xl">
                            <div className="container mx-auto flex items-center justify-end">
                            <div className="flex items-center justify-start w-16">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="w-6 h-6"
                                onClick={() => setShowMenu(false)}
                            > 
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </div>
                            <div className="pl-20 md:pl-28">
                            <img 
                                src={Logo} 
                                alt="UofT Logo"
                                className="h-16 pb-1" 
                            />
                            </div>
                            <div className="pl-10 md:pl-10 flex items-center justify-between w-48">
                            <img 
                                src="./assets/Fusion-Icon-Light.png" 
                                alt="Fusion Family Logo"
                                className="h-8 md:h-10 pb-2" /> 
                            </div>
                            </div> 
                        </div>
                        <div className="w-full pt-10 pb-1 flex justify-center hover:bg-stone-900">
                        <a href="https://recreation.utoronto.ca/Program/GetProducts?productTypeCV=00000000-0000-0000-0000-000000003502" className="block px-4 py-2 text-white ">All Registered Programs</a>
                        </div>
                        <div className="w-full pb-1 flex justify-center hover:bg-stone-900">
                        <a href="https://recreation.utoronto.ca/Program/GetProducts?productTypeCV=00000000-0000-0000-0000-000000003502&classification=d3393ff3-9858-4cec-824e-58f786f160d0" className="block px-4 py-2 text-white ">Sports</a>
                        </div>
                        <div className="w-full pb-1 flex justify-center hover:bg-stone-900">
                        <a href="#" className="block px-4 py-2 text-white ">Court Bookings</a>
                        </div>
                        <div className="w-full pb-1 flex justify-center hover:bg-stone-900">
                        <a href="https://recreation.utoronto.ca/Membership/Index" className="block px-4 py-2 text-white ">Memberships</a>
                        </div>
                        <div className="w-full pb-1 flex justify-center hover:bg-stone-900">
                        <a href="https://recreation.utoronto.ca/home/signin?redirect=%252Fmultivisitpass%252Fgetproducts" className="block px-4 py-2 text-white ">Multi-Visit Passes</a>
                        </div>
                        <div className="w-full pb-1 flex justify-center hover:bg-stone-900">
                        <a href="https://kpe.utoronto.ca/facility/athletic-centre" className="block px-4 py-2 text-white ">Facilities & Hours</a>
                        </div>
                        <div className="w-full pb-1 flex justify-center hover:bg-stone-900">
                        <a href="https://recreation.utoronto.ca/home/signin?redirect=%252Fmemberdetails#Lockers" className="block px-4 py-2 text-white ">Lockers and Towels</a>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}

export default Navigation