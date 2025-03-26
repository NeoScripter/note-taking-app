import EditNote from '@/components/noteLayout/EditNote';
import NoteCard from '@/components/noteLayout/NoteCard';
import NoteMobileBar from '@/components/noteLayout/NoteMobileBar';
import RestoreIcon from '@/components/svgs/RestoreIcon';
import TrashIcon from '@/components/svgs/TrashIcon';
import { useModalContext } from '@/hooks/useModalContext';
import useNoteId from '@/hooks/useNoteId';
import NoteLayout from '@/layouts/NoteLayout';
import UserLayout from '@/layouts/UserLayout';
import { DashboardProps } from '@/types/note';
import { router } from '@inertiajs/react';

const Archive = ({ note }: DashboardProps) => {
    const { closeNotePage, openDeleteModal, startEditing, isEdited } = useModalContext();

    const noteId = useNoteId();

    function restoreNote() {
        if (noteId) {
            router.post(route('notes.restore', noteId));
        }
        closeNotePage();
    }

    if (note == null) return null;

    return (
        <>
            {isEdited == false && (
                <NoteMobileBar>
                    <button onClick={openDeleteModal} className="cursor-pointer">
                        <TrashIcon />
                    </button>
                    <button onClick={restoreNote} className="cursor-pointer">
                        <RestoreIcon width="18" height="18" />
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

Archive.layout = (page: React.ReactElement) => (
    <UserLayout title="Note Flow - Archive" header="Archived Notes">
        <NoteLayout header="Archived Notes">{page}</NoteLayout>
    </UserLayout>
);

export default Archive;
