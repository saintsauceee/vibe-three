import Chat from "@/components/editor/chat/Chat";

interface EditorPageProps {
    params: { id: string };
}

export default function EditorPage({ params }: EditorPageProps) {
    return (
        <div className="flex flex-col w-screen h-screen p-2 bg-white">
            <Chat />
        </div>
    );
}