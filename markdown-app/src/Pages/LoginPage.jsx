import React, { useState } from 'react';

function LoginPage() {
    // 1. Define State for inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const HandleSubmit = (e) => {
        e.preventDefault(); // Prevents page refresh
        console.log("Logging in with:", email, password);
        // Add your axios.post() logic here later
    };

    return (
        // PAGE CONTAINER: Centered, Light Gray Background
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            
            {/* LOGIN CARD: White, Shadow, Rounded */}
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-slate-200">
                
                {/* HEADER */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Welcome Back</h1>
                    <p className="text-slate-500 text-sm mt-2">Please login to your account</p>
                </div>

                <form onSubmit={HandleSubmit} className="space-y-6">
                    
                    {/* EMAIL INPUT */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Email Address
                        </label>
                        <input 
                            name='email'
                            type="email"
                            required
                            placeholder='name@example.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>

                    {/* PASSWORD INPUT */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Password
                        </label>
                        <input 
                            name='password'
                            type="password"
                            required
                            placeholder='••••••••'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button 
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-md transition-colors duration-200 shadow-sm"
                    >
                        Login
                    </button>
                </form>

                {/* FOOTER LINK */}
                <p className="text-center text-sm text-slate-500 mt-6">
                    Don't have an account? 
                    <a href="/register" className="text-blue-600 hover:underline ml-1">Sign up</a>
                </p>

            </div>
        </div>
    );
}

export default LoginPage;