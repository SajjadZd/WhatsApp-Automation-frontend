import React, { useState } from "react";

// ✅ Dummy JSON Data
const conversationsData = [
    {
        id: 1,
        phone: "0908779",
        messages: [
            { from: "user", text: "Hello!" },
            { from: "agent", text: "Hi, how can I help you?" },
        ],
    },
    {
        id: 2,
        phone: "03123456789",
        messages: [
            { from: "user", text: "Is this available?" },
            { from: "agent", text: "Yes, it is available." },
        ],
    },
    {
        id: 3,
        phone: "03219876543",
        messages: [
            { from: "user", text: "Need support!" },
            { from: "agent", text: "Sure, what's the issue?" },
        ],
    },
    {
        id: 3,
        phone: "03219876543",
        messages: [
            { from: "user", text: "Need support!" },
            { from: "agent", text: "Sure, what's the issue?" },
        ],
    },
    {
        id: 3,
        phone: "03219876543",
        messages: [
            { from: "user", text: "Need support!" },
            { from: "agent", text: "Sure, what's the issue?" },
        ],
    },
    {
        id: 3,
        phone: "03219876543",
        messages: [
            { from: "user", text: "Need support!" },
            { from: "agent", text: "Sure, what's the issue?" },
        ],
    },
    {
        id: 3,
        phone: "03219876543",
        messages: [
            { from: "user", text: "Need support!" },
            { from: "agent", text: "Sure, what's the issue?" },
        ],
    },
    {
        id: 3,
        phone: "03219876543",
        messages: [
            { from: "user", text: "Need support!" },
            { from: "agent", text: "Sure, what's the issue?" },
        ],
    },
    {
        id: 3,
        phone: "03219876543",
        messages: [
            { from: "user", text: "Need support!" },
            { from: "agent", text: "Sure, what's the issue?" },
        ],
    },
    {
        id: 3,
        phone: "03219876543",
        messages: [
            { from: "user", text: "Need support!" },
            { from: "agent", text: "Sure, what's the issue?" },
        ],
    },
    {
        id: 3,
        phone: "03219876543",
        messages: [
            { from: "user", text: "Need support!" },
            { from: "agent", text: "Sure, what's the issue?" },
        ],
    },
    {
        id: 3,
        phone: "03219876543",
        messages: [
            { from: "user", text: "Need support!" },
            { from: "agent", text: "Sure, what's the issue?" },
        ],
    },
    {
        id: 3,
        phone: "03219876543",
        messages: [
            { from: "user", text: "Need support!" },
            { from: "agent", text: "Sure, what's the issue?" },
        ],
    },
    {
        id: 3,
        phone: "03219876543",
        messages: [
            { from: "user", text: "Need support!" },
            { from: "agent", text: "Sure, what's the issue?" },
        ],
    },
    {
        id: 3,
        phone: "03219876543",
        messages: [
            { from: "user", text: "Need support!" },
            { from: "agent", text: "Sure, what's the issue?" },
        ],
    },

];

// 🎨 Colors
const colors = [
    "bg-blue-100",
    "bg-green-100",
    "bg-purple-100",
    "bg-yellow-100",
    "bg-pink-100",
];

const Conversation = () => {
    const [selectedChat, setSelectedChat] = useState(null);

    return (
        <div className="h-[80vh]">

            {/* ✅ CARDS VIEW */}
            {!selectedChat && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {conversationsData.map((chat, index) => (
                        <div
                            key={chat.id}
                            onClick={() => setSelectedChat(chat)}
                            className={`p-6 rounded-xl cursor-pointer shadow hover:scale-105 transition ${colors[index % colors.length]
                                }`}
                        >
                            <h3 className="font-semibold text-lg">{chat.phone}</h3>
                            <p className="text-sm text-gray-600">
                                Click to open chat
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* ✅ CHAT VIEW */}
            {selectedChat && (
                <div className="bg-white h-full rounded-xl shadow flex flex-col p-4">

                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-3 mb-3">
                        <h2 className="text-xl font-semibold">
                            {selectedChat.phone}
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
                        {selectedChat.messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-3 rounded-lg max-w-xs ${msg.from === "user"
                                    ? "bg-blue-500 text-white ml-auto"
                                    : "bg-gray-200 text-black"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                </div>
            )}
        </div>
    );
};

export default Conversation;