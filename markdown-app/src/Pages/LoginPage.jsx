import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 

function LoginPage({ isOpen, onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    if (!isOpen) return null;

    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                onClose();
                window.location.reload(); // To refresh App.jsx state
            }
        } catch (err) {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose}></div>
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md z-10 relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-400">✕</button>
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}
                <form onSubmit={HandleSubmit} className="space-y-4">
                    <input type="email" placeholder="Email" className="w-full p-3 border rounded-xl" value={email} onChange={e => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" className="w-full p-3 border rounded-xl" value={password} onChange={e => setPassword(e.target.value)} required />
                    <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold">Login</button>
                </form>
                <p className="mt-4 text-center text-sm">
                    New here? <Link to="/register" onClick={onClose} className="text-blue-600">Create Account</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;