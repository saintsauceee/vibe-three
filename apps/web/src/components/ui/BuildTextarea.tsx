import React, { useRef, useState, useEffect } from 'react'
import { ChevronRight, Paperclip } from 'lucide-react'

const BuildTextarea = () => {
    const [value, setValue] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        }
    }, [value]);

    return (
        <div className="relative flex flex-col items-center w-full max-w-2xl">
            <textarea
                ref={textareaRef}
                rows={2}
                className="
                    w-full px-6 py-4 pb-16 bg-black/40 backdrop-blur-2xl 
                    rounded-3xl text-white text-md font-medium placeholder-gray-400/70 
                    focus:outline-none focus:ring-3 focus:ring-cyan-300/70
                    transition-colors duration-500 resize-none
                "
                placeholder="Describe your 3D scene..."
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button
                className="
                    absolute bottom-3.5 left-3.5 flex items-center justify-center
                    w-9 h-9 rounded-full border border-gray-400/20 bg-transparent
                    text-gray-400 hover:bg-gray-700/10 hover:text-cyan-400 transition-colors duration-150
                    shadow-none focus:outline-none
                "
                style={{ zIndex: 2 }}
                type="button"
                disabled={!value.trim() || value.length > 500}
            >
                <Paperclip
                    size={14}
                />
            </button>
            <button
                className="
                    absolute bottom-3.5 right-3.5 flex items-center justify-center
                    w-9 h-9 rounded-full border border-cyan-400/20 bg-cyan-400/5
                    text-cyan-300 hover:bg-cyan-400/10 hover:text-white transition-colors duration-150
                    shadow-none focus:outline-none
                "
                style={{ zIndex: 2 }}
                type="button"
            >
                <ChevronRight
                    size={14}
                />
            </button>
        </div>
    )
}

export default BuildTextarea