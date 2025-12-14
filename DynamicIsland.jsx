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
        <div className="island-container">
            <div className={`dynamic-island ${active ? 'active' : ''}`}>
                <div className="island-content">
                    <div className={`w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 ${iconColor}`}>
                        <Icon name={iconName} size={16} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col justify-center leading-none pr-2">
                        <span className="text-[13px] font-bold tracking-wide text-white">{message}</span>
                        {sub && <span className="text-[10px] text-gray-400 mt-0.5 font-medium">{sub}</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicIsland;