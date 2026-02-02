import React from 'react';
import { FiFileText, FiPlus } from 'react-icons/fi';

const Sidebar = ({ notes, activeNoteId, onSelectNote, onAddNote }) => {
  return (
    // THE SIDEBAR UI CODE IS HERE ONLY
    <aside className="w-64 bg-slate-900 border-r border-slate-700 flex flex-col h-full flex-shrink-0">
      
      {/* 1. Add New Button */}
      <div className="p-4 border-b border-slate-700">
        <button 
          onClick={onAddNote}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-all font-medium text-sm"
        >
          <FiPlus className="text-lg" /> New Document
        </button>
      </div>

      {/* 2. Document List */}
      <div className="flex-1 overflow-y-auto p-2">
        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-2 mt-2">
          My Documents
        </h3>

        <ul className="space-y-1">
          {notes.map((note) => (
            <li key={note.id}>
              <button
                onClick={() => onSelectNote(note.id)}
                className={`w-full flex items-center gap-3 px-3 py-3 text-sm rounded-md transition-all text-left
                  ${note.id === activeNoteId 
                    ? 'bg-slate-800 text-blue-400 border-l-4 border-blue-500' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200 border-l-4 border-transparent'
                  }`}
              >
                <FiFileText />
                {/* Display Title or 'Untitled' */}
                <span className="truncate">
                  {note.title && note.title.trim() !== "" ? note.title : "Untitled Document"}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;