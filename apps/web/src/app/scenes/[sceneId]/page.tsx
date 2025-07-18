import React from 'react';

export default async function Page({ params }: {
    params: Promise<{ sceneId: string }>
}) {
    const { sceneId } = await params;

    return (
        <div className="w-screen h-screen">
            <div className="absolute top-2 left-2">
                Project ID: {sceneId}
            </div>
        </div>
    );
}