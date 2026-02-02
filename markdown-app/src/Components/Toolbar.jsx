import React from 'react'
import { FiCopy, FiDownload } from 'react-icons/fi'; // Importing clean icons

function Toolbar() {
    
    const HandleCopy = () => {
        // Your copy logic here
        alert("Text Copied!");
    }

    const HandleDownload = () => {
        // Your download logic here
        alert("Downloading PDF...");
    }

  return (
    // CONTAINER: Light gray background, border bottom to separate from editor
    <div className="w-full h-12 bg-slate-50 border-b border-slate-200 flex items-center justify-end px-4 gap-3">
        
        {/* COPY BUTTON: Subtle Gray Style */}
        <button 
            onClick={HandleCopy}
            className="flex items-center gap-2 px-3 py-1.5 text-slate-600 text-sm font-medium rounded-md hover:bg-slate-200 hover:text-slate-900 transition-all duration-200"
            title="Copy to Clipboard"
        >
            <FiCopy className="text-lg" />
            <span>Copy Text</span>
        </button>

        {/* DOWNLOAD BUTTON: Light Blue Accent Style */}
        <button 
            onClick={HandleDownload}
            className="flex items-center gap-2 px-3 py-1.5 text-blue-600 bg-blue-50 border border-blue-200 text-sm font-medium rounded-md hover:bg-blue-100 transition-all duration-200 shadow-sm"
            title="Download as PDF"
        >
            <FiDownload className="text-lg" />
            <span>Download PDF</span>
        </button>
    </div>
  )
}

export default Toolbar