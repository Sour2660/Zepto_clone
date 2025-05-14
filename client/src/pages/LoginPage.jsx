// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
// import { useAuth } from '../context/AuthContext'; // ✅ import useAuth
// import './LoginPage.css';

// const LoginPage = () => {
//   const [form, setForm] = useState({ phone: '', password: '' });
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const { login } = useAuth(); // ✅ use login from context

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!/^[6-9]\d{9}$/.test(form.phone)) {
//       toast.error('Enter valid 10-digit mobile number');
//       return;
//     }

//     if (form.password.length < 6) {
//       toast.error('Password must be at least 6 characters');
//       return;
//     }

//     try {
//       const res = await axios.post('/api/auth/login', form);
//       const user = res.data.user;

//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('user', JSON.stringify(user));

//       login(user); // ✅ update auth context

//       toast.success(`Welcome, ${user.name}`);

//       if (user.role === 'admin') navigate('/admin/dashboard');
//       else if (user.role === 'vendor') navigate('/vendor/dashboard');
//       else navigate('/');
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div className="login-page-container">
//       <div className="login-form">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone Number"
//             value={form.phone}
//             onChange={handleChange}
//             required
//           />

//           <div className="password-wrapper">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               name="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//             />
//             <span onClick={togglePassword}>
//               {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
//             </span>
//           </div>

//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



// ✅ Combined Login & Register Page with Tabs and Role-based Redirect
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
// import { useAuth } from '../context/AuthContext';
// import './LoginPage.css';

// const LoginPage = () => {
//   const [tab, setTab] = useState('login');
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [form, setForm] = useState({
//     name: '',
//     phone: '',
//     password: '',
//     role: 'user',
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const togglePassword = () => setShowPassword(!showPassword);

//   const validateForm = () => {
//     if (!/^[6-9]\d{9}$/.test(form.phone)) {
//       toast.error('Enter valid 10-digit phone number');
//       return false;
//     }
//     if (form.password.length < 6) {
//       toast.error('Password must be at least 6 characters');
//       return false;
//     }
//     if (tab === 'register' && !/^[A-Za-z\s]+$/.test(form.name)) {
//       toast.error('Name must contain only letters and spaces');
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
//         toast.success('Registration successful. Please log in.');
//         setTab('login');
//         return;
//       }

//       const user = res.data.user;
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('user', JSON.stringify(user));
//       login(user);
//       toast.success(`Welcome, ${user.name}`);

//       if (user.role === 'admin') navigate('/admin/dashboard');
//       else if (user.role === 'vendor') navigate('/vendor/dashboard');
//       else navigate('/');

//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="login-page-container">
//       <div className="login-form">
//         <div className="tab-buttons">
//           <button
//             className={tab === 'login' ? 'active' : ''}
//             onClick={() => setTab('login')}
//           >
//             Sign In
//           </button>
//           <button
//             className={tab === 'register' ? 'active' : ''}
//             onClick={() => setTab('register')}
//           >
//             Sign Up
//           </button>
//         </div>

//         <form onSubmit={handleSubmit}>
//           {tab === 'register' && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={form.name}
//               onChange={handleChange}
//               required
//             />
//           )}

//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone Number"
//             value={form.phone}
//             onChange={handleChange}
//             required
//           />

//           {tab === 'register' && (
//             <select name="role" value={form.role} onChange={handleChange}>
//               <option value="user">User</option>
//               <option value="vendor">Vendor</option>
//               <option value="admin">Admin</option>
//             </select>
//           )}

//           <div className="password-wrapper">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               name="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//             />
//             <span onClick={togglePassword}>
//               {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
//             </span>
//           </div>

//           <button type="submit">{tab === 'login' ? 'Login' : 'Register'}</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
// import { useAuth } from '../context/AuthContext';
// import './LoginPage.css';

// const LoginPage = () => {
//   const [tab, setTab] = useState('login');
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [form, setForm] = useState({
//     name: '',
//     phone: '',
//     password: '',
//     role: 'user',
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const togglePassword = () => setShowPassword(!showPassword);

//   const validateForm = () => {
//     if (!/^[6-9]\d{9}$/.test(form.phone)) {
//       toast.error('Enter valid 10-digit phone number');
//       return false;
//     }
//     if (form.password.length < 6) {
//       toast.error('Password must be at least 6 characters');
//       return false;
//     }
//     if (tab === 'register' && !/^[A-Za-z\s]+$/.test(form.name)) {
//       toast.error('Name must contain only letters and spaces');
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
//         toast.success('Registration successful. Please log in.');
//         setTab('login');
//         return;
//       }

//       const user = res.data.user;
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('user', JSON.stringify(user));
//       login(user);
//       toast.success(`Welcome, ${user.name}`);

//       if (user.role === 'admin') navigate('/admin/dashboard');
//       else if (user.role === 'vendor') navigate('/vendor/dashboard');
//       else navigate('/');
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="login-page-container">
//       <div className="login-form">
//         <div className="tab-buttons">
//           <button
//             className={tab === 'login' ? 'active' : ''}
//             onClick={() => setTab('login')}
//           >
//             Sign In
//           </button>
//           <button
//             className={tab === 'register' ? 'active' : ''}
//             onClick={() => setTab('register')}
//           >
//             Sign Up
//           </button>
//         </div>

//         <form onSubmit={handleSubmit}>
//           {tab === 'register' && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={form.name}
//               onChange={handleChange}
//               required
//             />
//           )}

//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone Number"
//             value={form.phone}
//             onChange={handleChange}
//             required
//           />

//           {tab === 'register' && (
//             <select name="role" value={form.role} onChange={handleChange}>
//               <option value="user">User</option>
//               <option value="vendor">Vendor</option>
//               <option value="admin">Admin</option>
//             </select>
//           )}

//           <div className="password-wrapper">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               name="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//             />
//             <span onClick={togglePassword}>
//               {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
//             </span>
//           </div>

//           <button type="submit">
//             {tab === 'login' ? 'Login' : 'Register'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
// import { useAuth } from '../context/AuthContext';
// import ForgotPassword from '../components/ForgotPassword';
// import './LoginPage.css';

// const LoginPage = () => {
//   const [tab, setTab] = useState('login');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showForgotPassword, setShowForgotPassword] = useState(false);
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [form, setForm] = useState({
//     name: '',
//     phone: '',
//     password: '',
//     role: 'user',
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const togglePassword = () => setShowPassword(!showPassword);

//   const validateForm = () => {
//     if (!/^[6-9]\d{9}$/.test(form.phone)) {
//       toast.error('Enter valid 10-digit phone number');
//       return false;
//     }
//     if (form.password.length < 6) {
//       toast.error('Password must be at least 6 characters');
//       return false;
//     }
//     if (tab === 'register' && !/^[A-Za-z\s]+$/.test(form.name)) {
//       toast.error('Name must contain only letters and spaces');
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
//         toast.success('Registration successful. Please log in.');
//         setTab('login');
//         return;
//       }

//       const user = res.data.user;
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('user', JSON.stringify(user));
//       login(user);
//       toast.success(`Welcome, ${user.name}`);

//       if (user.role === 'admin') navigate('/admin/dashboard');
//       else if (user.role === 'vendor') navigate('/vendor/dashboard');
//       else navigate('/');
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="login-page-container">
//       <div className="login-form">
//         <div className="tab-buttons">
//           <button className={tab === 'login' ? 'active' : ''} onClick={() => setTab('login')}>Sign In</button>
//           <button className={tab === 'register' ? 'active' : ''} onClick={() => setTab('register')}>Sign Up</button>
//         </div>

//         <form onSubmit={handleSubmit}>
//           {tab === 'register' && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={form.name}
//               onChange={handleChange}
//               required
//             />
//           )}

//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone Number"
//             value={form.phone}
//             onChange={handleChange}
//             required
//           />

//           {tab === 'register' && (
//             <select name="role" value={form.role} onChange={handleChange}>
//               <option value="user">User</option>
//               <option value="vendor">Vendor</option>
//               <option value="admin">Admin</option>
//             </select>
//           )}

//           <div className="password-wrapper">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               name="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               autoComplete="current-password"
//             />
//             <span onClick={togglePassword}>
//               {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
//             </span>
//           </div>

//           {tab === 'login' && (
//             <p
//               onClick={() => setShowForgotPassword(true)}
//               style={{ color: 'blue', cursor: 'pointer', fontSize: '0.9rem', marginTop: '5px' }}
//             >
//               Forgot Password?
//             </p>
//           )}

//           <button type="submit">{tab === 'login' ? 'Login' : 'Register'}</button>
//         </form>
//       </div>

//       {showForgotPassword && <ForgotPassword onClose={() => setShowForgotPassword(false)} />}
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useAuth } from '../context/AuthContext';
import ForgotPassword from '../components/ForgotPassword';
import './LoginPage.css';

const LoginPage = () => {
  const [tab, setTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    password: '',
    role: 'user',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePassword = () => setShowPassword(!showPassword);

  const validateForm = () => {
    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      toast.error('Enter valid 10-digit phone number');
      return false;
    }
    if (form.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return false;
    }
    if (tab === 'register' && !/^[A-Za-z\s]+$/.test(form.name)) {
      toast.error('Name must contain only letters and spaces');
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
        toast.success('Registration successful. Please log in.');
        setTab('login');
        return;
      }

      const user = res.data.user;
      const token = res.data.token;

      if (!token || !user || !user._id || !user.role) {
        toast.error('Invalid login response. Please try again.');
        return;
      }

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      login(user);
      toast.success(`Welcome, ${user.name}`);

      if (user.role === 'admin') navigate('/admin/dashboard');
      else if (user.role === 'vendor') navigate('/vendor/dashboard');
      else navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-form">
        <div className="tab-buttons">
          <button className={tab === 'login' ? 'active' : ''} onClick={() => setTab('login')}>Sign In</button>
          <button className={tab === 'register' ? 'active' : ''} onClick={() => setTab('register')}>Sign Up</button>
        </div>

        <form onSubmit={handleSubmit}>
          {tab === 'register' && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          {tab === 'register' && (
            <select name="role" value={form.role} onChange={handleChange}>
              <option value="user">User</option>
              <option value="vendor">Vendor</option>
              <option value="admin">Admin</option>
            </select>
          )}

          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
            <span onClick={togglePassword}>
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>

          {tab === 'login' && (
            <p
              onClick={() => setShowForgotPassword(true)}
              style={{ color: 'blue', cursor: 'pointer', fontSize: '0.9rem', marginTop: '5px' }}
            >
              Forgot Password?
            </p>
          )}

          <button type="submit">{tab === 'login' ? 'Login' : 'Register'}</button>
        </form>
      </div>

      {showForgotPassword && <ForgotPassword onClose={() => setShowForgotPassword(false)} />}
    </div>
  );
};

export default LoginPage;
