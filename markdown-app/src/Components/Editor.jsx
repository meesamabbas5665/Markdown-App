import React from 'react';

const Editor = ({ text, setText }) => {
  const CHAR_LIMIT = 30000; // 10 pages approx
  const progress = (text.length / CHAR_LIMIT) * 100;

  return (
    <div className="flex flex-col h-full bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
      <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex justify-between items-center">
        <span className="text-xs font-bold text-slate-500 uppercase">Markdown Editor</span>
        <span className={`text-xs ${text.length > CHAR_LIMIT ? 'text-red-500' : 'text-slate-400'}`}>
          {text.length} / {CHAR_LIMIT} characters
        </span>
      </div>
      
      <textarea
        className="flex-1 p-4 resize-none focus:outline-none font-mono text-sm text-slate-700"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing your markdown..."
      />

      {/* Page Limit Progress Bar */}
      <div className="h-1 w-full bg-slate-100">
        <div 
          className={`h-full transition-all duration-300 ${progress > 90 ? 'bg-red-500' : 'bg-indigo-500'}`} 
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
};

export default Editor;