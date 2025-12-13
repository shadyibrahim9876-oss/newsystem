import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { MODULE_NAV_DATA } from '../../data/appData';
import Icon from '../ui/Icon';

const TopHeader = () => { 
    const { 
        darkMode, setDarkMode, notify, navigateTo, toggleSidebar,
        toggleSubHeader, showSubHeader, activePage, userStatus, setUserStatus,
        activeCompany, setActiveCompany, logout 
    } = useContext(AppContext); 
    
    const [activeMenu, setActiveMenu] = useState(null);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [menuView, setMenuView] = useState('main'); 

    const basePage = activePage.split('_')[0]; 
    const hasSubNav = MODULE_NAV_DATA[basePage];
    const isDashboard = activePage === 'home_dashboard';

    const handleMenuToggle = (menuName) => {
        if (activeMenu === menuName) {
            setActiveMenu(null);
        } else {
            setActiveMenu(menuName);
            if (menuName === 'profile') setMenuView('main');
        }
    };

    const closeAllMenus = () => setActiveMenu(null);

    const handleStatusChange = (status) => { 
        setUserStatus(status); 
        notify('success', 'Status Updated', `You are now ${status}`); 
        setMenuView('main'); 
    }; 

    const handleCompanyChange = (company) => { 
        setActiveCompany(company); 
        notify('success', 'Company Switched', `Active: ${company}`); 
        setMenuView('main'); 
    };

    const statusColors = { online: 'bg-green-500', away: 'bg-yellow-500', dnd: 'bg-red-500', offline: 'bg-gray-400' }; 
    const borderColors = { online: 'border-green-500', away: 'border-yellow-500', dnd: 'border-red-500', offline: 'border-gray-400' };
    
    const handleRefresh = () => { 
        if (isRefreshing) return; 
        setIsRefreshing(true); 
        notify('loading', 'System', 'Syncing Data...'); 
        setTimeout(() => { 
            setIsRefreshing(false); 
            notify('success', 'System', 'Data Updated'); 
        }, 1500); 
    }; 

    const ProfileDropdownContent = () => {
        if (menuView === 'main') {
            return (
                <div className="animate-[slideDown_0.2s_ease-out]">
                    <div className="p-3 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-white/5 rounded-t-xl">
                        <p className="font-bold text-textPrimary dark:text-white text-base">Ahmed Admin</p>
                        <div onClick={() => setMenuView('companies')} className="flex items-center gap-2 mt-1 cursor-pointer group hover:bg-black/5 dark:hover:bg-white/10 p-1 -ml-1 rounded-md transition-colors">
                            <Icon name="building-2" size={14} className="text-gray-400" />
                            <span className="text-xs font-medium text-textSecondary dark:text-darkTextSecondary group-hover:text-accentPrimary">{activeCompany}</span>
                            <Icon name="chevron-right" size={12} className="text-gray-400 ml-auto" />
                        </div>
                    </div>
                    <div className="p-2 space-y-1">
                        <button onClick={() => setMenuView('status')} className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm text-textPrimary dark:text-white">
                            <div className="flex items-center gap-2">
                                <div className={`w-2.5 h-2.5 rounded-full ${statusColors[userStatus]}`}></div>
                                <span className="capitalize">{userStatus === 'dnd' ? 'Do Not Disturb' : userStatus}</span>
                            </div>
                            <Icon name="chevron-right" size={14} className="text-gray-400" />
                        </button>
                        <div className="h-px bg-gray-100 dark:bg-gray-700 my-1"></div>
                        <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-sm text-red-500">
                            <Icon name="log-out" size={16} />
                            Log out
                        </button>
                    </div>
                </div>
            );
        }
        if (menuView === 'status') {
            return (
                <div className="animate-[slideDown_0.2s_ease-out]">
                    <div className="p-2 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2">
                        <button onClick={() => setMenuView('main')} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                            <Icon name="arrow-left" size={16} className="text-textPrimary dark:text-white" />
                        </button>
                        <span className="text-sm font-bold text-textPrimary dark:text-white">Set Status</span>
                    </div>
                    <div className="p-2 space-y-1">
                        {['online', 'away', 'dnd', 'offline'].map(status => (
                            <button key={status} onClick={() => handleStatusChange(status)} className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm text-textPrimary dark:text-white capitalize">
                                <div className="flex items-center gap-3">
                                    <div className={`w-3 h-3 rounded-full ${statusColors[status]}`}></div>
                                    <span>{status === 'dnd' ? 'Do Not Disturb' : status}</span>
                                </div>
                                {userStatus === status && <Icon name="check" size={16} className="text-accentPrimary" />}
                            </button>
                        ))}
                    </div>
                </div>
            );
        }
        if (menuView === 'companies') {
            return (
                <div className="animate-[slideDown_0.2s_ease-out]">
                    <div className="p-2 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2">
                        <button onClick={() => setMenuView('main')} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                            <Icon name="arrow-left" size={16} className="text-textPrimary dark:text-white" />
                        </button>
                        <span className="text-sm font-bold text-textPrimary dark:text-white">Switch Company</span>
                    </div>
                    <div className="p-2 space-y-1">
                        {['Systemize Inc.', 'My US Company', 'Global Branch'].map(company => (
                            <button key={company} onClick={() => handleCompanyChange(company)} className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm text-textPrimary dark:text-white">
                                <span className="flex items-center gap-2">
                                    <Icon name="building" size={16} className="text-gray-400" />
                                    {company}
                                </span>
                                {activeCompany === company && <Icon name="check" size={16} className="text-accentPrimary" />}
                            </button>
                        ))}
                    </div>
                </div>
            );
        }
    };

    if (isDashboard) {
        return (
            <>
            <header className="fixed top-0 left-0 right-0 h-20 z-header flex items-center justify-between px-6 transition-all duration-300">
                <div className="flex items-center">
                    <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-white/10 text-textPrimary dark:text-white transition-colors">
                        <Icon name="menu" size={24} />
                    </button>
                </div>
                <div className="flex items-center gap-4">
                    <button className={`text-textPrimary dark:text-white hover:opacity-80 relative flex items-center gap-1 ${activeMenu === 'ai' ? 'opacity-100 scale-105' : ''}`} title="AI Assistant" onClick={() => handleMenuToggle('ai')}>
                        <Icon name="sparkles" size={18} className="text-purple-500" />
                        <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent hidden sm:block">AI</span>
                    </button>
                    <button className={`text-textPrimary dark:text-white hover:opacity-80 relative ${activeMenu === 'messages' ? 'text-accentPrimary' : ''}`} onClick={() => handleMenuToggle('messages')}>
                        <Icon name="message-square" size={20} />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">7</span>
                    </button>
                    <button className={`text-textPrimary dark:text-white hover:opacity-80 relative ${activeMenu === 'activity' ? 'text-accentPrimary' : ''}`} onClick={() => handleMenuToggle('activity')}>
                        <Icon name="activity" size={20} />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">3</span>
                    </button>
                    <div className="relative">
                        <button onClick={() => handleMenuToggle('settings')} className={`text-textPrimary dark:text-white hover:opacity-80 flex items-center justify-center ${activeMenu === 'settings' ? 'rotate-90 transition-transform' : ''}`}>
                            <Icon name="wrench" size={20} />
                        </button>
                        {activeMenu === 'settings' && (
                            <div className="absolute top-12 right-0 w-60 bg-white dark:bg-darkCard rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-1 dropdown-animate z-popover">
                                <div className="p-2 border-b border-gray-100 dark:border-gray-700 mb-1">
                                    <span className="text-xs font-bold text-gray-400 uppercase">System Settings</span>
                                </div>
                                <div className="space-y-0.5">
                                    <button className="w-full text-left px-3 py-2 text-sm text-textPrimary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg flex gap-3 items-center"><Icon name="sliders" size={16} className="text-gray-500"/> General</button>
                                    <button className="w-full text-left px-3 py-2 text-sm text-textPrimary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg flex gap-3 items-center"><Icon name="users" size={16} className="text-gray-500"/> Users & Companies</button>
                                    <button className="w-full text-left px-3 py-2 text-sm text-textPrimary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg flex gap-3 items-center"><Icon name="shield" size={16} className="text-gray-500"/> Security</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <button onClick={() => { setDarkMode(!darkMode); notify('success', 'Theme', 'Updated'); }} className="text-textPrimary dark:text-white hover:opacity-80" title="Toggle Theme">
                        <Icon name={darkMode ? "moon" : "sun"} size={20} />
                    </button>
                    <div className="flex items-center gap-2 cursor-pointer pl-2 border-l border-gray-300 dark:border-gray-700 relative">
                        <div onClick={() => handleMenuToggle('profile')} className="flex items-center gap-2">
                            <div className={`p-[2px] rounded-full border-2 ${borderColors[userStatus]} transition-colors relative`}>
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80" className="w-8 h-8 rounded-full object-cover" />
                                <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${statusColors[userStatus]}`}></div>
                            </div>
                        </div>
                        {activeMenu === 'profile' && (
                            <div className="absolute top-14 right-0 w-72 bg-white dark:bg-darkCard rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden z-popover">
                                <ProfileDropdownContent />
                            </div>
                        )}
                    </div>
                </div>
            </header>
            {activeMenu && <div className="fixed inset-0 z-[90]" onClick={closeAllMenus}></div>}
            </>
        );
    }

    return (
        <> 
        <header className="fixed top-0 left-0 right-0 h-16 bg-cardWhite/90 dark:bg-darkCard/90 backdrop-blur-md z-header flex items-center justify-between shadow-float border-b border-white/40 dark:border-white/5 transition-all duration-300">
            <div className="flex items-center gap-4 pl-3">
                <div className="flex items-center gap-2 mr-1">
                    <button aria-label="Toggle sidebar" onClick={() => { toggleSidebar(); notify('info', 'Sidebar', 'Toggled'); }} className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                        <Icon name="menu" size={16} />
                    </button>
                    <button onClick={handleRefresh} className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-textPrimary dark:text-white group">
                        <Icon name="rotate-cw" size={15} className={`transition-all duration-700 ${isRefreshing ? 'animate-spin text-accentPrimary' : 'group-hover:rotate-180'}`} />
                    </button>
                    {hasSubNav && (
                        <button aria-label="Toggle Subheader" onClick={toggleSubHeader} className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${showSubHeader ? 'bg-accentPrimary text-white shadow-glow' : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-textSecondary'}`}>
                            <Icon name="layout-list" size={16} />
                        </button>
                    )}
                </div>
            </div>
            <div className="flex items-center gap-2 pr-4">
                <button onClick={() => { navigateTo('home'); notify('success', 'Home', 'Navigated'); }} className="p-2 text-textSecondary dark:text-darkTextSecondary hover:text-accentPrimary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all" title="Home">
                    <Icon name="home" size={22} strokeWidth={2.5} />
                </button>
                <button onClick={() => { navigateTo('home_dashboard'); notify('success', 'Dashboard', 'Opening...'); }} className="p-2 text-textSecondary dark:text-darkTextSecondary hover:text-accentPrimary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all" title="Apps">
                    <Icon name="layout-grid" size={22} strokeWidth={2.5} />
                </button>
                <button onClick={() => { notify('loading', 'System', 'New Tab...'); setTimeout(() => window.open(window.location.href, '_blank'), 500); }} className="p-2 text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all" title="New Tab">
                    <Icon name="plus" size={26} strokeWidth={3} />
                </button>
                <button onClick={() => { setDarkMode(!darkMode); notify('success', 'Theme', 'Updated'); }} className="p-2 text-textSecondary dark:text-darkTextSecondary hover:text-yellow-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all" title="Toggle Theme">
                    <Icon name={darkMode ? "moon" : "sun"} size={22} />
                </button>
                <div className="h-6 w-[1px] bg-gray-300 dark:bg-gray-700 mx-2"></div>
                <div className="relative">
                    <div onClick={() => handleMenuToggle('profile')} className={`p-[2px] rounded-full border-2 ${borderColors[userStatus]} cursor-pointer hover:scale-105 transition-transform relative`}>
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80" className="w-9 h-9 rounded-full object-cover" />
                        <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${statusColors[userStatus]}`}></div>
                    </div>
                    {activeMenu === 'profile' && (
                        <div className="absolute top-16 right-0 w-72 bg-white dark:bg-darkCard rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-2 dropdown-animate z-popover">
                            <ProfileDropdownContent />
                        </div>
                    )}
                </div>
            </div>
        </header>
        {activeMenu && <div className="fixed inset-0 z-[105]" onClick={closeAllMenus}></div>}
        </>
    );
};

export default TopHeader;