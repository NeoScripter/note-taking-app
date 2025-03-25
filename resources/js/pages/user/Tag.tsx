import EditNote from '@/components/noteLayout/EditNote';
import NoteCard from '@/components/noteLayout/NoteCard';
import NoteMobileBar from '@/components/noteLayout/NoteMobileBar';
import ArchiveIcon from '@/components/svgs/ArchiveIcon';
import TrashIcon from '@/components/svgs/TrashIcon';
import { useModalContext } from '@/hooks/useModalContext';
import NoteLayout from '@/layouts/NoteLayout';
import UserLayout from '@/layouts/UserLayout';
import { DashboardProps } from '@/types/note';

const Tag = ({ note }: DashboardProps) => {
    const { openDeleteModal, openArchiveModal, isEdited, startEditing } = useModalContext();

    if (note == null) return null;

    return (
        <>
            {isEdited == false && (
                <NoteMobileBar>
                    <button onClick={openDeleteModal} className="cursor-pointer">
                        <TrashIcon />
                    </button>
                    <button onClick={openArchiveModal} className="cursor-pointer">
                        <ArchiveIcon width="18" height="18" />
                    </button>
                    <button onClick={startEditing} className="text-primary-blue mr-2 cursor-pointer">
                        Edit Note
                    </button>
                </NoteMobileBar>
            )}
            {isEdited ? <EditNote note={note} /> : <NoteCard note={note} />}
        </>
    );
};

Tag.layout = (page: React.ReactElement) => (
    <UserLayout title="Dashboard" header="Notes Tagged: ">
        <NoteLayout header="Tags">{page}</NoteLayout>
    </UserLayout>
);

export default Tag;
