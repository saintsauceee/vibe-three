import React from 'react'

interface ChatMessageProps {
    role: 'user' | 'assistant';
    content: string;
}


const ChatMessage: React.FC<ChatMessageProps> = ({ role, content }) => {
    const isUser = role === 'user';
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: isUser ? 'flex-end' : 'flex-start',
            }}
        >
            <div
                className={`
                    max-w-[70%] py-3 px-4.5
                    rounded-[18px]
                    ${isUser ? 'bg-gradient-to-r from-indigo-500 to-indigo-400' : 'bg-gray-100'}
                    ${isUser ? 'text-white' : 'text-gray-800'} text-base break-words shadow-sm
                    transition-colors duration-200
                `}
            >
                {content}
            </div>
        </div>
    );
}

export default ChatMessage