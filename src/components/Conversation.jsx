import React from 'react'

const Conversation = ({ title }) => {
    return (
        <div className="bg-white p-10 rounded-xl shadow text-center">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-gray-500 mt-2">
                This tab is now functional 🎉
            </p>
        </div>
    )
}

export default Conversation