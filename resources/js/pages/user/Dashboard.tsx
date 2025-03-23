import NoteShow from '@/components/shared/NoteShow';
import NoteLayout from '@/layouts/NoteLayout';
import UserLayout from '@/layouts/UserLayout';
import { ExtendedNote, Note } from '@/types/note';

type DashboardProps = {
    user: {
        name: string;
    };
    notes: Note[];
    note?: ExtendedNote | null;
};
const Dashboard = ({ user, note, notes }: DashboardProps) => {

    return (
        <>
            <h1>Welcome, {user.name}</h1>
            <p>Hello, welcome to your first Inertia app!</p>
            <p>You currently have {notes.length} notes</p>

            {note && <NoteShow note={note} />}
        </>
    );
};

Dashboard.layout = (page: React.ReactElement) => (
    <UserLayout title="Dashboard" header="All Notes">
        <NoteLayout header="All Notes">{page}</NoteLayout>
    </UserLayout>
);

export default Dashboard;
