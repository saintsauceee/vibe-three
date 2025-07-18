'use client'

import React from 'react'
import { SAMPLE_SCENES } from '@/lib/constants'
import SceneCard from '@/components/ui/SceneCard';

const page = () => {
    return (
        <div
            className="flex flex-col w-screen h-screen items-center justify-center"
            style={{
                background: `
                    radial-gradient(ellipse at 70% 10%, #38bdf888 0%, transparent 60%), 
                    radial-gradient(ellipse at 20% 90%, #f9a8d488 0%, transparent 70%), 
                    radial-gradient(ellipse at center, #000 0%, #111827 100%)
                `
            }}
        >
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-6xl">
                {
                    SAMPLE_SCENES.map((scene, index) => (
                        <SceneCard
                            key={index}
                            id={scene.id}
                            name={scene.name}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default page