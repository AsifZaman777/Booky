import contact from '../../assets/videos/contact.mp4';

const Contact = () => {
    return (
        <div id='contact' className="flex flex-col items-center justify-center h-screen bg-black">
            {/* Title */}
            <h1 className="bg-gradient-to-br from-green-400 to-white bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight mb-8">
                Contact
            </h1>

            {/* Contact Form Container */}
            <div className="flex flex-col md:flex-row max-w-4xl w-full rounded-xl overflow-hidden shadow-lg">
                {/* Left side: Form with glassy effect and gradient background */}
                <div className="flex-1 p-8 bg-gradient-to-br from-green-400 to-white bg-opacity-40 backdrop-blur-lg text-black">
                    <h2 className="text-3xl font-bold mb-6">Contact us</h2>
                    <p className="mb-4 text-lg font-mono">Hi 👋! My name is...</p>
                    <input
                        type="text"
                        placeholder="Your name..."
                        className="w-full mb-4 p-3 rounded-md bg-white bg-opacity-20 text-black font-thin placeholder-gray-700 focus:outline-none"
                    />
                    <p className="mb-4 text-lg font-mono">Email address</p>
                    <input
                        type="text"
                        placeholder="Your email..."
                        className="w-full mb-4 p-3 rounded-md bg-white bg-opacity-20 text-black font-thin placeholder-gray-700 focus:outline-none"
                    />

                    <p className="mb-4 text-lg font-mono">I would love to ask about...</p>
                    <textarea
                        placeholder="Whatever your heart desires :)"
                        className="w-full p-3 h-24 rounded-md bg-white bg-opacity-20 text-black font-thin placeholder-gray-700 focus:outline-none resize-none"
                    ></textarea>
                    <button className="w-full mt-6 py-2 bg-green-500 bg-opacity-20 hover:bg-opacity-50 hover:bg-green-600 transition-all rounded-md text-black">
                        Submit
                    </button>
                </div>

                {/* Right side: Background video */}
                <div className="flex-1 hidden md:block">
                    <video
                        className="w-full h-full object-cover"
                        src={contact}
                        autoPlay
                        loop
                        muted
                    ></video>
                </div>
            </div>
        </div>
    );
};

export default Contact;
