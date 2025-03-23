import UserLayout from '@/layouts/UserLayout';
import { Note } from '@/types/note';

type DashboardProps = {
    user: {
        name: string;
    };
    notes: Note[];
};
const Dashboard = ({ user, notes }: DashboardProps) => {
    return (
        <>
            <h1>Welcome, {user.name}</h1>
            <p>Hello, welcome to your first Inertia app!</p>

            <ul>
                {notes.map(note => (
                    <li key={note.id}>
                        {note.content}
                    </li>
                ))}
            </ul>

        </>
    );
};

Dashboard.layout = (page: React.ReactElement) => (
    <UserLayout
        children={page}
        title="Dashboard"
        header="All Notes"
    />
);

export default Dashboard;
