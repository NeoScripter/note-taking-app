import { useModalContext } from '@/hooks/useModalContext';
import useNoteId from '@/hooks/useNoteId';
import { router } from '@inertiajs/react';
import SecondaryBtn from '../shared/SecondaryBtn';
import ArchiveIcon from '../svgs/ArchiveIcon';
import RestoreIcon from '../svgs/RestoreIcon';
import TrashIcon from '../svgs/TrashIcon';
import { ROUTES } from '@/consts/routeNames';

export default function SidePanel() {
    const { openArchiveModal, openDeleteModal, closeNotePage } = useModalContext();
    const noteId = useNoteId();
    return (
        <>
            {route().current() === ROUTES.ARCHIVE ? (
                <SecondaryBtn
                    onClick={() => {
                        if (noteId) {
                            router.post(route('notes.restore', noteId));
                        }
                        closeNotePage();
                    }}
                    className="w-full"
                >
                    <RestoreIcon />
                    Restore Note
                </SecondaryBtn>
            ) : (
                <SecondaryBtn onClick={openArchiveModal} className="w-full">
                    <ArchiveIcon width="20" height="20" />
                    Archive Note
                </SecondaryBtn>
            )}
            <SecondaryBtn onClick={openDeleteModal} className="w-full">
                <TrashIcon width="20" height="20" />
                Delete Note
            </SecondaryBtn>
        </>
    );
}
