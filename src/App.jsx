import React, { useContext, useEffect } from 'react';
import { AppProvider, AppContext } from './context/AppContext';

// Components
import Login from './components/views/Login';
import Icon from './components/ui/Icon';
import DynamicIsland from './components/ui/DynamicIsland';
import TopHeader from './components/layout/TopHeader';
import SideMenu from './components/layout/SideMenu';
import ModuleSubHeader from './components/layout/ModuleSubHeader';
import HomeDashboardContent from './components/views/HomeDashboardContent';
import ShippingContent from './components/views/ShippingContent';

// لاحظ: ضفت .jsx عشان نضمن إنه يقرا الملف الجديد صح
import { MASTER_APPS_DATA, MODULE_NAV_DATA } from './data/appData.jsx';

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
            <button 
                onClick={() => navigateTo('home_dashboard')} 
                className="px-8 py-3 rounded-full bg-accentPrimary text-white font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
            >
                <Icon name="layout-grid" size={20} />
                <span>Go to Apps Dashboard</span>
            </button>
        </div>
    );
};

// --- Apps List Content ---
const AppsListContent = () => {
    const { notify, navigateTo } = useContext(AppContext);
    // تأكد من وجود الداتا قبل الترتيب
    const sortedApps = MASTER_APPS_DATA ? [...MASTER_APPS_DATA].sort((a, b) => a.label.localeCompare(b.label)) : [];

    return (
        <div className="max-w-full animate-[fadeIn_0.5s_ease-out] py-8 pl-2">
             <div className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-4 max-w-4xl">
                <h1 className="text-3xl font-bold text-textPrimary dark:text-white">All Applications</h1>
                <p className="text-textSecondary dark:text-darkTextSecondary mt-1">Detailed list of integrated modules.</p>
            </div>
            <div className="flex flex-col gap-4 max-w-4xl">
                {sortedApps.map(app => (
                    <button 
                        key={app.id} 
                        onClick={() => { navigateTo(app.id); notify('info', app.label, 'Opening...'); }} 
                        className="group flex items-center gap-6 p-3 bg-transparent hover:bg-cardWhite dark:hover:bg-darkCard rounded-2xl transition-all duration-200 border border-transparent hover:border-gray-100 dark:hover:border-gray-800 hover:shadow-sm text-left w-full"
                    >
                        <div className="shrink-0 transform group-hover:scale-110 transition-transform duration-300 scale-75">
                            {app.icon}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-textPrimary dark:text-white">{app.label}</h3>
                            <p className="text-xs text-textSecondary dark:text-darkTextSecondary mt-0.5">{app.desc}</p>
                        </div>
                        <Icon name="chevron-right" size={20} className="text-gray-300 dark:text-gray-600 group-hover:text-accentPrimary opacity-0 group-hover:opacity-100 transition-all" />
                    </button>
                ))}
            </div>
        </div>
    );
};

// --- Dashboard Layout Component ---
const DashboardLayout = () => {
    const { sidebarOpen, activePage } = useContext(AppContext);
    
    // Safety check for activePage
    const safeActivePage = activePage || 'home';
    const basePage = safeActivePage.split('_')[0];
    const hasSubNav = MODULE_NAV_DATA[basePage];
    const isDashboard = safeActivePage === 'home_dashboard';

    return (
        <div className="flex h-screen w-full font-sans transition-colors duration-300 bg-bgBody dark:bg-darkBgBody overflow-hidden">
            {/* الخلفية المتدرجة المخفية لاستخدامها في الأيقونات */}
            <svg width="0" height="0" style={{position: 'absolute'}}>
                <defs>
                    <linearGradient id="homeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00C6FB" />
                        <stop offset="50%" stopColor="#9D50BB" />
                        <stop offset="100%" stopColor="#FF416C" />
                    </linearGradient>
                </defs>
            </svg>

            {/* تم إضافة z-50 لضمان ظهور القوائم فوق المحتوى */}
            <div className="relative z-50">
                <DynamicIsland />
                <TopHeader />
                <ModuleSubHeader />
                <SideMenu />
            </div>

            <main className={`flex-1 h-full w-full flex flex-col bg-bgBody dark:bg-darkBgBody transition-all duration-300 ease-in-out relative ${hasSubNav ? 'pt-40' : (isDashboard ? 'pt-16' : 'pt-20')} ${sidebarOpen ? 'ml-0' : 'ml-0'}`}>
                <div className="flex-1 overflow-y-auto custom-scroll px-6 pb-6 h-full z-0">
                    {safeActivePage === 'home' && <HomeContent />}
                    {safeActivePage === 'home_dashboard' && <HomeDashboardContent />}
                    {safeActivePage === 'apps' && <AppsListContent />}
                    {safeActivePage.startsWith('shipping') && <ShippingContent />}
                    
                    {/* Fallback View */}
                    {!['home', 'home_dashboard', 'apps'].includes(safeActivePage) && !safeActivePage.startsWith('shipping') && (
                        <div className="h-[70vh] flex flex-col items-center justify-center text-textSecondary dark:text-darkTextSecondary animate-fade-in">
                            <div className="bg-cardWhite dark:bg-darkCard p-8 rounded-full shadow-soft mb-6 border dark:border-gray-800">
                                {MASTER_APPS_DATA.find(a => a.id === safeActivePage) ? 
                                    MASTER_APPS_DATA.find(a => a.id === safeActivePage).icon 
                                    : <Icon name="construction" size={64} className="text-accentPrimary" />
                                }
                            </div>
                            <h2 className="text-3xl font-bold mb-2 capitalize text-textPrimary dark:text-white">{safeActivePage.replace(/_/g, ' ')}</h2>
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

    // إذا لم يسجل الدخول، اعرض شاشة الدخول
    if (!isAuthenticated) {
        return <Login />;
    }

    // إذا سجل الدخول، اعرض الداشبورد
    return <DashboardLayout />;
};

const App = () => {
    return (
        <AppProvider>
            <AppContent />
        </AppProvider>
    );
};

export default App;