import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { MODULE_NAV_DATA } from '../../data/appData';
import Icon from '../ui/Icon';

const ModuleSubHeader = () => {
    const { activePage, notify, sidebarOpen, showSubHeader } = useContext(AppContext);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [dropdownStyle, setDropdownStyle] = useState({});

    useEffect(() => {
        const handleClick = () => setActiveDropdown(null);
        if(activeDropdown !== null) window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, [activeDropdown]);

    const basePage = activePage.split('_')[0];
    const navData = MODULE_NAV_DATA[basePage];
    
    if (!navData) return null;

    const handleCategoryClick = (e, index) => {
        e.stopPropagation();
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            const rect = e.currentTarget.getBoundingClientRect();
            setDropdownStyle({ 
                top: rect.bottom + 8, 
                left: rect.left,      
                minWidth: Math.max(rect.width + 40, 200) 
            });
            setActiveDropdown(index); 
        }
    };

    return (
        <>
            <div className={`fixed h-12 bg-cardWhite/90 dark:bg-darkCard/90 backdrop-blur-md rounded-b-xl border-x border-b border-white/40 dark:border-gray-800 shadow-sm flex items-center px-4 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) z-subheader 
                ${sidebarOpen ? 'left-[288px]' : 'left-[80px]'} 
                right-4
                ${showSubHeader ? 'top-16 opacity-100 translate-y-0' : 'top-0 opacity-0 -translate-y-full pointer-events-none'}
            `}>
                <div className="flex items-center justify-between w-full h-full overflow-x-auto custom-scroll px-1 gap-2">
                    {navData.map((category, index) => (
                        <button 
                            key={index} 
                            onClick={(e) => handleCategoryClick(e, index)}
                            className={`shrink-0 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all whitespace-nowrap hover:bg-gray-100 dark:hover:bg-gray-700 ${activeDropdown === index ? 'bg-gray-100 dark:bg-gray-700 text-accentPrimary' : 'text-textSecondary dark:text-darkTextSecondary'}`}
                        >
                            {category.title}
                            <Icon name="chevron-down" size={14} className={`transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                        </button>
                    ))}
                </div>
            </div>

            {activeDropdown !== null && navData[activeDropdown] && (
                <div 
                    className="fixed bg-white dark:bg-darkCard border border-gray-100 dark:border-gray-700 rounded-xl shadow-xl p-2 dropdown-animate z-dropdown max-h-[60vh] overflow-y-auto custom-scroll"
                    style={dropdownStyle} 
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col gap-1">
                        {navData[activeDropdown].items.map((item, idx) => (
                            <button 
                                key={idx} 
                                onClick={() => {
                                    notify('info', item, 'Opening section...');
                                    setActiveDropdown(null); 
                                }}
                                className="text-left px-3 py-2 text-sm text-textPrimary dark:text-white hover:bg-bgBody dark:hover:bg-gray-800 rounded-lg transition-colors font-medium flex items-center justify-between group whitespace-nowrap"
                            >
                                {item}
                                <Icon name="arrow-right" size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-accentPrimary ml-3" />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default ModuleSubHeader;