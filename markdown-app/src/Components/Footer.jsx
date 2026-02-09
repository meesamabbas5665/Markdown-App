import React from 'react';
// Icons for social media links
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    // Main container with dark theme matching your Header/Sidebar
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="px-4 py-12 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* 1. App Name and Description */}
          <div>
            <h3 className="text-xl font-bold text-white">Markdown App</h3>
            <p className="max-w-xs mt-4 text-sm text-slate-400">
              A powerful and minimalist Markdown editor built with the MERN stack. Create, edit, and export your documents with ease.
            </p>
            {/* Social Media Icons */}
            <div className="flex mt-8 space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                <span className="sr-only"> GitHub </span>
                <FiGithub className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                <span className="sr-only"> Twitter </span>
                <FiTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                <span className="sr-only"> LinkedIn </span>
                <FiLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* 2. Links Grid */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-3">
            <div>
              <p className="font-medium text-white">Navigate</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors"> Home </a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors"> Editor </a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors"> Login </a></li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Resources</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors"> About </a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors"> Contact </a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors"> Features </a></li>
              </ul>
            </div>

             <div>
              <p className="font-medium text-white">Legal</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors"> Privacy Policy </a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors"> Terms of Service </a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* 3. Copyright Section */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-sm text-center text-slate-500">
            &copy; 2024 MeesamAbbas. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;