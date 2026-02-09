import React, { useState, useRef } from 'react';
import API from '../api';
import html2pdf from 'html2pdf.js';
import ReactMarkdown from 'react-markdown';

function EditorPage({ notes, setNotes, activeNoteId }) {
    const [previewMarkdown, setPreviewMarkdown] = useState("");
    const [prevId, setPrevId] = useState(null);
    const previewRef = useRef();
    const isLoggedIn = !!localStorage.getItem('token');

    const activeNote = notes.find((n) => n.id === activeNoteId);

    // Sync state during render to avoid useEffect errors
    if (activeNoteId !== prevId) {
        setPrevId(activeNoteId);
        setPreviewMarkdown(activeNote?.content ?? "");
    }

    const handleSave = async (content) => {
        setPreviewMarkdown(content);
        if (!isLoggedIn || !activeNoteId) return;
        try {
            await API.put(`/notes/${activeNoteId}`, { content });
            const updatedNotes = notes.map(n => n.id === activeNoteId ? { ...n, content } : n);
            setNotes(updatedNotes);
        } catch (error) {
            console.error("Save failed");
        }
    };

    return (
        <div className="flex flex-col h-full w-full bg-white">
            <div className="p-3 border-b flex justify-end bg-slate-100">
                <button 
                    onClick={() => html2pdf().from(previewRef.current).save()}
                    className="bg-blue-600 text-white px-4 py-2 rounded shadow"
                >
                    Download PDF
                </button>
            </div>
            <div className="flex flex-1 overflow-hidden">
                <textarea
                    className="w-1/2 p-6 outline-none border-r resize-none font-mono"
                    value={previewMarkdown}
                    onChange={(e) => handleSave(e.target.value)}
                />
                <div ref={previewRef} className="w-1/2 p-8 overflow-auto prose max-w-none bg-slate-50">
                    <ReactMarkdown>{previewMarkdown}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
}

export default EditorPage;