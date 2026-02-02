import React from 'react';
import { marked } from 'marked';

const Preview = ({ text }) => {
  // Logic to convert text to HTML
  const renderMarkdown = () => {
    return { __html: marked.parse(text) };
  };

  return (
    <div className="flex flex-col h-full bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
      <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
        <span className="text-xs font-bold text-slate-500 uppercase">Live Preview</span>
      </div>
      <div className="flex-1 p-6 overflow-y-auto">
        {/* 'prose' class from Tailwind Typography plugin makes this look like a real document */}
        <article 
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={renderMarkdown()} 
        />
      </div>
    </div>
  );
};

export default Preview;