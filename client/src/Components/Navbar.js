import React from "react";

function Navbar() {
    return(
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full flex h-16 xl:px-28 lg:px-20 md:px-12 sm:px-12 phone:px-8">
            <h1 className={"text-white text-3xl font-bold tracking-wider py-3 "}>Stimulus</h1>
            <div>
                <button>Home</button>
                <button>s</button>
                <button>Home</button>
                <button>Home</button>
            </div>
        </div>
    )
}




export default Navbar