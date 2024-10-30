import React from 'react';

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full bg-white bg-opacity-10 backdrop-blur-lg px-8 py-3 rounded-lg shadow-md flex items-center justify-between max-w-md mx-auto mt-4 border border-green-500 z-50">
            {/* Logo */}
            <div className="text-lg font-bold text-green-400">
                🏨 Booky
            </div>
            
            {/* Navbar Links */}
            <div className="flex space-x-6">
                <a href="#" className="text-sm font-medium text-green-400 hover:text-green-300">Home</a>
                <a href="#" className="text-sm font-medium text-green-400 hover:text-green-300">Hotels</a>
                <a href="#" className="text-sm font-medium text-green-400 hover:text-green-300">About</a>
                <a href="#" className="text-sm font-medium text-green-400 hover:text-green-300">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;
