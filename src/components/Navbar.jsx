import React from "react";

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-3xl font-extrabold text-white">BuyME</div>
                <div className="hidden md:flex space-x-8">
                    <a href="/" className="texthi hover:text-gray-200 transition duration-300">
                        Login
                    </a>
                    <a href="home" className="texthi  hover:text-gray-200 transition duration-300">
                        Home
                    </a>
                    <a href="Orders" className="texthi  hover:text-gray-200 transition duration-300">
                        Orders
                    </a>
                    <a href="Cart" className="texthi  hover:text-gray-200 transition duration-300">
                        Cart
                    </a>
                </div>
                <div className="flex items-center space-x-6">
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;