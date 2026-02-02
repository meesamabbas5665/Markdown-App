import React from 'react';
import { FiEdit3 } from 'react-icons/fi';

function Header() {
    const HandleDownload = () => {
        alert("Downloading...");
    };

    const HandleLogin = () => {
        alert("Login Clicked");
    };

    return (
        <header className="w-full h-16 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-6 shadow-md">
            <div className="flex-1 flex items-center gap-3 group">
                <label className='bg-transparent text-white text-lg font-semibold outline-none border-b border-transparent focus:border-blue-500 transition-colors duration-300 placeholder-slate-200 w-half max-w-md'>
                    MarkDownApp
                </label>
            </div>

            {/* RIGHT SIDE: Buttons */}
            <div className="flex items-center gap-4">
                <button 
                    onClick={HandleDownload}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md shadow-sm transition-all duration-200"
                >
                    Download PDF
                </button>

                <button 
                    onClick={HandleLogin}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium rounded-md border border-slate-600 transition-all duration-200"
                >
                    Login
                </button>
            </div>
        </header>
    );
}

export default Header;