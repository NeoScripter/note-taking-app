import NoteCard from '@/components/noteLayout/NoteCard';
import NoteLayout from '@/layouts/NoteLayout';
import UserLayout from '@/layouts/UserLayout';
import { DashboardProps } from '@/types/note';

const Dashboard = ({ note }: DashboardProps) => {
    if (note == null) return null;

    return <NoteCard note={note} />;
};

Dashboard.layout = (page: React.ReactElement) => (
    <UserLayout title="Dashboard" header="All Notes">
        <NoteLayout header="All Notes">{page}</NoteLayout>
    </UserLayout>
);

export default Dashboard;

