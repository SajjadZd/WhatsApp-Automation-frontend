import React, { useState } from "react";
import axios from "axios";

export const Profile = () => {
    const [formData, setFormData] = useState({
        name: "Alex Rivera",
        email: "alex.rivera@autoreply.ai",
        phone: "+1 (555) 0123-4567",
        company: "AutoReply AI Solutions",
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Save Profile
    const handleSave = async () => {
        if (
            formData.password &&
            formData.password !== formData.confirmPassword
        ) {
            return setMessage("Passwords do not match");
        }

        try {
            setLoading(true);
            setMessage("");

            const res = await axios.post("/api/update-profile", formData);

            setMessage("Profile updated successfully ✅");

            // Optionally update UI with fresh backend data
            setFormData((prev) => ({
                ...prev,
                password: "",
                confirmPassword: "",
            }));
        } catch (err) {
            console.error(err);
            setMessage("Something went wrong ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT PROFILE CARD */}
                <div className="bg-white rounded-xl shadow p-6 text-center">
                    <img
                        src="https://i.pravatar.cc/100"
                        alt="avatar"
                        className="w-24 h-24 mx-auto rounded-full mb-4"
                    />
                    <h2 className="text-xl font-semibold">{formData.name}</h2>
                    <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                        ADMIN
                    </span>
                    <p className="text-gray-500 text-sm mt-3">
                        Managing director of AI operations. Oversees automation systems.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-lg font-semibold">12.4k</p>
                            <p className="text-xs text-gray-500">Messages</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-lg font-semibold">89%</p>
                            <p className="text-xs text-gray-500">AI Accuracy</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="bg-white rounded-xl shadow p-6 lg:col-span-2">
                    <div className="flex justify-between mb-4">
                        <h2 className="text-lg font-semibold">Account Details</h2>
                    </div>

                    {/* FORM GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="p-3 rounded-lg bg-gray-100"
                        />

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="p-3 rounded-lg bg-gray-100"
                        />

                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="p-3 rounded-lg bg-gray-100"
                        />

                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company"
                            className="p-3 rounded-lg bg-gray-100"
                        />

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="New Password"
                            className="p-3 rounded-lg bg-gray-100"
                        />

                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            className="p-3 rounded-lg bg-gray-100"
                        />
                    </div>

                    {/* MESSAGE */}
                    {message && (
                        <p className="mt-4 text-sm text-center text-blue-500">
                            {message}
                        </p>
                    )}

                    {/* ACTION BUTTONS */}
                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            onClick={() => window.location.reload()}
                            className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={handleSave}
                            disabled={loading}
                            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                        >
                            {loading ? "Saving..." : "Save Profile"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};