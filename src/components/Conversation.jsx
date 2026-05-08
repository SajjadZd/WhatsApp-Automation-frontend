import React, { useState, useEffect } from "react";

// 🎨 Colors
const colors = [
    "bg-blue-100",
    "bg-green-100",
    "bg-purple-100",
    "bg-yellow-100",
    "bg-pink-100",
];

const Conversation = () => {
    const [conversationsData, setConversationsData] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // ✅ Fetch API
    useEffect(() => {
        const fetchConversations = async () => {
            try {
                setLoading(true);

                const res = await fetch("/conversation/conversations");
                const data = await res.json();

                if (!res.ok || !data.success) {
                    throw new Error("Failed to fetch conversations");
                }

                setConversationsData(data.data || []);
            } catch (err) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchConversations();
    }, []);

    // ✅ Loading State
    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    // ✅ Error State
    if (error) {
        return (
            <div className="text-center text-red-500 mt-10">
                {error}
            </div>
        );
    }

    return (
        <div className="h-[80vh]">

            {/* ✅ CARDS VIEW */}
            {!selectedChat && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {conversationsData.length === 0 ? (
                        <p>No conversations found</p>
                    ) : (
                        conversationsData.map((chat, index) => (
                            <div
                                key={chat._id}
                                onClick={() => chat && setSelectedChat(chat)}
                                className={`p-6 rounded-xl cursor-pointer shadow hover:scale-105 transition ${colors[index % colors.length]
                                    }`}
                            >
                                <h3 className="font-semibold text-lg">
                                    {chat.contactId?.phone || "Unknown"}
                                </h3>

                                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                    {chat.lastMessage || "No messages"}
                                </p>

                                <p className="text-xs text-gray-400 mt-2">
                                    Unread: {chat.unreadCount || 0}
                                </p>
                            </div>
                        ))
                    )}
                </div>
            )}

            {/* ✅ CHAT VIEW */}
            {selectedChat && (
                <div className="bg-white h-full rounded-xl shadow flex flex-col p-4">

                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-3 mb-3">
                        <h2 className="text-xl font-semibold">
                            {selectedChat.contactId?.phone || "Unknown"}
                        </h2>

                        <button
                            onClick={() => setSelectedChat(null)}
                            className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
                        >
                            Cancel
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto space-y-3">
                        <div className="p-3 bg-gray-200 rounded-lg max-w-xs">
                            {selectedChat.lastMessage || "No messages yet"}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Conversation;