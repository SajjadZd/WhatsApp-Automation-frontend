import React from 'react'
import Container from './Container'
import Button from './Button'
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import IMG from "../assets/LandingPageIMG.jpg"


export const HeroSection = () => {
    return (
        <>
            <Container className="py-20 grid md:grid-cols-2 gap-12 items-center">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Automate Your <span className="text-blue-600">Business</span>{" "}
                        Replies with AI
                    </h1>
                    <p className="text-gray-600 mb-8 max-w-lg">
                        Revolutionize customer engagement with AI-powered automation
                        for WhatsApp and SMS. Save 10+ hours a week and scale your
                        business effortlessly.
                    </p>
                    <div className="flex">
                        <Link to="/signup"><Button>Get Started Free</Button></Link>
                        <Button variant="secondary">Log in to Dashboard</Button>
                    </div>
                </Motion.div>

                <Motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl shadow-xl p-6"
                >
                    <div className="bg-red-100 rounded-2xl h-64 overflow-hidden " >
                        <img className="w-full h-full object-fill" src={IMG} alt="LandingPageIMG" />
                    </div>
                </Motion.div>
            </Container>
        </>
    )
}
