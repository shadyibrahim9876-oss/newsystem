import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import '../../styles/Login.css';

const Login = () => {
    const { login } = useContext(AppContext);
    
    // States
    const [view, setView] = useState('loginView'); // loginView, signupView, helpView, forgotView
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [shake, setShake] = useState(false);
    const [overlayMessage, setOverlayMessage] = useState({ show: false, text: '', visible: false });
    const [isRemembered, setIsRemembered] = useState(false);

    // Constants
    const VALID_USER = "shady";
    const VALID_PASS = "123";

    // Helper to Switch Views
    const switchView = (newView) => {
        setError(false);
        setView(newView);
    };

    const handleLogin = () => {
        if (!username.trim() || !password) {
            triggerOverlay("Please make sure you have entered the correct username and password", true);
            return;
        }

        if (username === VALID_USER && password === VALID_PASS) {
            // Success Sequence
            setOverlayMessage({ show: true, text: `Welcome ${username}`, visible: false });
            
            // Animation Sequence
            setTimeout(() => setOverlayMessage(prev => ({ ...prev, visible: true })), 50);
            
            setTimeout(() => {
                setOverlayMessage(prev => ({ ...prev, visible: false }));
                setTimeout(() => {
                    setOverlayMessage({ show: true, text: 'Always be prepared for a great day', visible: true });
                    // Final Redirect
                    setTimeout(() => {
                        login(username); // Call Context Login
                    }, 2000);
                }, 500);
            }, 2000);

        } else {
            // Failure Sequence
            setShake(true);
            setError(true);
            setPassword('');
            setTimeout(() => setShake(false), 500);
        }
    };

    const triggerOverlay = (text, isError = false) => {
        setOverlayMessage({ show: true, text: text, visible: false });
        setTimeout(() => setOverlayMessage(prev => ({ ...prev, visible: true })), 50);
        
        setTimeout(() => {
            setOverlayMessage(prev => ({ ...prev, visible: false }));
            setTimeout(() => {
                if(isError) {
                   setOverlayMessage({ show: false, text: '', visible: false }); 
                }
            }, 500);
        }, 3000);
    };

    return (
        <div className="login-wrapper">
            
            <div className={`container ${shake ? 'shake-anim' : ''}`} style={{opacity: overlayMessage.show ? 0 : 1}}>
                <div className="logo">Systemize</div>

                {/* --- Login View --- */}
                {view === 'loginView' && (
                    <div className="view-section active">
                        <div className="form-group">
                            <input 
                                type="text" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder=" " 
                                autoComplete="off"
                            />
                            <label className="floating-label">Username</label>
                        </div>

                        <div className="form-group">
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                                placeholder=" " 
                            />
                            <label className="floating-label">Password</label>
                        </div>

                        <div className="privacy-icon-container">
                             <svg className="privacy-icon-svg" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/> 
                            </svg>
                        </div>

                        <div className="disclaimer-text">
                            Your Systemize Account information is used to allow you to sign in securely and access your global enterprise data.
                        </div>
                        
                        <div className="error-msg" style={{opacity: error ? 1 : 0}}>Incorrect username or password</div>

                        <div className="action-row">
                            <button 
                                className={`btn-secondary ${isRemembered ? 'checked' : ''}`} 
                                onClick={() => setIsRemembered(!isRemembered)}
                            >
                                Remember
                            </button>
                            <button className="btn-primary" onClick={handleLogin}>Log In</button>
                            <button className="btn-icon" onClick={() => {setUsername(''); setPassword(''); setError(false);}}>✕</button>
                        </div>

                        <div className="bottom-links">
                            <span className="pill-link" onClick={() => switchView('signupView')}>New employees sign in</span>
                            <span className="pill-link" onClick={() => switchView('helpView')}>Connect for help</span>
                        </div>
                    </div>
                )}

                {/* --- Signup View --- */}
                {view === 'signupView' && (
                    <div className="view-section active">
                        <h2 style={{fontWeight: 600, fontSize: '21px', marginBottom: '30px'}}>New Employee Setup</h2>
                        <div className="form-group">
                            <input type="text" placeholder=" " /><label className="floating-label">Employee ID</label>
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder=" " /><label className="floating-label">Corporate Email</label>
                        </div>
                        <div className="action-row">
                            <button className="btn-secondary" onClick={() => switchView('loginView')}>Back</button>
                            <button className="btn-primary">Verify</button>
                        </div>
                        <div className="bottom-links">
                            <span className="pill-link" onClick={() => switchView('forgotView')}>Forgot Password?</span>
                        </div>
                    </div>
                )}

                {/* --- Help View --- */}
                {view === 'helpView' && (
                    <div className="view-section active">
                        <h2 style={{fontWeight: 600, fontSize: '21px', marginBottom: '30px'}}>Support Center</h2>
                        <p style={{color: 'var(--text-secondary)', marginBottom: '30px'}}>Need assistance? Our team is here to help.</p>
                        <div className="action-row">
                            <button className="btn-secondary" onClick={() => switchView('loginView')}>Back</button>
                            <button className="btn-primary" onClick={() => window.open('https://systemize.com', '_blank')}>Open Ticket</button>
                        </div>
                    </div>
                )}

                {/* --- Forgot View --- */}
                {view === 'forgotView' && (
                    <div className="view-section active">
                        <h2 style={{fontWeight: 600, fontSize: '21px', marginBottom: '30px'}}>Reset Password</h2>
                        <div className="form-group">
                            <input type="email" placeholder=" " /><label className="floating-label">Enter your email</label>
                        </div>
                        <div className="action-row">
                            <button className="btn-secondary" onClick={() => switchView('signupView')}>Back</button>
                            <button className="btn-primary">Send Link</button>
                        </div>
                    </div>
                )}

            </div>

            {/* Message Overlay */}
            <div className="message-overlay" style={{display: overlayMessage.show ? 'flex' : 'none'}}>
                <div className={`message-text ${overlayMessage.visible ? 'visible' : ''}`}>
                    {overlayMessage.text}
                </div>
            </div>

            {/* Footer */}
            <footer className="footer" style={{opacity: overlayMessage.show ? 0 : 1}}>
                 <div className="footer-legal">
                    <div>&copy; 2025 Systemize Inc.</div>
                    <span>Egypt</span>
                </div>
            </footer>
        </div>
    );
};

export default Login;