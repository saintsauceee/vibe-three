import Chat from "@/components/editor/chat/Chat";

export default async function EditorPage({ params }: { params: { id: string } }) {
    return (
        <div className="flex flex-col w-screen h-screen p-2 bg-white">
            <Chat />
        </div>
    );
}