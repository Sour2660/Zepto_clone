import React, { useState } from 'react';
import axios from 'axios';
 // Reuse the same popup styling
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';





const ForgotPassword = ({ onClose }) => {
  const [form, setForm] = useState({ phone: '', newPassword: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForgotPassword = () => {
    const { phone, newPassword } = form;

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      toast.error('Enter a valid phone number starting with 6-9 (10 digits)');
      return false;
    }

    const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (!passwordRegex.test(newPassword)) {
      toast.error('Password must be at least 6 characters and contain a special character.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForgotPassword()) return;

    try {
      const res = await axios.post('/api/auth/forgot-password', form);
      toast.success(res.data.message || 'Password reset successful!');
      navigate('/'); // After successful reset, go to home/login page
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">

        {/* 🔥 Close Button */}
        <button className="popup-close" onClick={() => navigate('/')}>✖</button>

        {/* Left Form Section */}
        <div className="popup-left">
          <img src="/logo/zepto-logo.png" className="popup-logo" alt="Zepto" />
          <h2>Reset Password</h2>

          <form onSubmit={handleSubmit} className="popup-form">
            <input
              type="text"
              name="phone"
              placeholder="Enter your registered Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="newPassword"
              placeholder="Enter your new Password"
              value={form.newPassword}
              onChange={handleChange}
              required
            />
            <button className="submit-btn">Reset Password</button>
          </form>

          <p className="terms">
            After resetting, you can login with your new password.
          </p>
        </div>

        {/* Right Promo Section */}
        <div className="popup-right">
          <img
            src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.70.0/images/app-stores/download-play-store.svg"
            alt="Play Store"
            width={140}
          />
          <h3>Fast, Fresh & Easy shopping!</h3>
          <img
            src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.70.0/images/get-the-app/get-the-app-phone.png"
            alt="Zepto App"
          />
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;
