import React, { useState } from "react";
import axios from "axios";

const KnowledgeBase = ({ title }) => {
    // ✅ Existing PDF (Dummy Cloudinary link)
    const [pdfUrl, setPdfUrl] = useState(
        "https://res.cloudinary.com/demo/image/upload/sample.pdf"
    );

    const [file, setFile] = useState(null);
    const [showUpload, setShowUpload] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // ✅ Handle Upload
    const handleUpload = async () => {
        if (!file) {
            setError("Please select a PDF first");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const formData = new FormData();
            formData.append("pdf", file);

            // 🔁 Replace with your backend endpoint
            const res = await axios.post("/api/upload-pdf", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            // ✅ Assume backend returns new PDF URL
            setPdfUrl(res.data.pdfUrl);

            // Reset
            setShowUpload(false);
            setFile(null);
        } catch (err) {
            console.error(err);
            setError("Upload failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-6 md:p-10 rounded-xl shadow text-center max-w-2xl mx-auto">

            <h2 className="text-2xl font-semibold">{title}</h2>

            {/* ✅ VIEW MODE */}
            {!showUpload && (
                <>
                    <p className="text-gray-500 mt-2 mb-6">
                        Your uploaded PDF
                    </p>

                    {/* PDF Preview */}
                    <div className="border rounded-lg p-4 mb-4">
                        <iframe
                            src={pdfUrl}
                            title="PDF Preview"
                            className="w-full h-64 md:h-80 rounded"
                        />
                    </div>

                    <button
                        onClick={() => setShowUpload(true)}
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Change PDF
                    </button>
                </>
            )}

            {/* ✅ UPLOAD MODE */}
            {showUpload && (
                <>
                    <p className="text-gray-500 text-sm mb-6">
                        Upload a PDF that your AI will learn from
                    </p>

                    {/* Upload Box */}
                    <div
                        className="border-2 border-dashed border-gray-300 rounded-xl p-6 md:p-8 text-center cursor-pointer hover:bg-gray-50"
                        onClick={() => document.getElementById("fileInput").click()}
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
                        onChange={(e) => setFile(e.target.files[0])}
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
                                setShowUpload(false);
                                setFile(null);
                                setError("");
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