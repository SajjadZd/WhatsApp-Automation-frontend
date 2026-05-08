import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Login = () => {
    const [step, setStep] = useState(1); // 1 = login, 2 = 2FA
    const [disabled, setDisable] = useState(false);
    const [email, setEmail] = useState(""); // store email for 2FA

    const steps = ["Login", "2FA Verification"];
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const handleGoToDashboard = () => {
        navigate("/dashboard");
    };

    // ================= STEP 1: LOGIN API =================
    const onLogin = async (data) => {
        try {
            console.log(data);

            // const res = await axios.post("/auth/login", data);

            // simulate response
            const success = true;

            if (success) {
                setEmail(data.email); // save email for next step
                setStep(2);
            }
        } catch (err) {
            console.error(err);
            alert("Login failed");
        }
    };

    // ================= STEP 2: VERIFY 2FA =================
    const onVerify2FA = async (data) => {
        try {
            setDisable(true);

            console.log({
                email,
                code: data.code,
            });

            // const res = await axios.post("/auth/verify-2fa", {
            //     email,
            //     code: data.code,
            // });

            const verified = true;

            if (verified) {
                alert("Login Successful!");
                handleGoToDashboard();
            }
        } catch (err) {
            console.error(err);
            alert("Invalid 2FA Code");
        } finally {
            setDisable(false);
        }
    };

    // ================= UI =================
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
            <div>
                <div className="text-center mb-5">
                    <h1 className="text-4xl font-bold tracking-tight">
                        AutoReply AI
                    </h1>
                    <p className="text-gray-500 mt-2">Login to your account</p>
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

                {/* ================= STEP 1: LOGIN ================= */}
                {step === 1 && (
                    <form onSubmit={handleSubmit(onLogin)}>
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Login
                        </h2>

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
                            className="w-full mb-5 px-4 py-3 border rounded-lg"
                        />
                        {errors.password && <p className="text-red-500 text-sm">Required</p>}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg"
                        >
                            {isSubmitting ? "Logging in..." : "Continue"}
                        </button>
                    </form>
                )}

                {/* ================= STEP 2: 2FA ================= */}
                {step === 2 && (
                    <form onSubmit={handleSubmit(onVerify2FA)}>
                        <h2 className="text-2xl font-bold text-center mb-4">
                            2FA Verification
                        </h2>

                        <p className="text-center text-gray-500 text-sm mb-5">
                            Enter the code sent to your email / phone
                        </p>

                        <input
                            placeholder="Enter 6-digit code"
                            {...register("code", { required: true })}
                            className="w-full mb-5 px-4 py-3 border rounded-lg text-center tracking-widest"
                        />
                        {errors.code && <p className="text-red-500 text-sm">Required</p>}

                        <button
                            type="submit"
                            disabled={disabled}
                            className={`w-full py-3 rounded-lg text-white ${disabled ? "bg-gray-500" : "bg-blue-600"
                                }`}
                        >
                            {disabled ? "Verifying..." : "Verify & Login"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;