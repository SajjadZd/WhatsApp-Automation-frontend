import React from 'react'
import Container from './Container'

const Footer = () => {
    return (
        <>
            <div className="bg-white border-t py-10 text-sm text-gray-500">
                <Container className="flex flex-col md:flex-row justify-between gap-6">
                    <div>© {new Date().getFullYear()} AutoReply AI</div>
                    <div className="flex gap-6">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Contact</a>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer