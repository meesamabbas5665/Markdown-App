import React, { useState } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar'; 
import Toolbar from './Components/Toolbar';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ProfilePage from './Pages/ProfilePage';
import EditorPage from './Pages/EditorPage';
function App() {

  const [notes, setNotes] = useState([
    { id: 1, title: "Backend Setup", content: "# Backend Setup\nConnecting to MySQL..." },
    { id: 2, title: "Frontend Logic", content: "# Frontend Logic\nReact components..." }
  ]);
  
  const [activeNoteId, setActiveNoteId] = useState(1);
  const activeNote = notes.find((note) => note.id === activeNoteId);

  const getNoteTitle = (content) => {
    const firstLine = content.split('\n')[0];
    return firstLine.replace(/[#*`]/g, '').trim().substring(0, 30);
  };

  const onUpdateNote = (newContent) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === activeNoteId) {
        return {
          ...note,
          content: newContent,
          title: getNoteTitle(newContent) 
        };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const onAddNote = () => {
    const newNote = {
      id: Date.now(), // Temporary ID until Backend gives a real ID
      title: "New Document",
      content: "# New Document"
    };
    setNotes([newNote, ...notes]);
    setActiveNoteId(newNote.id);
  };

  return (
    <div className="h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header />
        <Toolbar/>
      
      <div className="flex flex-1 overflow-hidden">
        
        {/* HERE WE USE THE SIDEBAR COMPONENT */}
        <Sidebar 
          notes={notes} 
          activeNoteId={activeNoteId} 
          onSelectNote={setActiveNoteId} 
          onAddNote={onAddNote}
        />


        {/* Editor Area */}
        <main className="flex-1 p-6 overflow-auto">
          <textarea 
            className="w-full h-full p-6 text-lg border border-slate-200 focus:outline-none resize-none"
            value={activeNote ? activeNote.content : ""}
            onChange={(e) => onUpdateNote(e.target.value)}
            placeholder="Start typing..."
          />
        </main>
      </div>
        <LoginPage/>
        <RegisterPage/>
        {/* <ProfilePage/> */}
        <EditorPage/> 
    </div>
  );
}

export default App;