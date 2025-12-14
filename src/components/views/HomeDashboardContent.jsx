import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { MASTER_APPS_DATA } from '../../data/appData';

const HomeDashboardContent = () => {
    const { navigateTo, notify } = useContext(AppContext);
    
    return (
        <div className="h-full flex flex-col justify-center animate-[fadeIn_0.5s_ease-out] py-10">
            <div className="max-w-7xl mx-auto w-full px-4">
                <div className="mb-12 text-center"></div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-y-10 gap-x-4 justify-items-center">
                    {MASTER_APPS_DATA.map(app => (
                        <button key={app.id} onClick={() => { navigateTo(app.id); notify('info', app.label, 'Opening Module...'); }} className="group flex flex-col items-center gap-3 w-full max-w-[100px] transition-transform duration-300 hover:-translate-y-2 active:scale-95">
                            <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                {React.cloneElement(app.icon, { width: 48, height: 48, className: "md:w-[56px] md:h-[56px]" })} 
                            </div>
                            <span className="font-medium text-[10px] md:text-xs text-textPrimary dark:text-white text-center group-hover:text-accentPrimary transition-colors line-clamp-2">
                                {app.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeDashboardContent;