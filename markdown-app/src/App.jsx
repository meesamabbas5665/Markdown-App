import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import API from './api';

// Pages & Components
import EditorPage from './Pages/EditorPage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';

function App() {
    const [notes, setNotes] = useState([]);
    const [activeNoteId, setActiveNoteId] = useState(null);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    
    const location = useLocation();
    const isLoggedIn = !!localStorage.getItem('token');

    // Visibility Logic
    const isRegisterPage = location.pathname === "/register";
    const isHomePage = location.pathname === "/";
    const showHeader = !isRegisterPage && !isLoginOpen;
    // SIDEBAR: Shows only on Home page IF user is logged in
    const showSidebar = isHomePage && isLoggedIn;
    const showFooter = !isRegisterPage;

    useEffect(() => {
        if (isLoggedIn) {
            fetchNotes();
        }
    }, [isLoggedIn]);

    const fetchNotes = async () => {
        try {
            const res = await API.get('/notes');
            setNotes(res.data);
            // Default to selecting the first note from database
            if (res.data.length > 0 && !activeNoteId) setActiveNoteId(res.data[0].id);
        } catch (err) {
            console.error("Database fetch failed");
        }
    };

    const handleAddNote = async () => {
        try {
            const res = await API.post('/notes', { title: "New Document", content: "" });
            setNotes([res.data, ...notes]); // Add to top of list
            setActiveNoteId(res.data.id); // Switch to new note
        } catch (err) {
            alert("Error creating note");
        }
    };

    return (
        <div className="flex flex-col h-screen w-full bg-white overflow-hidden relative">
            {/* LOGIN OVERLAY */}
            <LoginPage isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

            {/* HEADER */}
            {showHeader && <Header onLoginClick={() => setIsLoginOpen(true)} />}

            {/* MAIN LAYOUT WRAPPER (SIDEBAR + MAIN CONTENT) */}
            <div className="flex flex-1 overflow-hidden">
                
                {/* 1. SIDEBAR ADDED HERE */}
                {showSidebar && (
                    <Sidebar 
                        notes={notes} 
                        activeNoteId={activeNoteId} 
                        setActiveNoteId={setActiveNoteId} 
                        onAddNote={handleAddNote} 
                    />
                )}
                
                {/* 2. MAIN CONTENT AREA */}
                <main className={`flex-1 flex flex-col overflow-hidden bg-slate-50 transition-all ${isLoginOpen ? 'blur-md pointer-events-none' : ''}`}>
                    <div className="flex-1 overflow-y-auto">
                        <Routes>
                            <Route path="/" element={
                                <EditorPage 
                                    notes={notes} 
                                    setNotes={setNotes} 
                                    activeNoteId={activeNoteId} 
                                />
                            } />
                            <Route path="/register" element={<RegisterPage openLogin={() => setIsLoginOpen(true)} />} />
                        </Routes>
                    </div>
                    
                    {/* FOOTER: Now stays at the bottom of the content area */}
                    {showFooter && <Footer />}
                </main>
            </div>
        </div>
    );
}

export default App;