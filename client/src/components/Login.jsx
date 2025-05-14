
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; // optional styling

const Login = () => {
  const [form, setForm] = useState({ phone: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      toast.success(`Welcome back, ${res.data.user.name}!`);
      navigate('/account');
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form className="auth-form" onSubmit={handleLogin}>
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} value={form.phone} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} value={form.password} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
