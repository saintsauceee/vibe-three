import React from 'react';

export default function Page({ params }: { params: { sceneId: string } }) {
    const { sceneId } = params;

    return (
        <div className="w-screen h-screen">
            <div className="absolute top-2 left-2">
                Project ID: {sceneId}
            </div>
        </div>
    );
}