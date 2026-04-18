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
// function Page({ title }) {
//     return (
//         <div className="bg-white p-10 rounded-xl shadow text-center">
//             <h2 className="text-2xl font-semibold">{title}</h2>
//             <p className="text-gray-500 mt-2">
//                 This tab is now functional 🎉
//             </p>
//         </div>
//     );
// }

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