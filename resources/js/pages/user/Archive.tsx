import UserLayout from '@/layouts/UserLayout';
import { Note } from '@/types/note';

type ArchiveProps = {
    notes: Note[];
};

const Archive = ({ notes }: ArchiveProps) => {
    return (
        <>
            <h1>this is archive page</h1>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>{note.content}</li>
                ))}
            </ul>
        </>
    );
};

Archive.layout = (page: React.ReactElement) => <UserLayout children={page} title="Archive" header="Archived Notes" />;

export default Archive;
