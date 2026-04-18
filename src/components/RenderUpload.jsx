// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { UploadCloud } from "lucide-react";

// const RenderUpload = ({ phoneVerified }) => {
//     const fileInputRef = useRef(null);
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [error, setError] = useState("");
//     const [uploading, setUploading] = useState(false);
//     const [success, setSuccess] = useState("");

//     const handleClick = () => {
//         fileInputRef.current.click();
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setError("");
//         setSuccess("");

//         if (!file) return;

//         // ✅ type check
//         if (file.type !== "application/pdf") {
//             setError("Only PDF files are allowed.");
//             return;
//         }

//         // ✅ size check (10MB)
//         if (file.size > 10 * 1024 * 1024) {
//             setError("File size must be less than 10MB.");
//             return;
//         }

//         setSelectedFile(file);
//     };

//     //  REAL UPLOAD FUNCTION
//     const handleUpload = async () => {
//         if (!selectedFile) return;

//         setUploading(true);
//         setError("");
//         setSuccess("");

//         try {
//             const formData = new FormData();
//             formData.append("file", selectedFile);

//             const response = await fetch("/api/upload", {
//                 method: "POST",
//                 body: formData,
//             });

//             if (!response.ok) {
//                 throw new Error("Upload failed");
//             }

//             const data = await response.json();
//             console.log("Server response:", data);

//             setSuccess("PDF uploaded successfully!");
//         } catch (err) {
//             console.error(err);
//             setError("Upload failed. Try again.");
//         } finally {
//             setUploading(false);
//         }
//     };

//     return (
//         <div className="space-y-6">
//             <div className="text-center">
//                 <h3 className="text-lg font-semibold mb-2">
//                     Upload Your Business Knowledge
//                 </h3>
//                 <p className="text-sm text-gray-500">
//                     Upload a PDF that your AI will learn from
//                 </p>
//             </div>

//             <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 onClick={handleClick}
//                 className="border-2 border-dashed border-gray-200 rounded-2xl p-12 text-center cursor-pointer"
//             >
//                 <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <UploadCloud className="text-blue-600" />
//                 </div>

//                 <p className="font-medium">
//                     {selectedFile ? selectedFile.name : "Click to upload PDF"}
//                 </p>

//                 <p className="text-xs text-gray-400 mt-1">
//                     Max file size 10MB
//                 </p>

//                 <input
//                     ref={fileInputRef}
//                     type="file"
//                     accept="application/pdf"
//                     className="hidden"
//                     onChange={handleFileChange}
//                 />
//             </motion.div>

//             {/* Upload Button */}
//             {selectedFile && (
//                 <div className="text-center">
//                     <button
//                         onClick={handleUpload}
//                         disabled={uploading}
//                         className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
//                     >
//                         {uploading ? "Uploading..." : "Upload PDF"}
//                     </button>
//                 </div>
//             )}

//             {error && (
//                 <div className="text-center text-red-500 text-sm font-medium">
//                     {error}
//                 </div>
//             )}

//             {success && (
//                 <div className="text-center text-green-600 text-sm font-medium">
//                     {success}
//                 </div>
//             )}

//             {phoneVerified && (
//                 <div className="text-center text-green-600 text-sm font-medium">
//                     ✓ Phone number verified successfully
//                 </div>
//             )}
//         </div>
//     );
// };

// export default RenderUpload;