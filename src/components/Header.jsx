import React from "react";

function Header() {
    return (
        <div className="bg-blue-900 shadow-lg flex justify-center items-center pt-16">
            <p className="px-6 py-4 text-white text-xs md:text-sm sm:text-xs lg:text-base font-OpenSans font-extrabold">
                University of Toronto’s indoor and outdoor facilities are open for 
                in-person sports and physical activity programming. Please refer to 
                <a 
                className="hover:text-blue-800 hover:underline text-blue-600 ml-1"
                href="https://harthouse.ca/fitness/offerings">
                    Hart House</a>, 
                <a
                href="https://kpe.utoronto.ca/welcome-sport-rec-u-t"
                className="hover:text-blue-800 hover:underline text-blue-600 ml-1">
                    U of T Sport & Rec</a>, 
                <a 
                href="https://www.utm.utoronto.ca/athletics/"
                className="hover:text-blue-800 hover:underline text-blue-600 ml-1">
                    UTM</a> and 
                <a 
                href="https://www.utsc.utoronto.ca/athletics/"
                className=" hover:text-blue-800 hover:underline text-blue-600 m-1">
                    UTSC Athletics & Recreation</a> 
                websites for more information.
            </p>
        </div>
    )
}

export default Header;