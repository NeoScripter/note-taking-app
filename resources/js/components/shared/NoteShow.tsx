import { ExtendedNote } from "@/types/note";

type NoteShowProps = {
    note: ExtendedNote;
}

export default function NoteShow({ note }: NoteShowProps) {

    return (
        <>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">{note.title}</h1>

                <div className="mb-4">
                    <p>{note.content}</p>
                </div>

                <div className="flex gap-2">
                    {note.tags.map(tag => (
                        <span key={tag.id} className="bg-gray-200 px-2 py-1 rounded text-sm">
                            {tag.name}
                        </span>
                    ))}
                </div>

                <p className="text-xs text-gray-500 mt-4">Last updated: {note.updated_at}</p>
            </div>
        </>
    );
}
