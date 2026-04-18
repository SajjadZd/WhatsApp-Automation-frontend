import React from "react";
import Button from "./Button";
import Container from "./Container";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const navLinks = [
        { name: "Features", id: "features" },
        { name: "How it works", id: "how-it-works" },
        { name: "FAQ", id: "faq" },
    ];

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
            <Container className="flex items-center justify-between h-16">

                {/* Logo */}
                <div className="font-bold text-xl cursor-pointer">
                    AutoReply AI
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex gap-8 text-sm text-gray-600">
                    {navLinks.map((link, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToSection(link.id)}
                            className="relative group transition"
                        >
                            {link.name}

                            {/* Hover underline animation */}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                    ))}
                </div>

                {/* CTA */}
                <div>
                    <Link to="/signup">
                        <Button>Get Started Free</Button>
                    </Link>
                    <Button variant="secondary">Log in to Dashboard</Button>
                </div>
            </Container>
        </div>
    );
};