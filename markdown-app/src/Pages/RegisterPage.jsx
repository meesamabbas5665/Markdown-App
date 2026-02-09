import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

function RegisterPage({ openLogin }) {
    const [newname, setNewName] = useState("");
    const [newemail, setNewEmail] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [conpassword, setConPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSwitchToLogin = (e) => {
        if (e) e.preventDefault();
        navigate("/");      
        openLogin();        
    };

    const HandleSubmit = async (event) => {
        event.preventDefault();
        setError(""); 

        // 1. Frontend Validation
        if (newpassword !== conpassword) {
            setError("Passwords do not match!");
            return;
        }

        if (newpassword.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        setLoading(true);

        try {
            // 2. API Call
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                username: newname,
                email: newemail,
                password: newpassword,
                confirmPassword: conpassword
            });

            // 3. Handle Success
            // Check for 200 or 201 status
            if (response.status === 201 || response.status === 200) {
                alert("Account Created Successfully!");
                // FIX: Navigate home and open the Login Modal
                navigate('/');
                openLogin(); 
            }
        } catch (err) {
            // FIX: Capture the actual message from your backend (e.g., "Email already exists")
            const message = err.response?.data?.message || err.response?.data?.error || "Registration failed";
            setError(message);
            console.error("Axios Error:", err.response?.data);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-full w-full flex items-center justify-center bg-slate-100 px-4 py-10 font-sans">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-200">
                
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Create Account</h1>
                    <p className="text-slate-500 text-sm mt-2">Start your markdown journey with MarkDownApp</p>
                </div>

                {/* Error Box */}
                {error && (
                    <div className="mb-6 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-bold">
                        {error}
                    </div>
                )}

                <form onSubmit={HandleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                        <input 
                            type="text" 
                            required
                            value={newname}
                            placeholder='e.g. Meesam Abbas'
                            onChange={(e) => setNewName(e.target.value)}
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                        <input 
                            type="email" 
                            required
                            value={newemail}
                            placeholder='name@example.com'
                            onChange={(e) => setNewEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Password</label>
                        <input 
                            type="password"
                            required
                            value={newpassword}
                            placeholder='••••••••'
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Confirm Password</label>
                        <input 
                            type="password" 
                            required
                            value={conpassword}
                            placeholder='••••••••'
                            onChange={(e) => setConPassword(e.target.value)}
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 outline-none transition-all ${
                                error === "Passwords do not match!" ? "border-red-500 ring-red-100" : "border-slate-300 focus:ring-blue-500"
                            }`}
                        />
                    </div>

                    <button 
                        type='submit'
                        disabled={loading}
                        className={`w-full py-3 mt-4 rounded-xl text-white font-bold text-lg shadow-lg transition-all active:scale-95 ${
                            loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                    >
                        {loading ? "Registering..." : "Create Account"}
                    </button>
                </form>

                <div className="text-center mt-8 border-t border-slate-100 pt-6">
                    <p className="text-sm text-slate-600">
                        Already a member? 
                        <button 
                            onClick={handleSwitchToLogin}
                            className="text-blue-600 font-bold hover:underline ml-1 bg-transparent border-none cursor-pointer p-0"
                        >
                            Sign in here
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;