import React from 'react';
import * as CustomIcons from '../components/icons/CustomIcons';

export const MASTER_APPS_DATA = [
    { id: 'shipping', label: 'Shipping', icon: <CustomIcons.ShippingIcon />, desc: "Logistics & Delivery Management" },
    { id: 'scm', label: 'SCM (Supply Chain)', icon: <CustomIcons.SCMIcon />, desc: "Supply Chain Management" },
    { id: 'operation', label: 'Operation', icon: <CustomIcons.OperationsIcon />, desc: "Manufacturing & Inventory" },
    { id: 'accounting', label: 'Accounting', icon: <CustomIcons.AccountingIcon />, desc: "Financial & Tax Management" },
    { id: 'hr', label: 'Human Resources', icon: <CustomIcons.HRIcon />, desc: "Employees & Recruitment" },
    { id: 'sales', label: 'Sales', icon: <CustomIcons.SalesIcon />, desc: "Quotations & Invoicing" },
    { id: 'crm', label: 'CRM', icon: <CustomIcons.CRMIcon />, desc: "Customer Relationship Data" },
    { id: 'livechat', label: 'Live Chat', icon: <CustomIcons.LiveChatIcon />, desc: "Internal Team Communication" },
    { id: 'website', label: 'Website', icon: <CustomIcons.WebsiteIcon />, desc: "Site Builder & CMS" },
    { id: 'ecommerce', label: 'E-Commerce', icon: <CustomIcons.EcommerceIcon />, desc: "Online Store Management" },
    { id: 'forum', label: 'Forum', icon: <CustomIcons.ForumIcon />, desc: "Community Engagement" },
    { id: 'lms', label: 'LMS', icon: <CustomIcons.LMSIcon />, desc: "Learning Management System" },
    { id: 'analytics', label: 'Analytics', icon: <CustomIcons.AnalyticsIcon />, desc: "Business Intelligence" },
    { id: 'support', label: 'Help Desk', icon: <CustomIcons.SupportIcon />, desc: "Tickets & Customer Service" },
    { id: 'reports', label: 'Reports', icon: <CustomIcons.ReportsIcon />, desc: "System-wide Reporting" },
    { id: 'management', label: 'Management', icon: <CustomIcons.ManagementIcon />, desc: "Project Management" },
    { id: 'dashboard', label: 'Dashboard', icon: <CustomIcons.DashboardIcon />, desc: "KPIs & Statistics" },
    { id: 'sys_app', label: 'Systemize App', icon: <CustomIcons.SystemizeAppIcon />, desc: "Core OS Features" },
    { id: 'settings', label: 'System Settings', icon: <CustomIcons.SettingsIcon />, desc: "Configuration & Users" },
];

export const MODULE_NAV_DATA = {
    'scm': [
        {
            title: "Procurement & Sourcing",
            items: ["Supplier Selection", "RFQ / RFP Management", "Purchase Orders", "Contract Management", "Vendor Evaluation", "Cost Analysis"]
        },
        {
            title: "Logistics & Transportation",
            items: ["Inbound Logistics", "Outbound Logistics", "Fleet Management", "Route Optimization", "Shipment Tracking", "Freight Management"]
        },
        {
            title: "Warehousing & Inventory",
            items: ["Warehouse Operations", "Stock Receiving", "Put-away", "Picking & Packing", "Cycle Counting", "Inventory Reconciliation", "Safety Stock Management"]
        },
        {
            title: "Production Planning",
            items: ["MRP (Material Requirements)", "Production Scheduling", "Capacity Planning", "BOM (Bill of Materials)", "Work Orders", "Product Lifecycle Mgmt"]
        },
        {
            title: "Demand Planning",
            items: ["Market Demand Analysis", "Statistical Forecasting", "Sales Forecast Integration", "Supply vs Demand Balancing", "Seasonal Trend Analysis"]
        },
        {
            title: "Supplier Management",
            items: ["Supplier Registration", "Supplier Risk Assessment", "Supplier Scorecards", "Performance Monitoring", "Compliance & Audits"]
        },
        {
            title: "Order Management",
            items: ["Order Creation", "Order Tracking", "Order Fulfillment", "Backorder Management", "Customer Communication"]
        },
        {
            title: "Supply Chain Analytics",
            items: ["KPI Dashboard", "Cost Optimization", "Lead Time Analysis", "Supply Chain Modeling", "Risk Prediction"]
        },
        {
            title: "Returns & Reverse Logistics",
            items: ["Return Requests", "Return Authorization", "Repair Processing", "Refurbishment", "Waste & Recycling Handling"]
        }
    ],
    // يمكن إضافة بيانات الشحن هنا إذا كان له قوائم فرعية خاصة، ولكننا نستخدم الشحن كصفحة Wizard حالياً
};