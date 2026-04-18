import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "How does the AI reply to WhatsApp messages?",
        answer:
            "Our AI reads your uploaded PDF (FAQs or knowledge base) and generates accurate responses to incoming WhatsApp messages automatically."
    },
    {
        question: "Do I need coding skills to use this platform?",
        answer:
            "No, everything is no-code. Just sign up, connect your WhatsApp number, upload your PDF, and you're ready to go."
    },
    {
        question: "What kind of PDF can I upload?",
        answer:
            "You can upload any FAQ document, product details, or business knowledge base in PDF format for AI training."
    },
    {
        question: "Can I update my knowledge base later?",
        answer:
            "Yes, you can replace or re-upload your PDF anytime from the dashboard."
    },
    {
        question: "What happens if AI doesn't know the answer?",
        answer:
            "The system can trigger a fallback or notify you for manual response, ensuring no customer is ignored."
    },
    {
        question: "Is my data secure?",
        answer:
            "Yes, we follow strict data security practices to keep your business and customer data safe."
    }
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-center mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm cursor-pointer"
                            onClick={() => toggle(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-lg">{faq.question}</h3>
                                <span className="text-blue-600 text-xl">
                                    {activeIndex === index ? "-" : "+"}
                                </span>
                            </div>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <Motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="text-gray-600 mt-4 text-sm leading-relaxed"
                                    >
                                        {faq.answer}
                                    </Motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}