import React, { useEffect, useRef } from 'react';

const Icon = ({ name, size = 20, className = "", strokeWidth = 2, style={} }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (window.lucide && window.lucide.icons && containerRef.current) {
            const iconName = name.replace(/(^\w|-\w)/g, (g) => g.replace('-','').toUpperCase());
            const iconData = window.lucide.icons[iconName];
            
            if (iconData) {
                const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="${className}">${iconData.map(child => `<${child[0]} ${Object.entries(child[1]).map(([k,v]) => `${k}="${v}"`).join(' ')} />`).join('')}</svg>`;
                containerRef.current.innerHTML = svg;
                const svgEl = containerRef.current.querySelector('svg');
                if(svgEl && style) Object.assign(svgEl.style, style);
            }
        }
    }, [name, size, className, strokeWidth, style]);

    return <span ref={containerRef} className="inline-flex items-center justify-center"></span>;
};

export default Icon;