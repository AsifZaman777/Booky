import { useState } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";

const SignupModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]+$/;

    if (!formData.name) newErrors.name = "Please enter your name";
    if (!formData.email) newErrors.email = "Please enter your email";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email address";

    if (!formData.mobile) newErrors.mobile = "Please enter your mobile number";
    else if (!mobileRegex.test(formData.mobile)) newErrors.mobile = "Only numbers are allowed";
    else if (formData.mobile.length < 7 || formData.mobile.length > 15)
      newErrors.mobile = "Mobile number must be 7-15 digits";

    if (!formData.country) newErrors.country = "Please select your country";
    if (!formData.city) newErrors.city = "Please enter your city";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendMail = async (event) => {
    event.preventDefault();

    const templateParams = {
      to_email: formData.email,
      to_name: formData.name,
      to_mobile: formData.mobile,
      to_country: formData.country,
    };

    try {
      const response = await emailjs.send(
        'service_mmzklcm', // Replace with your EmailJS service ID
        'lbookyuserverify', // Replace with your EmailJS template ID
        templateParams, {
          publicKey: 'j0DqWBxLed5fA-64F', // Replace with your EmailJS public ID
        }
      );

      console.log('Email successfully sent!', response.status, response.text);
      // Optionally clear form data
      setFormData({
        name: "",
        email: "",
        mobile: "",
        country: "",
        city: "",
      });
      onClose(); // Close modal after successful email send
    } catch (err) {
      console.error('Failed to send email. Error:', err);
      // Optionally display error feedback to the user
    } finally {
      setLoading(false);
    }
  };

  const handleSave = (event) => {
    if (validate()) {
      setLoading(true);
      sendMail(event); 
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(e); 
  };
  

  return (
    <dialog
      className="modal fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-0 backdrop-blur-sm"
      open
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="modal-box p-8 bg-gradient-to-br from-green-400 to-white bg-opacity-40 backdrop-blur-lg text-black">
        <h3 className="font-bold text-3xl text-green-600 text-center mb-2">Register yourself</h3>
        <p className="text-center text-sm font-medium leading-tight text-neutral-950 sm:text-lg mb-4">
          Not registered yet?{" "}
          <span className="bg-gradient-to-br from-green-400 to-green-800 bg-clip-text text-transparent cursor-pointer">
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
                autoFocus
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
            <div className="py-4">
              <label className="block text-lg mb-2 text-orange-700">Country:</label>
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="input input-bordered w-full text-lg p-2 bg-white bg-opacity-60 border-orange-400 text-black"
              />
              {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
            </div>
            <div className="py-4">
              <label className="block text-lg mb-2 text-orange-700">City:</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="input input-bordered w-full text-lg p-2 bg-white bg-opacity-60 border-orange-400 text-black"
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
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
                  className={`btn bg-orange-500 text-xl font-normal text-white hover:bg-orange-600 p-2 ${loading ? "cursor-not-allowed" : ""}`}
                  disabled={loading} // Disable button while loading
                >
                  Register
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
  );
};

SignupModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SignupModal;
