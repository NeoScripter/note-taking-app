import { useModalContext } from '@/hooks/useModalContext';
import useNoteId from '@/hooks/useNoteId';
import { router } from '@inertiajs/react';
import SecondaryBtn from '../shared/SecondaryBtn';
import ArchiveIcon from '../svgs/ArchiveIcon';
import RestoreIcon from '../svgs/RestoreIcon';
import TrashIcon from '../svgs/TrashIcon';
import { ROUTES } from '@/consts/routeNames';
import useTrans from '@/hooks/useTrans';

export default function SidePanel() {
    const { openArchiveModal, openDeleteModal, closeNotePage } = useModalContext();
    const noteId = useNoteId();
    const t = useTrans();
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
                    {t('Restore Note')}
                </SecondaryBtn>
            ) : (
                <SecondaryBtn onClick={openArchiveModal} className="w-full">
                    <ArchiveIcon width="20" height="20" />
                    {t('Archive Note')}
                </SecondaryBtn>
            )}
            <SecondaryBtn onClick={openDeleteModal} className="w-full">
                <TrashIcon width="20" height="20" />
                {t('Delete Note')}
            </SecondaryBtn>
        </>
    );
}
