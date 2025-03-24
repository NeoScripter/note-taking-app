import NoteCard from '@/components/noteLayout/NoteCard';
import NoteLayout from '@/layouts/NoteLayout';
import UserLayout from '@/layouts/UserLayout';
import { DashboardProps } from '@/types/note';

const Archive = ({ note }: DashboardProps) => {
    if (note == null) return null;

    return <NoteCard note={note} />;
};


Archive.layout = (page: React.ReactElement) => (
    <UserLayout title="Archive" header="Archived Notes">
        <NoteLayout header="Archived Notes">
            {page}
        </NoteLayout>
    </UserLayout>
);

export default Archive;
