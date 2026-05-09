import React, { useEffect, useState } from "react";
import axios from "axios";

export const Profile = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsappToken: "",
        oldPassword: "",
        newPassword: "",
    });

    const [loading, setLoading] = useState(false);
    const [passwordLoading, setPasswordLoading] = useState(false);
    const [message, setMessage] = useState("");

    const [is2FAEnabled, setIs2FAEnabled] = useState(false);
    const [toggleLoading, setToggleLoading] = useState(false);
    const [pageLoading, setPageLoading] = useState(true);

    // ================= LOAD PROFILE =================
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get("/tenant/me");

                const data = res.data;

                setFormData((prev) => ({
                    ...prev,
                    name: data.name || "",
                    email: data.email || "",
                    whatsappToken: data.whatsappToken || "",
                }));

                setIs2FAEnabled(data.twoFactorEnabled || false);
            } catch (err) {
                console.error(err);
                setMessage("Failed to load profile ❌");
            } finally {
                setPageLoading(false);
            }
        };

        fetchProfile();
    }, []);

    // ================= HANDLE INPUT =================
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ================= UPDATE PROFILE =================
    const handleUpdateProfile = async () => {
        if (!formData.name || !formData.email) {
            return setMessage("Name and Email required");
        }

        try {
            setLoading(true);
            setMessage("");

            await axios.put("/tenant/update-profile", {
                name: formData.name,
                email: formData.email,
                whatsappToken: formData.whatsappToken,
            });

            setMessage("Profile updated successfully ✅");
        } catch (err) {
            console.error(err);
            setMessage(
                err.response?.data?.message || "Update failed ❌"
            );
        } finally {
            setLoading(false);
        }
    };

    // ================= CHANGE PASSWORD =================
    const handleChangePassword = async () => {
        if (!formData.oldPassword || !formData.newPassword) {
            return setMessage("Both password fields required");
        }

        try {
            setPasswordLoading(true);
            setMessage("");

            await axios.put("/tenant/change-password", {
                oldPassword: formData.oldPassword,
                newPassword: formData.newPassword,
            });

            setMessage("Password changed successfully ✅");

            setFormData((prev) => ({
                ...prev,
                oldPassword: "",
                newPassword: "",
            }));
        } catch (err) {
            console.error(err);
            setMessage(
                err.response?.data?.message ||
                "Password change failed ❌"
            );
        } finally {
            setPasswordLoading(false);
        }
    };

    // ================= TOGGLE 2FA =================
    const handleToggle2FA = async () => {
        try {
            setToggleLoading(true);
            setMessage("");

            const res = await axios.put("/tenant/toggle-2fa");

            if (!res.data?.success) {
                throw new Error("Failed to toggle 2FA");
            }

            setIs2FAEnabled((prev) => !prev);

            setMessage(
                `2FA ${!is2FAEnabled ? "Enabled ✅" : "Disabled ❌"}`
            );
        } catch (err) {
            console.error(err);
            setMessage(
                err.response?.data?.message ||
                err.message ||
                "2FA update failed"
            );
        } finally {
            setToggleLoading(false);
        }
    };

    if (pageLoading) {
        return (
            <div className="p-4 md:p-8 bg-gray-100 min-h-screen flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT PROFILE CARD (UNCHANGED DESIGN) */}
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

                    {/* 2FA TOGGLE */}
                    <div className="mt-6 text-left">
                        <p className="text-sm font-medium mb-2">
                            Two-Factor Authentication (2FA)
                        </p>

                        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                            <span className="text-sm text-gray-600">
                                {is2FAEnabled ? "Enabled" : "Disabled"}
                            </span>

                            <button
                                onClick={handleToggle2FA}
                                disabled={toggleLoading}
                                className={`w-12 h-6 flex items-center rounded-full p-1 transition ${is2FAEnabled ? "bg-green-500" : "bg-gray-300"
                                    }`}
                            >
                                <div
                                    className={`bg-white w-4 h-4 rounded-full shadow transform transition ${is2FAEnabled ? "translate-x-6" : ""
                                        }`}
                                />
                            </button>
                        </div>

                        {toggleLoading && (
                            <p className="text-xs text-gray-400 mt-1">
                                Updating...
                            </p>
                        )}
                    </div>
                </div>

                {/* RIGHT FORM (UPDATED FIELDS ONLY) */}
                <div className="bg-white rounded-xl shadow p-6 lg:col-span-2">
                    <h2 className="text-lg font-semibold mb-4">
                        Account Details
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="p-3 rounded-lg bg-gray-100"
                        />

                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="p-3 rounded-lg bg-gray-100"
                        />

                        <input
                            name="whatsappToken"
                            value={formData.whatsappToken}
                            onChange={handleChange}
                            placeholder="WhatsApp Token"
                            className="p-3 rounded-lg bg-gray-100 md:col-span-2"
                        />

                        <input
                            type="password"
                            name="oldPassword"
                            value={formData.oldPassword}
                            onChange={handleChange}
                            placeholder="Old Password"
                            className="p-3 rounded-lg bg-gray-100"
                        />

                        <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                            placeholder="New Password"
                            className="p-3 rounded-lg bg-gray-100"
                        />
                    </div>

                    {/* MESSAGE */}
                    {message && (
                        <p className="mt-4 text-sm text-center text-blue-500">
                            {message}
                        </p>
                    )}

                    {/* BUTTONS */}
                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            onClick={handleUpdateProfile}
                            disabled={loading}
                            className="px-5 py-2 rounded-lg bg-blue-600 text-white"
                        >
                            {loading ? "Updating..." : "Update Profile"}
                        </button>

                        <button
                            onClick={handleChangePassword}
                            disabled={passwordLoading}
                            className="px-5 py-2 rounded-lg bg-green-600 text-white"
                        >
                            {passwordLoading ? "Changing..." : "Change Password"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};