import React from 'react';
import { useRouter } from 'next/navigation';

interface SceneCardProps {
    id: string;
    name: string;
}

const SceneCard: React.FC<SceneCardProps> = ({ id, name }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/scenes/${id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="
                flex flex-col items-center justify-center w-fit h-fit p-4 gap-3
                bg-white/10 backdrop-blur-xl 
                rounded-2xl border border-white/20 
                shadow-2xl transition-transform transform 
                hover:-translate-y-2 hover:scale-105 hover:bg-white/20 duration-500
                cursor-pointer
            "
        >
            <div className="w-60 h-36 bg-black rounded-xl"></div>
            <h2 className="text-lg font-semibold text-white drop-shadow-lg tracking-tight">{name}</h2>
        </div>
    );
};

export default SceneCard; 