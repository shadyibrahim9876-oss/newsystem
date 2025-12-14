import React from 'react';

const iconSize = 56;
const dropShadow = "filter drop-shadow(0 4px 6px rgba(0,0,0,0.1)) transition-filter duration-300";

export const ShippingIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" className={dropShadow}>
        <rect x="4" y="10" width="40" height="28" rx="3" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2"/>
        <path d="M12 12V36" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 12V36" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 12V36" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
        <path d="M36 12V36" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
        <rect x="18" y="20" width="12" height="8" rx="1" fill="#1E3A8A" fillOpacity="0.3"/>
        <path d="M24 10V38" stroke="#1E3A8A" strokeWidth="1" strokeDasharray="2 2"/>
    </svg>
);

export const SCMIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" className={dropShadow}>
       <rect x="4" y="18" width="16" height="12" rx="6" stroke="#F59E0B" strokeWidth="3.5" />
       <rect x="28" y="18" width="16" height="12" rx="6" stroke="#D97706" strokeWidth="3.5" />
       <rect x="16" y="18" width="16" height="12" rx="6" stroke="#FBBF24" strokeWidth="3.5" fill="none"/>
       <circle cx="12" cy="24" r="2" fill="#F59E0B"/>
       <circle cx="24" cy="24" r="2" fill="#FBBF24"/>
       <circle cx="36" cy="24" r="2" fill="#D97706"/>
    </svg>
);

export const OperationsIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" className={dropShadow}>
        <circle cx="24" cy="24" r="18" stroke="#F59E0B" strokeWidth="4"/>
        <circle cx="24" cy="24" r="8" fill="#FBBF24"/>
        <path d="M24 6V12M24 36V42M42 24H36M12 24H6" stroke="#D97706" strokeWidth="4" strokeLinecap="round"/>
    </svg>
);

export const AccountingIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none" className={dropShadow}>
        <circle cx="12" cy="12" r="8" fill="#FDBA74" />
        <circle cx="28" cy="28" r="8" fill="#2DD4BF" />
        <rect x="6" y="30" width="34" height="8" rx="4" transform="rotate(-45 6 30)" fill="#8B5CF6" opacity="0.9" />
    </svg>
);

export const HRIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" className={dropShadow}>
        <circle cx="24" cy="12" r="8" fill="#F472B6"/>
        <path d="M8 40C8 31.1634 15.1634 24 24 24C32.8366 24 40 31.1634 40 40" stroke="#EC4899" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="38" cy="12" r="4" fill="#FBCFE8"/>
        <circle cx="10" cy="12" r="4" fill="#FBCFE8"/>
    </svg>
);

export const SalesIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" className={dropShadow}>
        <path d="M4 40L14 24L24 32L44 8" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44 8H32M44 8V20" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="4" cy="40" r="3" fill="#34D399"/>
        <circle cx="14" cy="24" r="3" fill="#34D399"/>
        <circle cx="24" cy="32" r="3" fill="#34D399"/>
    </svg>
);

export const ReportsIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" className={dropShadow}>
        <rect x="10" y="6" width="28" height="36" rx="4" fill="#E2E8F0"/>
        <rect x="16" y="14" width="16" height="4" rx="2" fill="#94A3B8"/>
        <rect x="16" y="22" width="16" height="4" rx="2" fill="#94A3B8"/>
        <rect x="16" y="30" width="10" height="4" rx="2" fill="#64748B"/>
        <path d="M30 32L42 42" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="40" cy="40" r="6" stroke="#3B82F6" strokeWidth="3" fill="none"/>
    </svg>
);

export const LiveChatIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none" className={dropShadow}>
        <rect x="6" y="8" width="20" height="18" rx="6" fill="#60A5FA" />
        <path d="M6 20L2 24V14L6 14" fill="#60A5FA" />
        <rect x="14" y="14" width="20" height="18" rx="6" fill="#F472B6" style={{mixBlendMode: 'multiply'}} />
        <path d="M34 26L38 30V20L34 20" fill="#F472B6" style={{mixBlendMode: 'multiply'}} />
    </svg>
);

export const WebsiteIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none" className={dropShadow}>
        <circle cx="20" cy="20" r="16" stroke="#3B82F6" strokeWidth="3" fill="#BFDBFE" fillOpacity="0.3"/>
        <path d="M4 20H36" stroke="#3B82F6" strokeWidth="2"/>
        <ellipse cx="20" cy="20" rx="6" ry="16" stroke="#3B82F6" strokeWidth="2" />
    </svg>
);

export const EcommerceIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none" className={dropShadow}>
        <path d="M8 12L32 16L30 28H10L8 12Z" fill="#F472B6" opacity="0.8"/>
        <circle cx="14" cy="34" r="3" fill="#EC4899"/>
        <circle cx="26" cy="34" r="3" fill="#EC4899"/>
        <path d="M8 12H4V8H10" stroke="#EC4899" strokeWidth="3" strokeLinecap="round"/>
    </svg>
);

export const ForumIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none" className={dropShadow}>
        <rect x="4" y="8" width="24" height="20" rx="4" fill="#34D399" opacity="0.8"/>
        <rect x="12" y="16" width="24" height="20" rx="4" fill="#10B981" opacity="0.9"/>
    </svg>
);

export const LMSIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none" className={dropShadow}>
        <path d="M20 4L4 12L20 20L36 12L20 4Z" fill="#FBBF24"/>
        <path d="M4 12V28L20 36V20L4 12Z" fill="#F59E0B"/>
        <path d="M36 12V28L20 36V20L36 12Z" fill="#D97706"/>
    </svg>
);

export const CRMIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none" className={dropShadow}>
        <circle cx="20" cy="14" r="6" fill="#F87171"/>
        <path d="M8 34C8 26 12 22 20 22C28 22 32 26 32 34" stroke="#EF4444" strokeWidth="4" strokeLinecap="round"/>
    </svg>
);

export const AnalyticsIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none" className={dropShadow}>
        <rect x="6" y="24" width="6" height="12" rx="2" fill="#06B6D4"/>
        <rect x="17" y="16" width="6" height="20" rx="2" fill="#0EA5E9"/>
        <rect x="28" y="8" width="6" height="28" rx="2" fill="#3B82F6"/>
    </svg>
);

export const SupportIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none" className={dropShadow}>
        <circle cx="20" cy="20" r="16" stroke="#14B8A6" strokeWidth="6"/>
        <circle cx="20" cy="20" r="8" fill="#14B8A6"/>
    </svg>
);

export const ManagementIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" className={dropShadow}>
        <rect x="14" y="4" width="20" height="14" rx="2" fill="#6366F1"/>
        <path d="M24 18V28" stroke="#818CF8" strokeWidth="3"/>
        <rect x="4" y="28" width="16" height="12" rx="2" fill="#818CF8"/>
        <path d="M12 28V24H36V28" stroke="#818CF8" strokeWidth="3" strokeLinecap="round"/>
        <rect x="28" y="28" width="16" height="12" rx="2" fill="#818CF8"/>
    </svg>
);

export const DashboardIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none" className={dropShadow}>
        <rect x="4" y="4" width="14" height="14" rx="4" fill="#F87171"/>
        <rect x="22" y="4" width="14" height="14" rx="4" fill="#60A5FA"/>
        <rect x="4" y="22" width="14" height="14" rx="4" fill="#34D399"/>
        <rect x="22" y="22" width="14" height="14" rx="4" fill="#FBBF24"/>
    </svg>
);

export const SettingsIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" className={dropShadow}>
        <circle cx="24" cy="24" r="10" stroke="#9CA3AF" strokeWidth="6"/>
        <circle cx="24" cy="24" r="4" fill="#4B5563"/>
        <path d="M24 2V8M24 40V46M46 24H40M8 24H2" stroke="#9CA3AF" strokeWidth="6" strokeLinecap="round"/>
    </svg>
);

export const SystemizeAppIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" className={dropShadow}>
        <path d="M24 4L42 14V34L24 44L6 34V14L24 4Z" fill="#8B5CF6"/>
        <path d="M24 22L36 15M24 22L12 15M24 22V36" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </svg>
);

// --- أيقونات الشحن (Shipping Wizard Icons) ---

export const DomesticIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" className={dropShadow}>
        <path d="M24 44C24 44 40 32 40 18C40 9.16344 32.8366 2 24 2C15.1634 2 8 9.16344 8 18C8 32 24 44 24 44Z" fill="#10B981" opacity="0.9"/>
        <circle cx="24" cy="18" r="8" fill="#34D399"/>
        <path d="M24 14V22M20 18H28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </svg>
);

export const InternationalIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" className={dropShadow}>
        <circle cx="24" cy="24" r="20" fill="#3B82F6" opacity="0.9"/>
        <path d="M4 24H44" stroke="#93C5FD" strokeWidth="3"/>
        <path d="M24 4C24 4 32 14 32 24C32 34 24 44 24 44C24 44 16 34 16 24C16 14 24 4 24 4Z" stroke="#93C5FD" strokeWidth="3"/>
        <path d="M38 14L10 34" stroke="white" strokeWidth="2" strokeDasharray="4 4"/>
    </svg>
);

export const SeaIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" className={dropShadow}>
        <path d="M4 30L8 38H40L44 30H4Z" fill="#0284C7"/>
        <rect x="10" y="16" width="8" height="14" fill="#EF4444"/>
        <rect x="18" y="12" width="8" height="18" fill="#F59E0B"/>
        <rect x="26" y="16" width="8" height="14" fill="#10B981"/>
        <path d="M2 38C2 38 10 44 16 40C22 36 30 42 36 38C42 34 48 38 48 38" stroke="#7DD3FC" strokeWidth="4" strokeLinecap="round"/>
    </svg>
);

export const AirIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" className={dropShadow}>
        <path d="M42 22C42 17.5817 38.4183 14 34 14H14C8.47715 14 4 18.4772 4 24C4 29.5228 8.47715 34 14 34H34C38.4183 34 42 30.4183 42 26V22Z" fill="#93C5FD"/>
        <path d="M14 14C8.47715 14 4 18.4772 4 24C4 29.5228 8.47715 34 14 34V14Z" fill="#60A5FA"/>
        <path d="M20 24L28 6H40L34 24H20Z" fill="#3B82F6"/>
        <path d="M8 24L14 10H24L18 24H8Z" fill="#3B82F6"/>
        <rect x="26" y="30" width="10" height="6" rx="3" fill="#1E40AF"/>
        <circle cx="18" cy="22" r="2" fill="white" fillOpacity="0.7"/>
        <circle cx="24" cy="22" r="2" fill="white" fillOpacity="0.7"/>
        <circle cx="30" cy="22" r="2" fill="white" fillOpacity="0.7"/>
    </svg>
);

export const LandIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" className={dropShadow}>
        <rect x="4" y="14" width="26" height="20" rx="2" fill="#F59E0B"/>
        <path d="M30 24H38L44 34H30V24Z" fill="#FCD34D"/>
        <circle cx="12" cy="38" r="5" fill="#374151"/>
        <circle cx="36" cy="38" r="5" fill="#374151"/>
        <rect x="4" y="31" width="40" height="4" fill="#D97706" opacity="0.3"/>
    </svg>
);