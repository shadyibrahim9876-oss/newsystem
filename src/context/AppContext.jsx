import React, { createContext, useState, useEffect, useRef, useCallback } from 'react';
import { MODULE_NAV_DATA } from '../data/appData';

// دالة الصوت (Sound Utility)
const playSound = (type) => {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const freq = type === 'error' ? 150 : type === 'success' ? 600 : 400;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq/2, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
    } catch (e) {}
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // --- Auth State (حالة تسجيل الدخول) ---
    // هنا الحل لمشكلة اللوجن: بنبدأ بـ false، ولما اليوزر يدخل بنحولها true
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    // --- Dashboard State ---
    const [darkMode, setDarkMode] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [islandState, setIslandState] = useState({ active: false, type: 'info', message: '', sub: '' });
    const [activePage, setPage] = useState('home_dashboard');
    const [userStatus, setUserStatus] = useState('online');
    const [activeCompany, setActiveCompany] = useState('Systemize Inc.');
    const [showSubHeader, setShowSubHeader] = useState(true);
    
    // --- Navigation History ---
    const [history, setHistory] = useState(['home_dashboard']);
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    // Login Logic
    const login = (username) => {
        setIsAuthenticated(true);
        setCurrentUser({ name: username, role: 'Admin' });
        // ممكن نحفظ الحالة في LocalStorage عشان لو عمل ريفريش مايخرجش
        localStorage.setItem('isLoggedIn', 'true');
    };

    // Logout Logic
    const logout = () => {
        setIsAuthenticated(false);
        setCurrentUser(null);
        localStorage.removeItem('isLoggedIn');
        setPage('home_dashboard');
        setHistory(['home_dashboard']);
        setCurrentIndex(0);
    };

    // Check Login on Mount
    useEffect(() => {
        if(localStorage.getItem('isLoggedIn') === 'true') {
            setIsAuthenticated(true);
            setCurrentUser({ name: 'Shady', role: 'Admin' });
        }
    }, []);

    // Navigation Logic
    const navigateTo = (pageId) => {
        if (pageId === activePage) return;
        const newHistory = history.slice(0, currentIndex + 1);
        newHistory.push(pageId);
        setHistory(newHistory);
        setCurrentIndex(newHistory.length - 1);
        setPage(pageId);
        
        // إظهار الساب هيدر تلقائياً مع الصفحات التي تدعمه
        if (MODULE_NAV_DATA[pageId.split('_')[0]]) setShowSubHeader(true);
    };

    const goBack = () => { if (currentIndex > 0) setCurrentIndex(prev => prev - 1); };
    const goForward = () => { if (currentIndex < history.length - 1) setCurrentIndex(prev => prev + 1); };
    const toggleSidebar = () => setSidebarOpen(prev => !prev);
    const toggleSubHeader = () => setShowSubHeader(prev => !prev);

    const notify = useCallback((type, message, sub = "") => {
        playSound(type);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIslandState({ active: true, type, message, sub });
        timeoutRef.current = setTimeout(() => setIslandState(prev => ({ ...prev, active: false })), 3000);
    }, []);

    // Dark Mode Effect
    useEffect(() => {
        if (darkMode) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    }, [darkMode]);

    // History Effect
    useEffect(() => {
        setPage(history[currentIndex]);
    }, [currentIndex, history]);

    return (
        <AppContext.Provider value={{ 
            isAuthenticated, login, logout, currentUser,
            darkMode, setDarkMode, sidebarOpen, toggleSidebar, activePage, navigateTo, 
            goBack, goForward, notify, islandState, canGoBack: currentIndex > 0, 
            canGoForward: currentIndex < history.length - 1, showSubHeader, toggleSubHeader, 
            setPage, userStatus, setUserStatus, activeCompany, setActiveCompany 
        }}>
            {children}
        </AppContext.Provider>
    );
};