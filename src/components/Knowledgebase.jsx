import React, { useState } from "react";
import axios from "axios";

const KnowledgeBase = ({ title }) => {
    const [pdfUrl, setPdfUrl] = useState(
        "https://res.cloudinary.com/demo/image/upload/sample.pdf"
    );

    const [file, setFile] = useState(null);
    const [showUpload, setShowUpload] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // File Validation
    const validateFile = (file) => {
        if (!file) return "No file selected";

        if (file.type !== "application/pdf") {
            return "Only PDF files are allowed";
        }

        if (file.size > 10 * 1024 * 1024) {
            return "File size must be less than 10MB";
        }

        return null;
    };

    // Handle Upload (PUT API)
    const handleUpload = async () => {
        const validationError = validateFile(file);

        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            setLoading(true);
            setError("");

            const formData = new FormData();
            formData.append("pdf", file);

            const res = await axios.put("/document/update", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            // Handle API response safely
            if (!res.data || !res.data.success) {
                throw new Error(res.data?.message || "Update failed");
            }

            // Update PDF URL
            setPdfUrl(res.data.pdfUrl);

            // Reset state
            setShowUpload(false);
            setFile(null);
        } catch (err) {
            console.error(err);

            setError(
                err.response?.data?.message ||
                err.message ||
                "Upload failed. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-6 md:p-10 rounded-xl shadow text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold">{title}</h2>

            {/* VIEW MODE */}
            {!showUpload && (
                <>
                    <p className="text-gray-500 mt-2 mb-6">
                        Your uploaded PDF
                    </p>

                    {/* PDF Preview */}
                    <div className="border rounded-lg p-4 mb-4">
                        {pdfUrl ? (
                            <iframe
                                src={pdfUrl}
                                title="PDF Preview"
                                className="w-full h-64 md:h-80 rounded"
                            />
                        ) : (
                            <p className="text-gray-400">No PDF available</p>
                        )}
                    </div>

                    <button
                        onClick={() => setShowUpload(true)}
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Change PDF
                    </button>
                </>
            )}

            {/* UPLOAD MODE */}
            {showUpload && (
                <>
                    <p className="text-gray-500 text-sm mb-6">
                        Upload a PDF that your AI will learn from
                    </p>

                    {/* Upload Box */}
                    <div
                        className="border-2 border-dashed border-gray-300 rounded-xl p-6 md:p-8 text-center cursor-pointer hover:bg-gray-50"
                        onClick={() =>
                            !loading &&
                            document.getElementById("fileInput").click()
                        }
                    >
                        <p className="text-gray-600">Click to upload PDF</p>
                        <p className="text-xs text-gray-400 mt-1">
                            Max file size 10MB
                        </p>
                    </div>

                    <input
                        id="fileInput"
                        type="file"
                        accept="application/pdf"
                        hidden
                        onChange={(e) => {
                            const selectedFile = e.target.files[0];
                            setFile(selectedFile);
                            setError("");
                        }}
                    />

                    {/* Selected File */}
                    {file && (
                        <p className="mt-3 text-sm text-green-600">
                            Selected: {file.name}
                        </p>
                    )}

                    {/* Error */}
                    {error && (
                        <p className="mt-2 text-sm text-red-500">{error}</p>
                    )}

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
                        <button
                            onClick={handleUpload}
                            disabled={loading}
                            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition disabled:opacity-50"
                        >
                            {loading ? "Uploading..." : "Confirm"}
                        </button>

                        <button
                            onClick={() => {
                                if (!loading) {
                                    setShowUpload(false);
                                    setFile(null);
                                    setError("");
                                }
                            }}
                            className="bg-gray-300 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
                        >
                            Cancel
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default KnowledgeBase;