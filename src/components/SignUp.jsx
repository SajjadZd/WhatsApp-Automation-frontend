import { useForm } from "react-hook-form";
// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [step, setStep] = useState(1); // 1 = signup, 2 = upload
    const [file, setFile] = useState(null);
    const [disabled, setDisable] = useState(false); // 1 = signup, 2 = upload

    const steps = ["Account", "Pdf Upload"];

    const navigate = useNavigate();

    const handleGoToDashboard = () => {
        navigate("/dashboard");
    };

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    //  STEP 1: Signup API
    const onSignup = async (data) => {
        try {
            // const res = await axios.post(
            //     "https://jett-aphetic-terminally.ngrok-free.dev/tenant/signup",
            //     data
            // );
            console.log(data);

            const tenantId = "fskf";
            // const tenantId = res.data?.tenantId;

            if (tenantId) {
                sessionStorage.setItem("tenantId", tenantId);
                setStep(2); // move to upload step
            }
        } catch (err) {
            console.error(err);
            alert("Signup failed");
        }
    };

    // STEP 2: Upload PDF API
    const handleUpload = async () => {
        // if (!file) {
        //     alert("Please select a PDF file");
        //     return;
        // }
        // setDisable(true);
        // const tenantId = sessionStorage.getItem("tenantId");

        // const formData = new FormData();
        // formData.append("file", file);
        // formData.append("tenantId", tenantId);

        try {
            // const res = await axios.post(
            //     `https://jett-aphetic-terminally.ngrok-free.dev/document/upload/${tenantId}`,
            //     formData,
            //     {
            //         headers: {
            //             "Content-Type": "multipart/form-data",
            //         },
            //     }
            // );

            // console.log(res.data);
            // setDisable(false);
            alert("Registration Completed!");
            handleGoToDashboard();


        } catch (err) {
            console.error(err);
            setDisable(false);
            alert("Upload failed");
        }
    };

    // ================= UI =================
    return (
        <div className="min-h-screen flex flex-col  items-center justify-center bg-gray-200">
            <div>
                <div className="text-center mb-5">
                    <h1 className="text-4xl font-bold tracking-tight">
                        AutoReply AI
                    </h1>
                    <p className="text-gray-500 mt-2">Setup Workspace</p>
                </div>

                {/* STEP INDICATOR */}
                <div className="flex justify-center items-center mb-5">
                    {steps.map((label, i) => (
                        <div key={i} className="flex items-center">
                            <div className="flex flex-col items-center">
                                <div
                                    className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold transition
                                    ${step >= i + 1
                                            ? "bg-blue-600 text-white shadow-lg"
                                            : "bg-gray-300 text-gray-600"
                                        }`}
                                >
                                    {i + 1}
                                </div>
                                <span className="text-xs mt-2 text-gray-500">
                                    {label}
                                </span>
                            </div>

                            {i !== steps.length - 1 && (
                                <div
                                    className={`w-16 h-[2px] mx-2
                                    ${step > i + 1 ? "bg-blue-600" : "bg-gray-300"}`}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">



                {/* ================= STEP 1 ================= */}
                {step === 1 && (
                    <form onSubmit={handleSubmit(onSignup)}>
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Quick Setup
                        </h2>

                        <input
                            placeholder="Username"
                            {...register("name", { required: true })}
                            className="w-full mb-3 px-4 py-3 border rounded-lg"
                        />
                        {errors.name && <p className="text-red-500 text-sm">Required</p>}

                        <input
                            placeholder="Email"
                            {...register("email", { required: true })}
                            className="w-full mb-3 px-4 py-3 border rounded-lg"
                        />
                        {errors.email && <p className="text-red-500 text-sm">Required</p>}

                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password", { required: true })}
                            className="w-full mb-3 px-4 py-3 border rounded-lg"
                        />
                        {errors.password && <p className="text-red-500 text-sm">Required</p>}

                        <input
                            placeholder="Phone Number"
                            {...register("phoneNumber", { required: true })}
                            className="w-full mb-3 px-4 py-3 border rounded-lg"
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-sm">Required</p>}

                        <input
                            placeholder="Whatsapp Token"
                            {...register("whatsappToken", { required: true })}
                            className="w-full mb-5 px-4 py-3 border rounded-lg"
                        />
                        {errors.whatsappToken && (
                            <p className="text-red-500 text-sm">Required</p>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg"
                        >
                            {isSubmitting ? "Submitting..." : "Continue & Verify Phone"}
                        </button>
                    </form>
                )}

                {/* ================= STEP 2 ================= */}
                {step === 2 && (
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-2">
                            AutoReply AI — Quick Setup
                        </h2>

                        <p className="text-center font-medium mb-1">
                            Upload Your Business Knowledge
                        </p>

                        <p className="text-center text-gray-500 text-sm mb-6">
                            Upload a PDF that your AI will learn from
                        </p>

                        {/* Upload Box */}
                        <div
                            className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:bg-gray-50"
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

                        {file && (
                            <p className="mt-3 text-sm text-green-600">
                                Selected: {file.name}
                            </p>
                        )}

                        {
                            disabled ? (
                                <button
                                    onClick={handleUpload}
                                    disabled={disabled}
                                    className="w-full mt-5 bg-gray-500 text-white py-3 rounded-lg cursor-not-allowed"
                                >
                                    Uploaing.....
                                </button>
                            ) :
                                (
                                    <button
                                        onClick={handleUpload}
                                        disabled={disabled}
                                        className="w-full mt-5 bg-blue-600 text-white py-3 rounded-lg"
                                    >
                                        Upload PDF
                                    </button>
                                )
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default SignUp;
