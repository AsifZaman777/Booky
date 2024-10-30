import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg bg-white bg-opacity-10 backdrop-blur-lg px-10 py-4 rounded-lg shadow-lg flex items-center justify-between border border-green-500 z-50 mt-4 hover:cursor-pointer transition-all">
      {/* Logo */}
      <div className="text-xl font-bold text-green-400">🏨 Booky</div>

      {/* Navbar Links */}
      <div className="flex space-x-8">
        {["Home", "About", "Contact", "Hotel"].map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()} // Match section IDs for scroll target
            smooth={true} // Smooth scroll animation
            duration={500} // Animation duration in ms
            offset={-70} // Offset to adjust for navbar height
            onClick={() => setActiveLink(item)}
            className={`text-lg font-medium transform transition-transform ${
              activeLink === item
                ? "text-green-300 -translate-y-1"
                : "text-green-400 hover:text-green-300 hover:-translate-y-1"
            }`}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
