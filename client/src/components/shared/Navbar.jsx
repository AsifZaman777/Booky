import { useState } from "react";
import { Link } from "react-scroll";
import SignUpModal from "../Modals/LoginModal"; // Adjust path as necessary

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <>
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg bg-white bg-opacity-10 backdrop-blur-lg px-10 py-4 rounded-lg shadow-lg flex items-center justify-between border border-green-500 z-50 mt-4 hover:cursor-pointer transition-all">
        {/* Logo */}
        <div className="text-xl font-bold text-green-400">🏨 Booky</div>

        {/* Navbar Links */}
        <div className="flex space-x-8">
          {["Home", "About", "Contact", "Login"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()} // Match section IDs for scroll target
              smooth={true} // Smooth scroll animation
              duration={500} // Animation duration in ms
              offset={-70} // Offset to adjust for navbar height
              onClick={() => {
                setActiveLink(item);
                if (item === "Login") handleModalOpen(); // Open modal on "Login" click
              }}
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

      {/* Render the SignUpModal only if showModal is true */}
      {showModal && <SignUpModal onClose={handleModalClose} />}
    </>
  );
};

export default Navbar;
