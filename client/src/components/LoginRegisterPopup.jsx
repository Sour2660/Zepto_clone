// import React, { useState } from 'react';
// import axios from 'axios';
// import './LoginRegisterPopup.css';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Import eye icons from react-icons

// const LoginRegisterPopup = ({ onClose }) => {
//   const [tab, setTab] = useState('login');
//   const [form, setForm] = useState({ name: '', phone: '', password: '' });
//   const [showPassword, setShowPassword] = useState(false); // State for showing password
//   const navigate = useNavigate();

//   // Input Change Handler
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Validation Function
//   const validateForm = () => {
//     const { name, phone, password } = form;

//     if (tab === 'register') {
//       // Name Validation
//       const nameRegex = /^[A-Za-z\s]+$/;
//       if (!nameRegex.test(name)) {
//         toast.error('Name should only contain alphabets and spaces.');
//         return false;
//       }
//     }

//     // Phone Validation
//     const phoneRegex = /^[6-9]\d{9}$/;
//     if (!phoneRegex.test(phone)) {
//       toast.error('Please enter a valid 10-digit mobile number');
//       return false;
//     }

//     // Password Validation
//     const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
//     if (!passwordRegex.test(password)) {
//       toast.error('Password must be at least 6 characters and contain a special character.');
//       return false;
//     }

//     return true;
//   };

//   // Submit Handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     const endpoint = tab === 'login' ? '/api/auth/login' : '/api/auth/register';

//     try {
//       const res = await axios.post(endpoint, form);

//       if (tab === 'login') {
//         localStorage.setItem('token', res.data.token);
//         localStorage.setItem('user', JSON.stringify(res.data.user));
//         toast.success(`Welcome back, ${res.data.user.name}!`);
//         onClose();
//         navigate('/account');
//       } else {
//         toast.success('Registration successful. Please login.');
//         setTab('login');
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Something went wrong');
//     }
//   };

//   // Navigate to Forgot Password
//   const handleForgotPassword = () => {
//     onClose(); // Close the popup
//     navigate('/forgot-password'); // Redirect to forgot password page
//   };

//   // Toggle password visibility
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-container">
        
//         {/* Left Form Side */}
//         <div className="popup-left">
//           <img src="/logo/zepto-logo1.png.png" className="popup-logo" alt="Zepto" />
//           <h2>Welcome Back</h2>

//           {/* Tabs */}
//           <div className="tab-buttons">
//             <button className={tab === 'login' ? 'active' : ''} onClick={() => setTab('login')}>Sign In</button>
//             <button className={tab === 'register' ? 'active' : ''} onClick={() => setTab('register')}>Sign Up</button>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="popup-form">
//             {tab === 'register' && (
//               <input
//                 name="name"
//                 placeholder="Full Name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//               />
//             )}
//             <input
//               name="phone"
//               placeholder="Phone Number"
//               value={form.phone}
//               onChange={handleChange}
//               required
//             />

//             {/* Password Input */}
//             <div className="password-field">
//               <input
//                 name="password"
//                 type={showPassword ? 'text' : 'password'} // Toggle between text and password based on showPassword state
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//               />
//               <span className="password-toggle" onClick={togglePasswordVisibility}>
//                 {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />} {/* Eye icon for toggle */}
//               </span>
//             </div>

//             <button className="submit-btn">
//               {tab === 'login' ? 'Sign In' : 'Sign Up'}
//             </button>
//           </form>

//           {/* Forgot Password Link */}
//           {tab === 'login' && (
//             <p className="forgot-link" onClick={handleForgotPassword}>
//               Forgot Password?
//             </p>
//           )}

//           <p className="terms">
//             By continuing, you agree to our <span>Terms of Service</span> & <span>Privacy Policy</span>
//           </p>
//         </div>

//         {/* Right Image Side */}
//         <div className="popup-right">
//           <img
//             src="/icons/download.png"
//             alt="Play Store"
//             width={140}
//           />
//           <h3>Order faster & easier every time!</h3>
//           <img
//             src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.70.0/images/get-the-app/get-the-app-phone.png"
//             alt="Zepto app"
//           />
//         </div>

//         {/* Close Button */}
//         <button className="popup-close" onClick={onClose}>✖</button>
//       </div>
//     </div>
//   );
// };

// export default LoginRegisterPopup;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './LoginRegisterPopup.css';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Import eye icons from react-icons

// const LoginRegisterPopup = ({ onClose }) => {
//   const [tab, setTab] = useState('login');
//   const [form, setForm] = useState({ name: '', phone: '', password: '', role: 'user' }); // Add role to form
//   const [showPassword, setShowPassword] = useState(false); // State for showing/hiding password
//   const navigate = useNavigate();

//   // Input Change Handler
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Toggle password visibility
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   // Validation Function
//   const validateForm = () => {
//     const { name, phone, password } = form;

//     if (tab === 'register') {
//       // Name Validation
//       const nameRegex = /^[A-Za-z\s]+$/;
//       if (!nameRegex.test(name)) {
//         toast.error('Name should only contain alphabets and spaces.');
//         return false;
//       }
//     }

//     // Phone Validation
//     const phoneRegex = /^[6-9]\d{9}$/;
//     if (!phoneRegex.test(phone)) {
//       toast.error('Please enter a valid 10-digit mobile number');
//       return false;
//     }

//     // Password Validation
//     const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
//     if (!passwordRegex.test(password)) {
//       toast.error('Password must be at least 6 characters and contain a special character.');
//       return false;
//     }

//     return true;
//   };

//   // Submit Handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     const endpoint = tab === 'login' ? '/api/auth/login' : '/api/auth/register';

//     try {
//       const res = await axios.post(endpoint, form);

//       if (tab === 'login') {
//         // Store user info in localStorage after successful login
//         localStorage.setItem('token', res.data.token);
//         localStorage.setItem('user', JSON.stringify(res.data.user));
//         toast.success(`Welcome back, ${res.data.user.name}!`);
//         onClose();

//         // Check role after login and redirect accordingly
//         const userRole = res.data.user.role;
//         if (userRole === 'admin') {
//           navigate('/admin/dashboard'); // Redirect to Admin Dashboard
//         } else if (userRole === 'vendor') {
//           navigate('/vendor/dashboard'); // Redirect to Vendor Dashboard
//         } else {
//           navigate('/account'); // Redirect to User Account page
//         }
//       } else {
//         toast.success('Registration successful. Please login.');
//         setTab('login');

//         // After signup, check if user is an admin and redirect
//         const userRole = res.data.user.role;
//         if (userRole === 'admin') {
//           localStorage.setItem('token', res.data.token);
//           localStorage.setItem('user', JSON.stringify(res.data.user));
//           navigate('/admin/dashboard'); // Redirect to Admin Dashboard after successful signup
//         } else {
//           navigate('/account'); // Redirect to User Account page
//         }
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Something went wrong');
//     }
//   };

//   // Navigate to Forgot Password
//   const handleForgotPassword = () => {
//     onClose(); // Close the popup
//     navigate('/forgot-password'); // Redirect to forgot password page
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-container">
        
//         {/* Left Form Side */}
//         <div className="popup-left">
//           <img src="/logo/zepto-logo1.png.png" className="popup-logo" alt="Zepto" />
//           <h2>Welcome Back</h2>

//           {/* Tabs */}
//           <div className="tab-buttons">
//             <button className={tab === 'login' ? 'active' : ''} onClick={() => setTab('login')}>Sign In</button>
//             <button className={tab === 'register' ? 'active' : ''} onClick={() => setTab('register')}>Sign Up</button>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="popup-form">
//             {tab === 'register' && (
//               <input
//                 name="name"
//                 placeholder="Full Name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//               />
//             )}
//             <input
//               name="phone"
//               placeholder="Phone Number"
//               value={form.phone}
//               onChange={handleChange}
//               required
//             />

//             {/* Role selection for Admin/Vendor/User - only visible in the register tab */}
//             {tab === 'register' && (
//               <select
//                 name="role"
//                 value={form.role}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="user">User</option>
//                 <option value="vendor">Vendor</option>
//                 <option value="admin">Admin</option>
//               </select>
//             )}

//             {/* Password Input with Eye Icon */}
//             <div className="password-field">
//               <input
//                 name="password"
//                 type={showPassword ? 'text' : 'password'} // Toggle password visibility
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//                 className="password-input"
//               />
//               <span className="password-toggle" onClick={togglePasswordVisibility}>
//                 {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />} {/* Eye icon toggle */}
//               </span>
//             </div>

//             <button className="submit-btn">
//               {tab === 'login' ? 'Sign In' : 'Sign Up'}
//             </button>
//           </form>

//           {/* Forgot Password Link */}
//           {tab === 'login' && (
//             <p className="forgot-link" onClick={handleForgotPassword}>
//               Forgot Password?
//             </p>
//           )}

//           <p className="terms">
//             By continuing, you agree to our <span>Terms of Service</span> & <span>Privacy Policy</span>
//           </p>
//         </div>

//         {/* Right Image Side */}
//         <div className="popup-right">
//           <img
//             src="/icons/download.png"
//             alt="Play Store"
//             width={140}
//           />
//           <h3>Order faster & easier every time!</h3>
//           <img
//             src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.70.0/images/get-the-app/get-the-app-phone.png"
//             alt="Zepto app"
//           />
//         </div>

//         {/* Close Button */}
//         <button className="popup-close" onClick={onClose}>✖</button>
//       </div>
//     </div>
//   );
// };

// export default LoginRegisterPopup;



// import React, { useState } from 'react';
// import axios from 'axios';
// import './LoginRegisterPopup.css';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

// const LoginRegisterPopup = ({ onClose }) => {
//   const [tab, setTab] = useState('login');
//   const [form, setForm] = useState({ name: '', phone: '', password: '', role: 'user' });
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const validateForm = () => {
//     const { name, phone, password } = form;

//     if (tab === 'register') {
//       if (!/^[A-Za-z\s]+$/.test(name)) {
//         toast.error('Name should only contain alphabets and spaces.');
//         return false;
//       }
//     }

//     if (!/^[6-9]\d{9}$/.test(phone)) {
//       toast.error('Please enter a valid 10-digit mobile number');
//       return false;
//     }

//     if (!/^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(password)) {
//       toast.error('Password must be at least 6 characters and contain a special character.');
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     const endpoint = tab === 'login' ? '/api/auth/login' : '/api/auth/register';

//     try {
//       const res = await axios.post(endpoint, form);

//       if (tab === 'register') {
//         toast.success('Registration successful! Please login.');
//         setTab('login');
//         return;
//       }

//       // LOGIN successful
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('user', JSON.stringify(res.data.user));

//       toast.success(`Welcome, ${res.data.user.name}!`);
//       onClose(); // Close the popup

//       // Redirect to role-based dashboard
//       navigate('/redirect');
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Something went wrong');
//     }
//   };

//   const handleForgotPassword = () => {
//     onClose();
//     navigate('/forgot-password');
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-container">
//         <div className="popup-left">
//           <img src="/logo/zepto-logo1.png.png" className="popup-logo" alt="Zepto" />
//           <h2>Welcome Back</h2>

//           <div className="tab-buttons">
//             <button className={tab === 'login' ? 'active' : ''} onClick={() => setTab('login')}>Sign In</button>
//             <button className={tab === 'register' ? 'active' : ''} onClick={() => setTab('register')}>Sign Up</button>
//           </div>

//           <form onSubmit={handleSubmit} className="popup-form">
//             {tab === 'register' && (
//               <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
//             )}
//             <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />

//             {tab === 'register' && (
//               <select name="role" value={form.role} onChange={handleChange} required>
//                 <option value="user">User</option>
//                 <option value="vendor">Vendor</option>
//                 <option value="admin">Admin</option>
//               </select>
//             )}

//             <div className="password-field">
//               <input
//                 name="password"
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//                 className="password-input"
//               />
//               <span className="password-toggle" onClick={togglePasswordVisibility}>
//                 {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
//               </span>
//             </div>

//             <button className="submit-btn">
//               {tab === 'login' ? 'Sign In' : 'Sign Up'}
//             </button>
//           </form>

//           {tab === 'login' && (
//             <p className="forgot-link" onClick={handleForgotPassword}>
//               Forgot Password?
//             </p>
//           )}

//           <p className="terms">
//             By continuing, you agree to our <span>Terms of Service</span> & <span>Privacy Policy</span>
//           </p>
//         </div>

//         <div className="popup-right">
//           <img src="/icons/download.png" alt="Play Store" width={140} />
//           <h3>Order faster & easier every time!</h3>
//           <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.70.0/images/get-the-app/get-the-app-phone.png" alt="Zepto app" />
//         </div>

//         <button className="popup-close" onClick={onClose}>✖</button>
//       </div>
//     </div>
//   );
// };

// export default LoginRegisterPopup;

import React, { useState } from 'react';
import axios from 'axios';
import './LoginRegisterPopup.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const LoginRegisterPopup = ({ onClose }) => {
  const [tab, setTab] = useState('login');
  const [form, setForm] = useState({ name: '', phone: '', password: '', role: 'user' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const { name, phone, password } = form;

    if (tab === 'register') {
      if (!/^[A-Za-z\s]+$/.test(name)) {
        toast.error('Name should only contain alphabets and spaces.');
        return false;
      }
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      toast.error('Please enter a valid 10-digit mobile number');
      return false;
    }

    if (!/^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(password)) {
      toast.error('Password must be at least 6 characters and contain a special character.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const endpoint = tab === 'login' ? '/api/auth/login' : '/api/auth/register';

    try {
      const res = await axios.post(endpoint, form);

      if (tab === 'register') {
        toast.success('Registration successful! Please login.');
        setTab('login');
        return;
      }

      // LOGIN successful
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      toast.success(`Welcome, ${res.data.user.name}!`);
      onClose(); // Close the popup

      // Role-based navigation
      const role = res.data.user.role;
      if (role === 'admin') navigate('/admin/dashboard');
      else if (role === 'vendor') navigate('/vendor/dashboard');
      else navigate('/account');

    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    }
  };

  const handleForgotPassword = () => {
    onClose();
    navigate('/forgot-password');
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-left">
          <img src="/logo/zepto-logo1.png.png" className="popup-logo" alt="Zepto" />
          <h2>Welcome Back</h2>

          <div className="tab-buttons">
            <button className={tab === 'login' ? 'active' : ''} onClick={() => setTab('login')}>Sign In</button>
            <button className={tab === 'register' ? 'active' : ''} onClick={() => setTab('register')}>Sign Up</button>
          </div>

          <form onSubmit={handleSubmit} className="popup-form">
            {tab === 'register' && (
              <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
            )}
            <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />

            {tab === 'register' && (
              <select name="role" value={form.role} onChange={handleChange} required>
                <option value="user">User</option>
                <option value="vendor">Vendor</option>
                <option value="admin">Admin</option>
              </select>
            )}

            <div className="password-field">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="password-input"
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>

            <button className="submit-btn">
              {tab === 'login' ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          {tab === 'login' && (
            <p className="forgot-link" onClick={handleForgotPassword}>
              Forgot Password?
            </p>
          )}

          <p className="terms">
            By continuing, you agree to our <span>Terms of Service</span> & <span>Privacy Policy</span>
          </p>
        </div>

        <div className="popup-right">
          <img src="/icons/download.png" alt="Play Store" width={140} />
          <h3>Order faster & easier every time!</h3>
          <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.70.0/images/get-the-app/get-the-app-phone.png" alt="Zepto app" />
        </div>

        <button className="popup-close" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default LoginRegisterPopup;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './LoginRegisterPopup.css';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

// const LoginRegisterPopup = ({ onClose }) => {
//   const [tab, setTab] = useState('login');
//   const [form, setForm] = useState({ name: '', phone: '', password: '', role: 'user' });
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const validateForm = () => {
//     const { name, phone, password } = form;

//     if (tab === 'register') {
//       if (!/^[A-Za-z\s]+$/.test(name)) {
//         toast.error('Name should only contain alphabets and spaces.');
//         return false;
//       }
//     }

//     if (!/^[6-9]\d{9}$/.test(phone)) {
//       toast.error('Please enter a valid 10-digit mobile number');
//       return false;
//     }

//     if (!/^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(password)) {
//       toast.error('Password must be at least 6 characters and contain a special character.');
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     const endpoint = tab === 'login' ? '/api/auth/login' : '/api/auth/register';

//     try {
//       const res = await axios.post(endpoint, form);

//       if (tab === 'register') {
//         toast.success('Registration successful! Please login.');
//         setTab('login');
//         return;
//       }

//       // LOGIN successful
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('user', JSON.stringify(res.data.user));

//       toast.success(`Welcome, ${res.data.user.name}!`);

//       // ✅ Navigate first based on role
//       const role = res.data.user.role;
//       if (role === 'admin') navigate('/admin/dashboard');
//       else if (role === 'vendor') navigate('/vendor/dashboard');
//       else navigate('/account');

//       // ✅ Then close the popup
//       onClose();

//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Something went wrong');
//     }
//   };

//   const handleForgotPassword = () => {
//     onClose();
//     navigate('/forgot-password');
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-container">
//         {/* Left Form Side */}
//         <div className="popup-left">
//           <img src="/logo/zepto-logo1.png.png" className="popup-logo" alt="Zepto" />
//           <h2>Welcome Back</h2>

//           {/* Tabs */}
//           <div className="tab-buttons">
//             <button className={tab === 'login' ? 'active' : ''} onClick={() => setTab('login')}>Sign In</button>
//             <button className={tab === 'register' ? 'active' : ''} onClick={() => setTab('register')}>Sign Up</button>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="popup-form">
//             {tab === 'register' && (
//               <input
//                 name="name"
//                 placeholder="Full Name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//               />
//             )}

//             <input
//               name="phone"
//               placeholder="Phone Number"
//               value={form.phone}
//               onChange={handleChange}
//               required
//             />

//             {/* Role selection in registration */}
//             {tab === 'register' && (
//               <select name="role" value={form.role} onChange={handleChange} required>
//                 <option value="user">User</option>
//                 <option value="vendor">Vendor</option>
//                 <option value="admin">Admin</option>
//               </select>
//             )}

//             {/* Password Field */}
//             <div className="password-field">
//               <input
//                 name="password"
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//                 className="password-input"
//               />
//               <span className="password-toggle" onClick={togglePasswordVisibility}>
//                 {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
//               </span>
//             </div>

//             <button className="submit-btn">
//               {tab === 'login' ? 'Sign In' : 'Sign Up'}
//             </button>
//           </form>

//           {/* Forgot Password */}
//           {tab === 'login' && (
//             <p className="forgot-link" onClick={handleForgotPassword}>
//               Forgot Password?
//             </p>
//           )}

//           <p className="terms">
//             By continuing, you agree to our <span>Terms of Service</span> & <span>Privacy Policy</span>
//           </p>
//         </div>

//         {/* Right Promo Side */}
//         <div className="popup-right">
//           <img src="/icons/download.png" alt="Play Store" width={140} />
//           <h3>Order faster & easier every time!</h3>
//           <img
//             src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.70.0/images/get-the-app/get-the-app-phone.png"
//             alt="Zepto app"
//           />
//         </div>

//         {/* Close Button */}
//         <button className="popup-close" onClick={onClose}>✖</button>
//       </div>
//     </div>
//   );
// };

// export default LoginRegisterPopup;
