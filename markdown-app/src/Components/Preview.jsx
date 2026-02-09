import React from 'react';
import ReactMarkdown from 'react-markdown';

// Use React.forwardRef to allow the parent (EditorPage) to get a ref to the div for PDF generation
const Preview = React.forwardRef(({ markdown, onCopy }, ref) => {
  return (
    <div 
      className="flex-1 h-full p-8 overflow-y-auto bg-white prose prose-slate max-w-none"
      ref={ref} 
      onCopy={onCopy}
    >
      {markdown ? (
        <ReactMarkdown>{markdown}</ReactMarkdown>
      ) : (
        <p className="text-gray-300 italic">Select a note to see the preview...</p>
      )}
    </div>
  );
});

Preview.displayName = "Preview"; // Good practice when using forwardRef

export default Preview;