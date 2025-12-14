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
            <aside className={`fixed top-24 bottom-6 left-6 z-sidebar bg-cardWhite dark:bg-darkCard rounded-3xl border border-white/40 dark:border-gray-800 shadow-float backdrop-blur-xl flex flex-col py-6 transition-transform duration-300 ease-in-out w-64 px-4 ${sidebarOpen ? 'translate-x-0' : '-translate-x-[200%] md:translate-x-0'}`}>
                <div className="w-full mb-6">
                    <button onClick={toggleSidebar} className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 bg-bgBody dark:bg-darkBgBody hover:bg-gray-100 dark:hover:bg-gray-800 group">
                        <Icon name="menu" size={20} className="text-accentPrimary group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-xs tracking-widest uppercase text-textSecondary">Menu</span>
                        <Icon name="chevron-left" size={16} className="ml-auto text-gray-400 group-hover:-translate-x-1 transition-transform" />
                    </button>
                </div>
                
                <div className="flex-1 overflow-y-auto custom-scroll space-y-1.5 w-full pr-1">
                    {menuItems.map(item => (
                        <button key={item.id} onClick={() => navigateTo(item.id)} className={`relative group flex items-center gap-4 w-full p-3 rounded-2xl transition-all duration-200 border border-transparent ${activePage === item.id ? 'bg-accentPrimary text-white shadow-lg shadow-blue-500/30' : 'text-textSecondary dark:text-darkTextSecondary hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm hover:text-textPrimary dark:hover:text-white'}`}>
                            <Icon name={item.icon} size={20} className={activePage === item.id ? 'animate-pulse' : ''} />
                            <span className="font-medium text-sm">{item.label}</span>
                        </button>
                    ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 w-full">
                    <button onClick={() => notify('info', 'Help', 'Connecting...')} className="flex items-center justify-center gap-2 w-full p-3 rounded-xl text-xs font-bold text-textSecondary hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-accentPrimary transition-all">
                        <Icon name="help-circle" size={18} />
                        <span>Support Center</span>
                    </button>
                </div>
            </aside>
            
            {sidebarOpen && <div className="fixed inset-0 z-[75] bg-black/20 backdrop-blur-sm md:hidden" onClick={toggleSidebar}></div>}
        </>
    );
};

export default SideMenu;