import React, { useContext } from 'react';
import { AppProvider, AppContext } from './context/AppContext';

// Components
import Login from './components/views/Login';
import DynamicIsland from './components/ui/DynamicIsland';
import TopHeader from './components/layout/TopHeader';
import SideMenu from './components/layout/SideMenu';
import ModuleSubHeader from './components/layout/ModuleSubHeader';
import HomeDashboardContent from './components/views/HomeDashboardContent';
import ShippingContent from './components/views/ShippingContent';
import Icon from './components/ui/Icon';
import { MASTER_APPS_DATA, MODULE_NAV_DATA } from './data/appData';

// --- Home Content (Welcome Screen) ---
const HomeContent = () => {
    const { navigateTo } = useContext(AppContext);
    return (
        <div className="h-[70vh] flex flex-col items-center justify-center text-center animate-[fadeIn_0.5s_ease-out]">
            <div className="w-24 h-24 rounded-3xl bg-accentPrimary flex items-center justify-center text-white shadow-glow mb-6">
                 <Icon name="hexagon" size={48} fill={true} />
            </div>
            <h1 className="text-5xl font-bold text-textPrimary dark:text-white mb-4">Welcome to Systemize</h1>
            <p className="text-xl text-textSecondary dark:text-darkTextSecondary mb-10 max-w-lg">
                Your centralized enterprise operating system.
            </p>
            <button onClick={() => navigateTo('home_dashboard')} className="px-8 py-3 rounded-full bg-accentPrimary text-white font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
                <Icon name="layout-grid" size={20} /><span>Go to Apps Dashboard</span>
            </button>
        </div>
    );
};

// --- Dashboard Layout Component ---
const DashboardLayout = () => {
    const { sidebarOpen, activePage } = useContext(AppContext);
    const basePage = activePage.split('_')[0];
    const hasSubNav = MODULE_NAV_DATA[basePage];
    const isDashboard = activePage === 'home_dashboard';

    return (
        <div className="flex h-screen w-full font-sans transition-colors duration-300 bg-bgBody dark:bg-darkBgBody">
            <svg width="0" height="0" style={{position: 'absolute'}}>
                <defs>
                    <linearGradient id="homeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00C6FB" />
                        <stop offset="50%" stopColor="#9D50BB" />
                        <stop offset="100%" stopColor="#FF416C" />
                    </linearGradient>
                </defs>
            </svg>

            <DynamicIsland />
            <TopHeader />
            <ModuleSubHeader />
            <SideMenu />

            <main className={`flex-1 h-full w-full flex flex-col bg-bgBody dark:bg-darkBgBody transition-all duration-300 ease-in-out relative ${hasSubNav ? 'pt-40' : (isDashboard ? 'pt-20' : 'pt-20')} ${sidebarOpen ? 'ml-0' : 'ml-0'}`}>
                <div className="flex-1 overflow-y-auto custom-scroll px-6 pb-6 h-full">
                    {activePage === 'home' && <HomeContent />}
                    {activePage === 'home_dashboard' && <HomeDashboardContent />}
                    {activePage.startsWith('shipping') && <ShippingContent />}
                    
                    {/* Fallback for under construction */}
                    {!['home', 'home_dashboard'].includes(activePage) && !activePage.startsWith('shipping') && (
                        <div className="h-[70vh] flex flex-col items-center justify-center text-textSecondary dark:text-darkTextSecondary animate-fade-in">
                            <div className="bg-cardWhite dark:bg-darkCard p-8 rounded-full shadow-soft mb-6 border dark:border-gray-800">
                                {MASTER_APPS_DATA.find(a => a.id === activePage) ? MASTER_APPS_DATA.find(a => a.id === activePage).icon : <Icon name="construction" size={64} className="text-accentPrimary" />}
                            </div>
                            <h2 className="text-3xl font-bold mb-2 capitalize text-textPrimary dark:text-white">{activePage.replace(/_/g, ' ')}</h2>
                            <p className="text-lg">Module under construction</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

// --- Main App Switcher ---
const AppContent = () => {
    const { isAuthenticated } = useContext(AppContext);
    return !isAuthenticated ? <Login /> : <DashboardLayout />;
};

const App = () => {
    return (
        <AppProvider>
            <AppContent />
        </AppProvider>
    );
};

export default App;