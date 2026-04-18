// import React from "react";
// import { Bell, Plus, MessageSquare, Phone, BarChart3 } from "lucide-react";

// export default function RightPanel() {
//     return (
//         <div className="min-h-screen bg-gray-50 flex">
//             {/* ================= SIDEBAR ================= */}
//             <aside className="w-64 bg-white border-r hidden md:flex flex-col">
//                 <div className="p-6 border-b">
//                     <h1 className="text-xl font-bold text-indigo-600">⚡ AutoReply AI</h1>
//                 </div>

//                 <nav className="flex-1 p-4 space-y-2">
//                     <SidebarItem active label="Overview" />
//                     {/* <SidebarItem label="Conversations" /> */}
//                     {/* <SidebarItem label="AI Knowledge Base" /> */}
//                     <SidebarItem label="Phone Numbers" />
//                     {/* <SidebarItem label="Analytics" /> */}

//                     <div className="pt-6 text-xs text-gray-400 font-semibold">
//                         SYSTEM
//                     </div>

//                     <SidebarItem label="Billing" />
//                     <SidebarItem label="Settings" />
//                 </nav>

//                 <div className="p-4 border-t">
//                     <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 rounded-full bg-gray-200" />
//                         <div>
//                             <p className="text-sm font-medium">Alex Rivera</p>
//                             <p className="text-xs text-gray-500">Pro Account</p>
//                         </div>
//                     </div>
//                 </div>
//             </aside>

//             {/* ================= MAIN ================= */}
//             <main className="flex-1">
//                 {/* ===== TOP BAR ===== */}
//                 <header className="bg-white border-b px-6 py-4 flex items-center justify-end">
//                     {/* <input
//                         placeholder="Search conversations or settings..."
//                         className="w-96 max-w-full px-4 py-2 rounded-lg border bg-gray-50 focus:outline-none"
//                     /> */}

//                     <div className="flex items-center gap-4">
//                         <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
//                             <Plus size={16} />
//                             Create Auto-Reply
//                         </button>
//                         <Bell className="text-gray-500" />
//                     </div>
//                 </header>

//                 {/* ===== CONTENT ===== */}
//                 <div className="p-6 space-y-6">
//                     {/* Title */}
//                     <div>
//                         <h2 className="text-2xl font-bold">Dashboard Overview</h2>
//                         <p className="text-gray-500">
//                             Welcome back, here's what's happening with your AI agents today.
//                         </p>
//                     </div>

//                     {/* ===== STATS ===== */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         <StatCard
//                             title="Total Messages Handled"
//                             value="12,840"
//                             badge="+12.5%"
//                         />
//                         <StatCard title="AI Success Rate" value="94.2%" badge="High" />
//                         <StatCard title="Active Numbers" value="5" badge="ACTIVE" />
//                     </div>

//                     {/* ===== MIDDLE GRID ===== */}
//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                         {/* Chart */}
//                         <div className="lg:col-span-2 bg-white rounded-2xl p-6 border">
//                             <div className="flex justify-between items-center mb-4">
//                                 <div>
//                                     <h3 className="font-semibold text-lg">Messaging Volume</h3>
//                                     <p className="text-sm text-gray-500">
//                                         Activity trends for the last 30 days
//                                     </p>
//                                 </div>
//                                 <select className="border rounded-lg px-3 py-1 text-sm">
//                                     <option>Last 30 Days</option>
//                                 </select>
//                             </div>

//                             {/* Fake chart */}
//                             <div className="h-64 bg-gradient-to-t from-indigo-100 to-transparent rounded-xl flex items-end">
//                                 <div className="w-full h-40 bg-indigo-500/30 rounded-xl" />
//                             </div>
//                         </div>

//                         {/* Real-time preview */}
//                         <div className="bg-white rounded-2xl border overflow-hidden">
//                             <div className="p-4 border-b flex items-center gap-2">
//                                 <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
//                                     🤖
//                                 </div>
//                                 <div>
//                                     <p className="font-medium">Real-time Preview</p>
//                                     <p className="text-xs text-green-500">● Agent Active</p>
//                                 </div>
//                             </div>

//                             <div className="p-4 space-y-3 text-sm">
//                                 <ChatBubble>
//                                     Hi! Do you have any tables available for 2 tonight?
//                                 </ChatBubble>

//                                 <ChatBubble bot>
//                                     Checking... Yes! We have an opening at 7:30 PM.
//                                 </ChatBubble>

//                                 <ChatBubble>Yes please! My name is</ChatBubble>

//                                 <div className="text-xs text-gray-400">
//                                     Simulation in progress...
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* ===== RECENT RESPONSES ===== */}
//                     <div className="bg-white rounded-2xl border p-6">
//                         <div className="flex justify-between mb-4">
//                             <h3 className="font-semibold text-lg">
//                                 Recent Automated Responses
//                             </h3>
//                             <button className="text-indigo-600 text-sm">View All</button>
//                         </div>

//                         <div className="space-y-4">
//                             <ResponseItem
//                                 title="+1 (555) 012-9843"
//                                 text="Sure! Our store hours are 9 AM - 6 PM today."
//                             />
//                             <ResponseItem
//                                 title="support_ticket_882"
//                                 text="I've initiated your refund request."
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }

// /* ================= SUB COMPONENTS ================= */

// function SidebarItem({ label, active }) {
//     return (
//         <div
//             className={`px-3 py-2 rounded-lg text-sm cursor-pointer ${active
//                 ? "bg-indigo-50 text-indigo-600 font-medium"
//                 : "text-gray-600 hover:bg-gray-100"
//                 }`}
//         >
//             {label}
//         </div>
//     );
// }

// function StatCard({ title, value, badge }) {
//     return (
//         <div className="bg-white rounded-2xl p-6 border">
//             <div className="flex justify-between items-center mb-2">
//                 <p className="text-sm text-gray-500">{title}</p>
//                 <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
//                     {badge}
//                 </span>
//             </div>
//             <p className="text-3xl font-bold">{value}</p>
//         </div>
//     );
// }

// function ChatBubble({ children, bot }) {
//     return (
//         <div
//             className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${bot
//                 ? "ml-auto bg-indigo-600 text-white"
//                 : "bg-gray-100 text-gray-800"
//                 }`}
//         >
//             {children}
//         </div>
//     );
// }

// function ResponseItem({ title, text }) {
//     return (
//         <div className="flex justify-between items-start border-b pb-3">
//             <div>
//                 <p className="font-medium text-sm">{title}</p>
//                 <p className="text-xs text-gray-500">{text}</p>
//             </div>
//             <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
//                 AUTOMATED
//             </span>
//         </div>
//     );
// }

import React, { useState } from "react";
import { Bell, Plus } from "lucide-react";

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("dashboard");

    const renderContent = () => {
        switch (activeTab) {
            case "dashboard":
                return <DashboardContent />;
            case "conversations":
                return <Page title="Conversations" />;
            case "knowledge":
                return <Page title="Knowledge Base" />;
            case "settings":
                return <Page title="Settings" />;
            case "profile":
                return <Page title="Profile" />;
            default:
                return <DashboardContent />;
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">

            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md hidden md:flex flex-col justify-between">
                <div>
                    <div className="p-6 font-bold text-lg">
                        AutoReply AI
                        <p className="text-blue-500 text-sm font-normal">
                            AI Engine Active
                        </p>
                    </div>

                    <nav className="px-4 space-y-2">
                        <NavItem label="Dashboard" tab="dashboard" activeTab={activeTab} setActiveTab={setActiveTab} />
                        <NavItem label="Conversations" tab="conversations" activeTab={activeTab} setActiveTab={setActiveTab} />
                        <NavItem label="Knowledge Base" tab="knowledge" activeTab={activeTab} setActiveTab={setActiveTab} />
                        <NavItem label="Settings" tab="settings" activeTab={activeTab} setActiveTab={setActiveTab} />
                        <NavItem label="Profile" tab="profile" activeTab={activeTab} setActiveTab={setActiveTab} />
                    </nav>
                </div>

                <div className="p-4">
                    <div className="bg-blue-600 text-white p-4 rounded-xl">
                        <p className="text-sm">Standard Plan</p>
                        <p className="font-bold">84% of Limit Used</p>
                        <button className="mt-3 bg-white text-blue-600 px-4 py-2 rounded-lg text-sm">
                            Upgrade Plan
                        </button>
                    </div>

                    <div className="mt-4 text-sm text-gray-500 space-y-2">
                        <p className="cursor-pointer">Help</p>
                        <p className="cursor-pointer">Logout</p>
                    </div>
                </div>
            </aside>

            {/* Main */}
            <main className="flex-1 p-4 md:p-8">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl font-semibold capitalize">
                        {activeTab}
                    </h1>

                    <div className="flex items-center gap-4">
                        <Bell className="text-gray-500" />
                        <div className="flex items-center gap-2">
                            <img src="https://i.pravatar.cc/40" className="rounded-full" />
                            <div className="text-sm">
                                <p className="font-medium">Alex Rivers</p>
                                <p className="text-gray-500 text-xs">Admin Access</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dynamic Content */}
                {renderContent()}

                {/* Floating Button */}
                <button className="fixed bottom-6 right-6 bg-blue-600 p-4 rounded-full text-white shadow-lg">
                    <Plus />
                </button>
            </main>
        </div>
    );
}

/* Sidebar Item */
function NavItem({ label, tab, activeTab, setActiveTab }) {
    const active = activeTab === tab;

    return (
        <div
            onClick={() => setActiveTab(tab)}
            className={`p-3 rounded-lg cursor-pointer transition ${active
                ? "bg-blue-100 text-blue-600 font-medium"
                : "text-gray-600 hover:bg-gray-100"
                }`}
        >
            {label}
        </div>
    );
}

/* Dashboard Content */
function DashboardContent() {
    return (
        <>
            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-4">
                <Card title="Total Messages" value="12,842" extra="+12%" />
                <Card title="AI Responses" value="9,410" extra="+73% rate" />

                <div className="bg-white p-5 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Connection Status</p>
                    <div className="flex items-center justify-between mt-4">
                        <span className="text-blue-600 font-medium">● Online</span>
                        <button className="border px-3 py-1 rounded-lg text-sm">
                            Reconnect
                        </button>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                        Last heartbeat: 2 seconds ago
                    </p>
                </div>
            </div>

            {/* Chart + Feed */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">

                {/* Chart */}
                <div className="md:col-span-2 bg-white p-5 rounded-xl shadow">
                    <p className="font-medium mb-4">Message Trends</p>

                    <div className="flex items-end gap-3 h-40">
                        {[40, 60, 50, 80, 100, 60, 55].map((h, i) => (
                            <div
                                key={i}
                                className={`w-full rounded ${i === 4 ? "bg-blue-400" : "bg-gray-200"
                                    }`}
                                style={{ height: `${h}%` }}
                            />
                        ))}
                    </div>

                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d) => (
                            <span key={d}>{d}</span>
                        ))}
                    </div>
                </div>

                {/* Feed */}
                <div className="bg-white p-5 rounded-xl shadow">
                    <p className="font-medium mb-3">Live Feed</p>
                    <FeedItem name="Sarah Miller" />
                    <FeedItem name="James Chen" />
                    <FeedItem name="Maya Patel" />
                </div>
            </div>
        </>
    );
}

/* Placeholder Pages */
function Page({ title }) {
    return (
        <div className="bg-white p-10 rounded-xl shadow text-center">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-gray-500 mt-2">
                This tab is now functional 🎉
            </p>
        </div>
    );
}

/* Card */
function Card({ title, value, extra }) {
    return (
        <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">{title}</p>
            <div className="flex justify-between mt-3">
                <h2 className="text-2xl font-bold">{value}</h2>
                <span className="text-blue-500 text-sm">{extra}</span>
            </div>
        </div>
    );
}

/* Feed Item */
function FeedItem({ name }) {
    return (
        <div className="flex items-center gap-3 mb-3">
            <img src="https://i.pravatar.cc/40" className="rounded-full" />
            <p className="text-sm font-medium">{name}</p>
        </div>
    );
}