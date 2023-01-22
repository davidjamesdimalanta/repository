import React from "react";

function Footer() {
    return (
        <div className="bg-blue-800 shadow-lg flex justify-center items-center p-4">
            <div className="flex flex-col justify-center items-center">
            <a 
            href="https://www.utoronto.ca/"
            className="hover-text-white hover:underline">
            <h1 className="px-6 pt-2 text-white text-base font-bold">
                University of Toronto
            </h1>
            </a>
            <ul className="list-none text-gray-300">
                <a 
                    href="https://kpe.utoronto.ca/welcome-sport-rec-u-t"
                    className="hover-text-white hover:underline">
                    <li>Sport & Rec</li>
                </a>
                <a 
                    href="https://kpe.utoronto.ca/staff-directory"
                    className="hover-text-white hover:underline">
                    <li>Contact Us</li>
                </a>
            </ul>
            <div className="flex flex-col justify-center items-center">
            <a href="https://www.utsc.utoronto.ca/home/"
            className="hover-text-white hover:underline">
            <h1 className="px-6 pt-2 text-white text-base font-bold">
                University of Toronto Scarborough
            </h1>
            </a>
            <ul className="list-none text-gray-50">
                <a 
                    href="https://www.utsc.utoronto.ca/athletics/"
                    className="hover-text-white hover:underline">
                    <li>Sport & Rec</li>
                </a>
                <a 
                    href="https://www.utsc.utoronto.ca/athletics/contact"
                    className="hover-text-white hover:underline">
                    <li>Contact Us</li>
                </a>
            </ul>
            </div>
            <div className="flex flex-col justify-center items-center">
            <a href="https://www.utm.utoronto.ca/"
            className="hover-text-white hover:underline">
            <h1 className="px-6 pt-2 text-white text-base font-bold">
                University of Toronto Missisauga
            </h1>
            </a>
            <ul className="list-none text-gray-300">
                <a 
                    href="https://www.utm.utoronto.ca/athletics/"
                    className="hover-text-white hover:underline">
                    <li>Sport & Rec</li>
                </a>
                <a 
                    href="https://www.utm.utoronto.ca/athletics/about-us/contact-us-maps-directions"
                    className="hover-text-white hover:underline">
                    <li>Contact Us</li>
                </a>
            </ul>
            </div>
            </div>
        </div>
    )
}

export default Footer;