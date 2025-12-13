import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Icon from '../ui/Icon';

const SideMenu = () => {
    const { sidebarOpen, toggleSidebar, activePage, navigateTo, notify } = useContext(AppContext);
    
    const menuItems = [
        { id: 'home', label: 'Home', icon: 'home' },
        { id: 'home_dashboard', label: 'Apps Dashboard', icon: 'layout-grid' },
        { id: 'dashboard', label: 'Analytics', icon: 'bar-chart-2' },
        { id: 'apps', label: 'All Apps', icon: 'box' },
        { id: 'shipping', label: 'Shipping', icon: 'truck' },
        { id: 'scm', label: 'SCM', icon: 'link' },
        { id: 'operation', label: 'Operation', icon: 'layers' },
        { id: 'accounting', label: 'Accounting', icon: 'banknote' },
        { id: 'hr', label: 'Human Resources', icon: 'users' },
        { id: 'sales', label: 'Sales', icon: 'shopping-bag' },
        { id: 'crm', label: 'CRM', icon: 'heart-handshake' },
        { id: 'website', label: 'Website', icon: 'globe' },
        { id: 'reports', label: 'Reports', icon: 'file-text' },
        { id: 'settings', label: 'System Settings', icon: 'settings' },
    ];

    return (
        <>
            <aside className={`fixed top-28 bottom-6 left-6 z-sidebar bg-cardWhite dark:bg-darkCard rounded-3xl border border-white/40 dark:border-gray-800 shadow-float sidebar-transition flex flex-col py-6 transition-transform duration-300 ease-in-out w-72 px-5 ${sidebarOpen ? 'translate-x-0' : '-translate-x-[150%]'}`}>
                <div className="w-full mb-8">
                    <button onClick={toggleSidebar} className="w-full flex items-center gap-3 px-3 py-3.5 rounded-2xl transition-all duration-300 bg-bgBody dark:bg-darkBgBody">
                        <Icon name="menu" size={20} className="text-accentPrimary" />
                        <span className="font-bold text-xs tracking-widest uppercase transition-opacity duration-300 overflow-hidden whitespace-nowrap w-auto opacity-100">Menu</span>
                        <Icon name="chevron-left" size={14} className="ml-auto text-gray-400" />
                    </button>
                </div>
                
                <div className="flex-1 overflow-y-auto custom-scroll px-1 space-y-2 w-full">
                    {menuItems.map(item => (
                        <button key={item.id} onClick={() => navigateTo(item.id)} className={`relative group flex items-center gap-4 w-full p-3.5 rounded-2xl transition-all duration-200 ${activePage === item.id ? 'bg-accentPrimary text-white shadow-lg shadow-purple-900/20' : 'text-textSecondary dark:text-darkTextSecondary hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-textPrimary dark:hover:text-white'}`}>
                            <Icon name={item.icon} size={20} className="shrink-0" />
                            <span className="whitespace-nowrap font-medium text-sm transition-opacity duration-300 overflow-hidden w-auto opacity-100">{item.label}</span>
                        </button>
                    ))}
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 w-full">
                    <button onClick={() => notify('info', 'Help', 'Connecting...')} className="flex items-center gap-3 w-full p-2 rounded-xl text-xs font-medium text-textSecondary dark:text-darkTextSecondary hover:text-accentPrimary transition-colors">
                        <Icon name="help-circle" size={20} />
                        <span className="font-mono">Support</span>
                    </button>
                </div>
            </aside>
            
            {sidebarOpen && <div className="fixed inset-0 z-[75] bg-black/20 backdrop-blur-sm" onClick={toggleSidebar}></div>}
        </>
    );
};

export default SideMenu;