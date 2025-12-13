import React, { useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';

const Icon = ({ name, size = 20, className = "", strokeWidth = 2, style = {} }) => {
    // التأكد من أن الاسم يبدأ بحرف كبير (PascalCase)
    // مثلاً: "shopping-cart" تصبح "ShoppingCart"
    const iconName = name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

    const LucideIcon = Icons[iconName];

    if (!LucideIcon) {
        // أيقونة احتياطية في حالة عدم العثور على الاسم
        return <Icons.HelpCircle size={size} className={className} strokeWidth={strokeWidth} style={style} />;
    }

    return <LucideIcon size={size} className={className} strokeWidth={strokeWidth} style={style} />;
};

export default Icon;