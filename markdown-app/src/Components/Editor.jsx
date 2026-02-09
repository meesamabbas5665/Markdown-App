import React from 'react';

const Editor = ({ value, onChange, onPaste, wordCount, wordLimit }) => {
  return (
    <div className="flex-1 flex flex-col border-r border-gray-200 h-full bg-white">
      <textarea
        className="flex-1 p-6 resize-none focus:outline-none font-mono text-sm leading-relaxed text-slate-800"
        value={value}
        onChange={onChange}
        onPaste={onPaste}
        placeholder="Start typing markdown..."
        spellCheck="false"
      />
      <div className="p-3 text-[11px] font-semibold uppercase tracking-wider bg-slate-50 text-slate-500 border-t border-gray-100 flex justify-between items-center">
        <span>
            Words: <span className={wordCount > wordLimit ? "text-red-500" : "text-slate-700"}>{wordCount}</span> / {wordLimit}
        </span>
        {wordCount > wordLimit && <span className="text-red-500">Word limit reached</span>}
      </div>
    </div>
  );
};

export default Editor;