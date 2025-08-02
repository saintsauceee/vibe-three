import React from 'react'
import ChatMessage from './ChatMessage'

const Chat = () => {
    return (
        <div className="absolute top-4 left-4 flex flex-row w-[500px] h-[500px] bg-black/40 rounded-lg overflow-y-auto">
            <div className="
                flex flex-col w-full gap-4 p-2 rounded-lg bg-gradient-to-r from-white/5 to-white/10
            ">
                <ChatMessage
                    role="user"
                    content="Good morning!"
                />
                <ChatMessage
                    role="assistant"
                    content="Hello, how can I help you?"
                />
            </div>
        </div>
    )
}

export default Chat