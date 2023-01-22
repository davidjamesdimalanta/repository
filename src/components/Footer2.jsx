import React from "react";

function Footer2() {
    return (
        <div className="text-center bg-blue-900 py-5">
            <p className="text-white text-sm mt-2 opacity-50">
               &copy; {new Date().getFullYear()} David James Dimalanta. 
               All rights reserved. 
            </p>
        </div>
    )
}

export default Footer2;