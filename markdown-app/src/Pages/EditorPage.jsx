import React, { useState } from "react";
import Editor from "../Components/Editor";   // Corrected Path
import Preview from "../Components/Preview"; // Corrected Path

const EditorPage = () => {
  const [text, setText] = useState("# My New Document\nEdit this text to see the preview.");

  const handleDownload = () => {
    if (text.length > 30000) {
      alert("Page limit exceeded! Please reduce content to under 10 pages.");
      return;
    }
    console.log("Exporting to local machine...");
    // Future Node.js integration point
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Top Navigation Frame */}
      <nav className="bg-white border-b border-slate-200 px-6 py-3 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">M</div>
          <h1 className="text-lg font-semibold text-slate-800 tracking-tight">MarkdownFlow</h1>
        </div>
        <button 
          onClick={handleDownload}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm"
        >
          Download (Max 10 Pages)
        </button>
      </nav>

      {/* Main Workspace Frame */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 lg:p-6 overflow-hidden max-w-[1600px] mx-auto w-full">
        <Editor text={text} setText={setText} />
        <Preview text={text} />
      </div>

      {/* Footer Status Frame */}
      <footer className="bg-white border-t border-slate-200 px-6 py-2 text-[10px] text-slate-400 flex justify-between">
        <span>Frontend Frame Ready</span>
        <span>Draft Autosaved Locally</span>
      </footer>
    </div>
  );
};

export default EditorPage;