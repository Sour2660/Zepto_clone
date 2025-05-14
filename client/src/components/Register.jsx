
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Auth.css'; // optional styling

const Register = () => {
  const [form, setForm] = useState({ name: '', phone: '', password: '' });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, phone, password } = form;

    if (!name || !phone || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      const res = await axios.post('/api/auth/register', { name, phone, password });
      toast.success("Registration successful! You can now login.");
      setForm({ name: '', phone: '', password: '' });
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form className="auth-form" onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} value={form.name} />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} value={form.phone} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} value={form.password} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
