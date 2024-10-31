import { useState } from "react";
import PropTypes from "prop-types";
import SignupModal from "./SignupModal"; // Import the SignupModal

const LoginModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSignup, setShowSignup] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Please enter a valid email address";

    const mobileRegex = /^[0-9]+$/;
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    else if (!mobileRegex.test(formData.mobile)) newErrors.mobile = "Only numbers are allowed";
    else if (formData.mobile.length < 7 || formData.mobile.length > 15)
      newErrors.mobile = "Mobile number should be between 7 to 15 digits";

    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city) newErrors.city = "City is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  return (
    <>
      {showSignup ? (
        <SignupModal onClose={() => setShowSignup(false)} />
      ) : (
        <dialog
          className="modal fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-0 backdrop-blur-sm"
          open
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="modal-box p-8 bg-gradient-to-br from-green-400 to-white bg-opacity-40 backdrop-blur-lg text-black">
            <h3 className="font-bold text-3xl text-green-600 text-center mb-2">Sign in</h3>
            <p className="text-center text-sm font-medium leading-tight text-neutral-950 sm:text-lg mb-4">
              Not registered yet?{" "}
              <span
                className="bg-gradient-to-br from-green-400 to-green-800 bg-clip-text text-transparent cursor-pointer"
                onClick={() => setShowSignup(true)}
              >
                Register
              </span>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="py-4">
                  <label className="block text-lg mb-2 text-orange-700">Name:</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered w-full text-lg p-2 bg-white bg-opacity-60 border-orange-400 text-black"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className="py-4">
                  <label className="block text-lg mb-2 text-orange-700">Email:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered w-full text-lg p-2 bg-white bg-opacity-60 border-orange-400 text-black"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="py-4">
                  <label className="block text-lg mb-2 text-orange-700">Mobile Number:</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="input input-bordered w-full text-lg p-2 bg-white bg-opacity-60 border-orange-400"
                    placeholder="Enter mobile"
                  />
                  {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                </div>
              </div>
              <div className="modal-action mt-4">
                {loading ? (
                  <span className="text-orange-500 text-xl font-normal flex justify-center items-center">
                    Saving
                    <span className="ml-2 animate-bounce">.</span>
                    <span className="animate-bounce delay-100">.</span>
                    <span className="animate-bounce delay-200">.</span>
                  </span>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="btn bg-orange-500 text-xl font-normal text-white hover:bg-orange-600 p-2"
                    >
                      Sign me in
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="btn bg-red-500 text-xl font-normal text-white hover:bg-red-600 p-2"
                    >
                      Close
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
};

LoginModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LoginModal;
