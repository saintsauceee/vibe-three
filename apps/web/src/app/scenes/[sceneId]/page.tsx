import React from 'react'

interface ScenePageProps {
    params: {
        sceneId: string
    }
}

const ScenePage: React.FC<ScenePageProps> = ({ params }) => {
    const { sceneId } = params

    return (
        <div className="w-screen h-screen">
            <div className="absolute top-2 left-2">
                Project ID: {sceneId}
            </div>
        </div>
    )
}

export default ScenePage;