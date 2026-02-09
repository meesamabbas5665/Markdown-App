import React, { useState } from 'react';
import { FiEdit3, FiDownload, FiUser } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';

// 1. IMPORTANT: Added { onLoginClick } to the props
function Header({ onLoginClick }) {
    const [docName, setDocName] = useState("Untitled Document");
    const navigate = useNavigate();

    // Note: For real-time updates after login, this state should 
    // ideally come from App.jsx or a Context, but checking localStorage works for now.
    const isLoggedIn = !!localStorage.getItem('token');

    const HandleDownload = () => {
        alert("Preparing your PDF...");
    };

    return (
        <header className="w-full h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 shadow-lg z-50">
            
            {/* LEFT SIDE: Logo & Editable Title */}
            <div className="flex items-center gap-6">
                {/* Brand Logo */}
                <Link to="/" className="text-blue-500 font-black text-xl tracking-tighter hover:text-blue-400 transition-colors">
                    MarkDown<span className="text-white italic">App</span>
                </Link>

                {/* Vertical Divider */}
                <div className="h-6 w-[1px] bg-slate-700 hidden md:block"></div>

                {/* Editable Document Name */}
                <div className="flex items-center gap-2 group">
                    <FiEdit3 className="text-slate-500 group-hover:text-blue-400 transition-colors cursor-pointer" />
                    <input 
                        type="text"
                        value={docName}
                        onChange={(e) => setDocName(e.target.value)}
                        className="bg-transparent text-slate-200 text-sm font-medium outline-none border-b border-transparent focus:border-blue-500 transition-all w-48 md:w-64"
                        placeholder="Document Name"
                    />
                </div>
            </div>

            {/* RIGHT SIDE: Action Buttons */}
            <div className="flex items-center gap-3">
                
                {/* Download Button */}
                <button 
                    onClick={HandleDownload}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded shadow-md transition-all active:scale-95"
                >
                    <FiDownload className="text-sm" /> 
                    <span className="hidden sm:inline">DOWNLOAD PDF</span>
                </button>

                {/* Conditional Auth Button */}
                {isLoggedIn ? (
                    <button 
                        onClick={() => navigate('/profile')}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded border border-slate-700 transition-all active:scale-95"
                    >
                        <FiUser className="text-sm" />
                        <span className="hidden sm:inline">PROFILE</span>
                    </button>
                ) : (
                    /* 2. FIXED: This now calls the prop function passed from App.jsx */
                    <button 
                        onClick={onLoginClick} 
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded shadow-md transition-all active:scale-95"
                    >
                        LOGIN
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;