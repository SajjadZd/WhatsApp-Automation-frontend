import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import Container from "./Container";
import Button from "./Button";
import { HeroSection } from "./HeroSection";
import { Features } from "./Features";
import Footer from "./Footer";
import FAQSection from "./FAQsection";


export default function LandingPage() {
    return (
        <div className="bg-gray-50 text-gray-900">
            {/* NAVBAR */}
            <Navbar />

            {/* HERO */}
            <HeroSection />

            {/* FEATURES */}
            <div id="features">
                <Features />
            </div>

            {/* HOW IT WORKS */}
            <div className="bg-white py-20" id="how-it-works">
                <Container>
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Set up in less than 5 minutes
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {["Sign Up", "Upload Knowledge", "Go Live"].map(
                            (step, i) => (
                                <div key={i}>
                                    <div className="w-12 h-12 mx-auto rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold mb-4">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <h3 className="font-semibold">{step}</h3>
                                </div>
                            )
                        )}
                    </div>
                </Container>
            </div>

            {/* PRICING */}
            {/* <Container className="py-20">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Simple, Transparent Pricing
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <PricingCard
                        plan="Starter"
                        price="29"
                        features={["Up to 500 replies", "Email support", "Basic analytics"]}
                    />

                    <PricingCard
                        plan="Professional"
                        price="79"
                        highlighted
                        features={[
                            "5,000 AI replies/month",
                            "Multi-business",
                            "Priority support",
                        ]}
                    />

                    <PricingCard
                        plan="Business"
                        price="199"
                        features={[
                            "Unlimited AI replies",
                            "Advanced analytics",
                            "Dedicated support",
                        ]}
                    />
                </div>
            </Container> */}


            {/* FAQ Section  */}
            <div id="faq">
                <FAQSection />
            </div>

            {/* CTA */}
            <div className="py-20">
                <Container>
                    <div className="rounded-3xl p-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to automate your business?
                        </h2>
                        <p className="mb-8 text-white/90">
                            Start your 14-day free trial today. No credit card required.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link to="/signup"><Button>Get Started Free</Button></Link>
                            {/* <Button variant="secondary">Book a Demo</Button> */}
                        </div>
                    </div>
                </Container>
            </div>

            {/* FOOTER */}
            <Footer />
        </div>
    );
}
