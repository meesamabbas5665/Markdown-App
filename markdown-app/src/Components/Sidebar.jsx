import React from 'react';
import { FaPlus, FaFileAlt, FaTrash } from 'react-icons/fa';
import API from '../api';

const Sidebar = ({ notes, activeNoteId, setActiveNoteId, onAddNote }) => {
    
    // Function to delete a note from MySQL
    const handleDelete = async (e, id) => {
        e.stopPropagation(); // Prevent selecting the note when clicking delete
        if (window.confirm("Delete this document?")) {
            try {
                await API.delete(`/notes/${id}`);
                window.location.reload(); // Refresh to update list
            } catch (err) {
                alert("Delete failed");
            }
        }
    };

    return (
        <aside className="w-64 h-full bg-slate-900 border-r border-slate-800 flex flex-col flex-shrink-0 z-20">
            {/* NEW DOCUMENT BUTTON */}
            <div className="p-4 border-b border-slate-800">
                <button 
                    onClick={onAddNote}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg transition-all active:scale-95 font-semibold text-sm shadow-lg shadow-blue-900/20"
                >
                    <FaPlus /> New Document
                </button>
            </div>

            {/* DOCUMENT LIST */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
                <h3 className="px-5 mt-4 mb-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    My History
                </h3>
                
                <div className="px-2 space-y-1">
                    {notes.map((note) => (
                        <div 
                            key={note.id}
                            onClick={() => setActiveNoteId(note.id)}
                            className={`group flex items-center justify-between px-3 py-3 rounded-md cursor-pointer transition-all duration-200 ${
                                note.id === activeNoteId 
                                ? 'bg-blue-600/10 text-blue-400 border-l-2 border-blue-500' 
                                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                            }`}
                        >
                            <div className="flex items-center gap-3 overflow-hidden">
                                <FaFileAlt className={`text-sm flex-shrink-0 ${note.id === activeNoteId ? 'text-blue-500' : 'text-slate-600'}`} />
                                <span className="text-sm font-medium truncate italic">
                                    {note.title || "Untitled Document"}
                                </span>
                            </div>

                            {/* Hidden Delete Button (shows on hover) */}
                            <button 
                                onClick={(e) => handleDelete(e, note.id)}
                                className="opacity-0 group-hover:opacity-100 p-1 hover:text-red-500 transition-opacity"
                            >
                                <FaTrash className="text-xs" />
                            </button>
                        </div>
                    ))}
                </div>

                {notes.length === 0 && (
                    <p className="text-center text-slate-600 text-xs mt-10 italic px-4">
                        No saved documents found in MySQL.
                    </p>
                )}
            </div>

            {/* LOGGED IN USER STATUS */}
            <div className="p-4 bg-slate-900/50 border-t border-slate-800">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">MySQL Connected</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;