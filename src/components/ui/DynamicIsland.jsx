import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Icon from './Icon';

const DynamicIsland = () => {
    const { islandState } = useContext(AppContext);
    const { active, type, message, sub } = islandState;

    let iconName = "check-circle-2";
    let iconColor = "text-green-400";

    if (type === 'error') { iconName = "alert-circle"; iconColor = "text-red-500"; }
    if (type === 'info') { iconName = "info"; iconColor = "text-blue-400"; }
    if (type === 'loading') { iconName = "loader-2"; iconColor = "text-yellow-400 animate-spin"; }

    return (
        <div className="fixed top-3 left-0 right-0 flex justify-center z-[9999] pointer-events-none">
            <div className={`bg-black/95 backdrop-blur-xl text-white rounded-[40px] flex items-center justify-center overflow-hidden shadow-2xl transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${active ? 'w-auto min-w-[200px] h-11 px-4 opacity-100 translate-y-0' : 'w-0 h-0 opacity-0 translate-y-[-10px]'}`}>
                <div className={`flex items-center gap-3 whitespace-nowrap transition-all duration-300 delay-100 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className={`w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 ${iconColor}`}>
                        <Icon name={iconName} size={16} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col justify-center leading-none pr-1">
                        <span className="text-[13px] font-bold tracking-wide">{message}</span>
                        {sub && <span className="text-[10px] text-gray-400 mt-0.5 font-medium">{sub}</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicIsland;