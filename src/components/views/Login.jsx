import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Icon from '../ui/Icon';

const Login = () => {
    const { login } = useContext(AppContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [view, setView] = useState('login'); // login, signup, help
    const [shake, setShake] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e?.preventDefault();
        // محاكاة التحقق (نفس اللوجيك القديم)
        if (username.toLowerCase() === 'shady' && password === '123') {
            setLoading(true);
            setTimeout(() => {
                login(username);
            }, 1000);
        } else {
            setError('Incorrect username or password');
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white text-[#1d1d1f] font-sans overflow-hidden relative">
            
            {/* Logo */}
            <div className={`transition-all duration-500 mb-10 ${view !== 'login' ? 'opacity-0 translate-y-[-20px]' : 'opacity-100'}`}>
                <h1 className="text-4xl font-bold tracking-tight">Systemize</h1>
            </div>

            {/* Login Container */}
            <div className={`w-full max-w-[400px] px-6 transition-all duration-500 ${shake ? 'animate-shake' : ''}`}>
                
                {view === 'login' && (
                    <div className="animate-fade-in">
                        <form onSubmit={handleLogin} className="space-y-5">
                            <div className="relative group">
                                <input type="text" value={username} onChange={(e) => { setUsername(e.target.value); setError(''); }} className="w-full px-4 pt-5 pb-2 h-14 border border-[#d2d2d7] rounded-xl text-lg outline-none focus:border-[#0071e3] transition-colors peer bg-transparent" placeholder=" " />
                                <label className="absolute left-4 top-4 text-[#86868b] text-lg pointer-events-none transition-all peer-focus:text-xs peer-focus:top-2 peer-focus:text-[#0071e3] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2">Username</label>
                            </div>

                            <div className="relative group">
                                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value); setError(''); }} className="w-full px-4 pt-5 pb-2 h-14 border border-[#d2d2d7] rounded-xl text-lg outline-none focus:border-[#0071e3] transition-colors peer bg-transparent" placeholder=" " />
                                <label className="absolute left-4 top-4 text-[#86868b] text-lg pointer-events-none transition-all peer-focus:text-xs peer-focus:top-2 peer-focus:text-[#0071e3] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2">Password</label>
                            </div>

                            {error && <div className="text-[#ff3b30] text-sm text-center font-medium animate-pulse">{error}</div>}

                            <div className="flex items-center justify-center gap-4 pt-2">
                                <button type="button" className="px-6 py-3 rounded-full border border-[#d2d2d7] text-sm font-medium hover:border-black transition-colors">Remember</button>
                                <button type="submit" disabled={loading} className="px-10 py-3 rounded-full bg-black text-white text-base font-semibold hover:bg-[#333] transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
                                    {loading ? 'Signing in...' : 'Log In'}
                                </button>
                            </div>
                        </form>

                        <div className="mt-10 flex justify-center gap-6">
                            <button onClick={() => setView('signup')} className="px-4 py-2 bg-[#f5f5f7] rounded-full text-[13px] font-medium text-[#0071e3] hover:bg-[#e8e8ed] transition-colors">New employees sign in</button>
                            <button onClick={() => setView('help')} className="px-4 py-2 bg-[#f5f5f7] rounded-full text-[13px] font-medium text-[#0071e3] hover:bg-[#e8e8ed] transition-colors">Connect for help</button>
                        </div>
                    </div>
                )}

                {/* Signup & Help Views (Simple Placeholders) */}
                {view !== 'login' && (
                    <div className="animate-fade-in text-center">
                        <h2 className="text-xl font-semibold mb-6">{view === 'signup' ? 'New Employee Setup' : 'Support Center'}</h2>
                        <p className="text-[#86868b] mb-8 text-sm">{view === 'signup' ? 'Contact HR for credentials.' : 'Our team is here to help.'}</p>
                        <button onClick={() => setView('login')} className="px-8 py-3 rounded-full bg-[#f5f5f7] text-[#1d1d1f] font-medium hover:bg-[#e8e8ed] transition-colors">Back to Login</button>
                    </div>
                )}
            </div>

            <footer className="absolute bottom-8 w-full text-center">
                <div className="text-[11px] text-[#86868b]">© 2025 Systemize Inc.</div>
            </footer>
        </div>
    );
};

export default Login;