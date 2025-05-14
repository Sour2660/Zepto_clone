// // src/components/LoginPopup.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './LoginPopup.css';
// import { toast } from 'react-toastify';

// const LoginPopup = ({ onClose, onLoginSuccess, onLoginStart }) => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [step, setStep] = useState('phone');
//   const [otp, setOtp] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSendOtp = async () => {
//     const fullPhone = '+91' + phoneNumber;
//     try {
//       await axios.post('/api/send-otp', { phone: fullPhone });
//       toast.success('OTP sent successfully!', { position: 'top-center' });
//       setStep('otp');
//     } catch (error) {
//       console.error('Failed to send OTP:', error);
//       toast.error('Failed to send OTP. Please try again.', { position: 'top-center' });
//     }
//   };

//   const handleVerifyOtp = async () => {
//     const fullPhone = '+91' + phoneNumber;
//     try {
//       setLoading(true);
//       if (onLoginStart) onLoginStart();
//       const response = await axios.post('/api/verify-otp', { phone: fullPhone, otp });
//       setLoading(false);

//       if (response.data.success) {
//         localStorage.setItem('token', response.data.token);
//         localStorage.setItem('user', JSON.stringify(response.data.user));

//         if (onLoginSuccess) onLoginSuccess(response.data.user);

//         toast.success(`Welcome, ${response.data.user.name || "User"}! 🎉`, { position: 'top-center' });

//         setTimeout(() => {
//           navigate('/account');
//         }, 300);

//         onClose();
//       } else {
//         toast.error('Invalid OTP. Please try again.', { position: 'top-center' });
//       }
//     } catch (error) {
//       setLoading(false);
//       console.error('OTP Verification Failed:', error);
//       toast.error('Failed to verify OTP. Please try again.', { position: 'top-center' });
//     }
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-content">
//         <div className="left-panel">
//           <img src="/logo/zepto-logo.png.svg" alt="Zepto" className="logo" />
//           <h2>Groceries delivered in 10 minutes</h2>

//           {step === 'phone' ? (
//             <>
//               <div className="single-phone-input">
//                 <span className="country-code">+91</span>
//                 <input
//                   type="tel"
//                   placeholder="Enter Mobile Number"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   maxLength={10}
//                 />
//               </div>
//               <button className="continue-btn" onClick={handleSendOtp}>Continue</button>
//             </>
//           ) : (
//             <>
//               <input
//                 type="text"
//                 placeholder="Enter OTP"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 className="phone-input"
//               />
//               <button className="continue-btn" onClick={handleVerifyOtp} disabled={loading}>
//                 {loading ? 'Verifying...' : 'Verify OTP'}
//               </button>
//               <button className="resend-btn" onClick={handleSendOtp}>Resend OTP</button>
//             </>
//           )}

//           <p className="terms">By continuing, you agree to our <span>Terms</span> & <span>Privacy Policy</span></p>
//         </div>

//         <div className="right-panel">
//           <img src="https://cdn.pixabay.com/photo/2021/09/22/16/07/google-play-6647242_1280.png" alt="App Download" width="160" />
//           <h3 style={{ color: 'purple' }}>Order faster every time!</h3>
//           <img src="/logo/zepto-logo1.png.png" alt="Get App" width="100" />
//         </div>

//         <button className="close-btn" onClick={onClose}>X</button>
//       </div>
//     </div>
//   );
// };

// export default LoginPopup;

//multi login added 


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPopup.css';
import { toast } from 'react-toastify';

const LoginPopup = ({ onClose, onLoginSuccess, onLoginStart }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('user'); // 👈 Role selector
  const [step, setStep] = useState('phone');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    const fullPhone = '+91' + phoneNumber;
    try {
      await axios.post('/api/send-otp', { phone: fullPhone, role }); // 👈 Send role
      toast.success('OTP sent successfully!', { position: 'top-center' });
      setStep('otp');
    } catch (error) {
      console.error('Failed to send OTP:', error);
      toast.error('Failed to send OTP. Please try again.', { position: 'top-center' });
    }
  };

  const handleVerifyOtp = async () => {
    const fullPhone = '+91' + phoneNumber;
    try {
      setLoading(true);
      if (onLoginStart) onLoginStart();
      const response = await axios.post('/api/verify-otp', { phone: fullPhone, otp, role }); // 👈 Include role

      setLoading(false);
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        if (onLoginSuccess) onLoginSuccess(response.data.user);

        toast.success(`Welcome, ${response.data.user.name || "User"}! 🎉`, { position: 'top-center' });

        // 👇 Redirect to correct page
        if (role === 'admin') navigate('/admin/dashboard');
        else if (role === 'vendor') navigate('/vendor/dashboard');
        else navigate('/account');

        onClose();
      } else {
        toast.error('Invalid OTP. Please try again.', { position: 'top-center' });
      }
    } catch (error) {
      setLoading(false);
      console.error('OTP Verification Failed:', error);
      toast.error('Failed to verify OTP. Please try again.', { position: 'top-center' });
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="left-panel">
          <img src="/logo/zepto-logo.png.svg" alt="Zepto" className="logo" />
          <h2>Groceries delivered in 10 minutes</h2>

          {step === 'phone' ? (
            <>
              <div className="single-phone-input">
                <span className="country-code">+91</span>
                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  maxLength={10}
                />
              </div>

              {/* 👇 Role Selection */}
              <select
                className="role-dropdown"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="vendor">Vendor</option>
                <option value="admin">Admin</option>
              </select>

              <button className="continue-btn" onClick={handleSendOtp}>Continue</button>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="phone-input"
              />
              <button className="continue-btn" onClick={handleVerifyOtp} disabled={loading}>
                {loading ? 'Verifying...' : 'Verify OTP'}
              </button>
              <button className="resend-btn" onClick={handleSendOtp}>Resend OTP</button>
            </>
          )}

          <p className="terms">By continuing, you agree to our <span>Terms</span> & <span>Privacy Policy</span></p>
        </div>

        <div className="right-panel">
          <img src="https://cdn.pixabay.com/photo/2021/09/22/16/07/google-play-6647242_1280.png" alt="App Download" width="160" />
          <h3 style={{ color: 'purple' }}>Order faster every time!</h3>
          <img src="/logo/zepto-logo1.png.png" alt="Get App" width="100" />
        </div>

        <button className="close-btn" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default LoginPopup;

