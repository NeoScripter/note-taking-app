import NoteCard from '@/components/noteLayout/NoteCard';
import NoteMobileBar from '@/components/noteLayout/NoteMobileBar';
import ArchiveIcon from '@/components/svgs/ArchiveIcon';
import TrashIcon from '@/components/svgs/TrashIcon';
import { useModalContext } from '@/hooks/useModalContext';
import NoteLayout from '@/layouts/NoteLayout';
import UserLayout from '@/layouts/UserLayout';
import { DashboardProps } from '@/types/note';

const Dashboard = ({ note }: DashboardProps) => {
    const { closeNotePage } = useModalContext();

    if (note == null) return null;

    return (
        <>
            <NoteMobileBar>
                <button className="cursor-pointer">
                    <TrashIcon />
                </button>
                <button className="cursor-pointer">
                    <ArchiveIcon width="18" height="18" />
                </button>
                <button onClick={closeNotePage} className="cursor-pointer">Hide</button>
                <button className="text-primary-blue mr-2 cursor-pointer">Edit Note</button>
            </NoteMobileBar>
            <NoteCard note={note} />
        </>
    );
};

Dashboard.layout = (page: React.ReactElement) => (
    <UserLayout title="Dashboard" header="All Notes">
        <NoteLayout header="All Notes">{page}</NoteLayout>
    </UserLayout>
);

export default Dashboard;
