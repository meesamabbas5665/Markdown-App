import React, { useState } from 'react';

function ProfilePage() {
    const [newname, setNewName] = useState("");
    const [newemail, setNewEmail] = useState("");
    const [oldpassword, setOldPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [conpassword, setConPassword] = useState("");

    const HandleUpdateProfile = (e) => {
        e.preventDefault();
        console.log("Update profile:", newname, newemail);
    };

    const HandleUpdatePassword = (e) => {
        e.preventDefault();
        console.log("Update password:", oldpassword, newpassword, conpassword);
    };

    return (
        <div className="min-h-screen bg-slate-100 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* PAGE HEADER */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="font-semibold text-2xl text-slate-800">Account Settings</h2>
                    {/* Logout Dropdown Simulation */}
                    <select className="bg-white border border-slate-300 text-slate-700 py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="Profile">Manage Profile</option>
                        <option value="Logout">Logout</option>
                    </select>
                </div>

                {/* --- SECTION 1: PROFILE INFO --- */}
                <div className="md:grid md:grid-cols-3 md:gap-6 mb-10">
                    
                    {/* LEFT SIDE: Text */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-slate-900">Profile Information</h3>
                        <p className="mt-1 text-sm text-slate-500">
                            Update your account's profile information and email address.
                        </p>
                    </div>

                    {/* RIGHT SIDE: Form Card */}
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={HandleUpdateProfile} className="bg-white shadow rounded-md overflow-hidden">
                            <div className="px-4 py-5 sm:p-6 space-y-6">
                                
                                {/* Name Input */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700">Name</label>
                                    <input 
                                        type="text"
                                        className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        value={newname} 
                                        placeholder='John Doe'
                                        onChange={(e) => setNewName(e.target.value)}
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700">Email</label>
                                    <input 
                                        type="email"
                                        className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        value={newemail} 
                                        placeholder='john@example.com'
                                        onChange={(e) => setNewEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            
                            {/* Card Footer */}
                            <div className="px-4 py-3 bg-slate-50 text-right sm:px-6">
                                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 transition-colors">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* --- SECTION 2: UPDATE PASSWORD --- */}
                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5"><div className="border-t border-slate-200"></div></div>
                </div>

                <div className="md:grid md:grid-cols-3 md:gap-6 mb-10">
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-slate-900">Update Password</h3>
                        <p className="mt-1 text-sm text-slate-500">
                            Ensure your account is using a long, random password to stay secure.
                        </p>
                    </div>

                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={HandleUpdatePassword} className="bg-white shadow rounded-md overflow-hidden">
                            <div className="px-4 py-5 sm:p-6 space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700">Current Password</label>
                                    <input 
                                        type="password"
                                        className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        value={oldpassword} 
                                        onChange={(e) => setOldPassword(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700">New Password</label>
                                    <input 
                                        type="password"
                                        className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        value={newpassword} 
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700">Confirm Password</label>
                                    <input 
                                        type="password"
                                        className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        value={conpassword} 
                                        onChange={(e) => setConPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-slate-50 text-right sm:px-6">
                                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* --- SECTION 3: TWO FACTOR AUTH --- */}
                <div className="hidden sm:block" aria-hidden="true"><div className="py-5"><div className="border-t border-slate-200"></div></div></div>

                <div className="md:grid md:grid-cols-3 md:gap-6 mb-10">
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-slate-900">Two Factor Authentication</h3>
                        <p className="mt-1 text-sm text-slate-500">
                            Add additional security to your account using two factor authentication.
                        </p>
                    </div>

                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="bg-white shadow rounded-md overflow-hidden">
                            <div className="px-4 py-5 sm:p-6">
                                <h3 className="text-lg font-medium text-slate-900">You have not enabled two factor authentication.</h3>
                                <div className="mt-2 max-w-xl text-sm text-slate-500">
                                    <p>When two factor authentication is enabled, you will be prompted for a secure, random token during authentication.</p>
                                </div>
                                <div className="mt-5">
                                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-800 hover:bg-slate-700">
                                        Enable
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SECTION 4: BROWSER SESSIONS --- */}
                <div className="hidden sm:block" aria-hidden="true"><div className="py-5"><div className="border-t border-slate-200"></div></div></div>

                <div className="md:grid md:grid-cols-3 md:gap-6 mb-10">
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-slate-900">Browser Sessions</h3>
                        <p className="mt-1 text-sm text-slate-500">
                            Manage and log out your active sessions on other browsers and devices.
                        </p>
                    </div>

                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="bg-white shadow rounded-md overflow-hidden">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="text-sm text-slate-500 mb-4">
                                    <p>If necessary, you may log out of all of your other browser sessions across all of your devices.</p>
                                </div>
                                <button type="button" className="inline-flex items-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50">
                                    Logout Other Browser Sessions
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SECTION 5: DELETE ACCOUNT --- */}
                <div className="hidden sm:block" aria-hidden="true"><div className="py-5"><div className="border-t border-slate-200"></div></div></div>

                <div className="md:grid md:grid-cols-3 md:gap-6 mb-10">
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-slate-900">Delete Account</h3>
                        <p className="mt-1 text-sm text-slate-500">
                            Permanently delete your account.
                        </p>
                    </div>

                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="bg-white shadow rounded-md overflow-hidden">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="max-w-xl text-sm text-slate-500 mb-5">
                                    <p>Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.</p>
                                </div>
                                <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProfilePage;