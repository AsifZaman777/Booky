import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className="flex flex-col items-center justify-center h-screen bg-black">
            {/* Title */}
            <h1 className="bg-gradient-to-br from-white to-green-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight mb-8">
                Contact
            </h1>

            {/* Contact Form Container */}
            <div className="flex flex-col md:flex-row max-w-4xl w-full rounded-xl overflow-hidden shadow-lg">
                {/* Left side: Form with glassy effect */}
                <div className="flex-1 p-8 bg-purple-800 bg-opacity-40 backdrop-blur-lg text-white">
                    <h2 className="text-3xl font-bold mb-6">Contact us</h2>
                    <p className="mb-4">Hi 👋! My name is...</p>
                    <input
                        type="text"
                        placeholder="Your name..."
                        className="w-full mb-4 p-3 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-200 focus:outline-none"
                    />
                    <p className="mb-4">and I represent...</p>
                    <div className="flex space-x-4 mb-4">
                        <button className="flex-1 py-2 rounded-md bg-white bg-opacity-20 hover:bg-opacity-30">
                            An individual
                        </button>
                        <button className="flex-1 py-2 rounded-md bg-white bg-opacity-20 hover:bg-opacity-30">
                            A company
                        </button>
                    </div>
                    <p className="mb-4">I'd love to ask about...</p>
                    <textarea
                        placeholder="Whatever your heart desires :)"
                        className="w-full p-3 h-24 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-200 focus:outline-none resize-none"
                    ></textarea>
                    <button className="w-full mt-6 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-md text-white">
                        Submit
                    </button>
                </div>

                {/* Right side: Background image */}
                <div className="flex-1 bg-cover bg-center hidden md:block" style={{ backgroundImage: "url('path-to-image.jpg')" }}>
                    {/* Optional overlay if needed */}
                </div>
            </div>
        </div>
    );
};

export default Contact;
