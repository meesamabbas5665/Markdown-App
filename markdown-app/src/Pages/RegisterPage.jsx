import React, { useState } from 'react';

function RegisterPage() {
    const [newname, setNewName] = useState("");
    const [newemail, setNewEmail] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [conpassword, setConPassword] = useState("");
    
    // State for error handling styling
    const [error, setError] = useState("");

    const HandleSubmit = (event) => {
        event.preventDefault();
        
        // Basic Validation
        if (newpassword !== conpassword) {
            setError(alert("Error"));
            return;
        }

        setError(""); // Clear error
        console.log("Register with:", newname, newemail, newpassword);
        // Add your API call here
    };

    return (
        // PAGE CONTAINER: Center content, light gray background
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            
            {/* CARD CONTAINER: White, shadow, rounded corners */}
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-slate-200">
                
                {/* HEADER */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-slate-800">Create Account</h1>
                    <p className="text-slate-500 text-sm mt-2">Join us to start writing Markdown</p>
                </div>

                {/* ERROR MESSAGE (Shows only if passwords don't match) */}
                {error && (
                    <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-200 text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={HandleSubmit} className="space-y-4">
                    
                    {/* NAME INPUT */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Full Name
                        </label>
                        <input 
                            name='name' 
                            type="text" 
                            required
                            value={newname}
                            placeholder='John Doe'
                            onChange={(e) => setNewName(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>

                    {/* EMAIL INPUT */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Email Address
                        </label>
                        <input 
                            name='email' 
                            type="email" 
                            required
                            value={newemail}
                            placeholder='name@example.com'
                            onChange={(e) => setNewEmail(e.target.value)}
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
                            value={newpassword}
                            placeholder='••••••••'
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>

                    {/* CONFIRM PASSWORD INPUT */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Confirm Password
                        </label>
                        <input 
                            name='confirm_password' 
                            type="password" 
                            required
                            value={conpassword}
                            placeholder='••••••••'
                            onChange={(e) => setConPassword(e.target.value)}
                            // Add red border if passwords don't match and user has typed something
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all 
                                ${error ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'}`}
                        />
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button 
                        type='submit'
                        className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-md transition-colors duration-200 shadow-md"
                    >
                        Register Now
                    </button>
                </form>

                {/* LOGIN LINK */}
                <p className="text-center text-sm text-slate-500 mt-6">
                    Already have an account? 
                    <a href="/login" className="text-blue-600 hover:underline ml-1">Login here</a>
                </p>

            </div>
        </div>
    );
}

export default RegisterPage;