import React from 'react'
import FeatureCard from './FeatureCard'
import Container from './Container'
import { Bot, Phone, FileText, Users, RefreshCw, User } from "lucide-react";

export const Features = () => {
    return (
        <>
            <Container className="py-16">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Powerful Features for Modern Businesses
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    <FeatureCard
                        title="AI Auto Replies"
                        desc="Instant intelligent responses across your support channels."
                    >
                        <Bot className="w-5 h-5 text-blue-600" />
                    </FeatureCard>
                    <FeatureCard
                        title="Multi-business Support"
                        desc="Manage multiple numbers and brands from one dashboard."
                    >
                        <RefreshCw className="w-5 h-5 text-blue-600" />
                    </FeatureCard>
                    <FeatureCard
                        title="FAQ Training"
                        desc="Train your bot on your knowledge base easily."
                    >
                        <FileText className="w-5 h-5 text-blue-600" />
                    </FeatureCard>
                    <FeatureCard
                        title="Smart Fallback"
                        desc="Seamless handoff when AI confidence is low."
                    >
                        <User className="w-5 h-5 text-blue-600" />
                    </FeatureCard>
                    <FeatureCard
                        title="Phone Integration"
                        desc="Works with WhatsApp Business and SMS providers."
                    >
                        <Phone className="w-5 h-5 text-blue-600" />
                    </FeatureCard>
                    <FeatureCard
                        title="Human Takeover"
                        desc="Jump into any chat when needed in one click."
                    >
                        <Users className="w-5 h-5 text-blue-600" />
                    </FeatureCard>
                </div>
            </Container>
        </>
    )
}
