import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { router } from '@inertiajs/react';
import ArchiveIcon from '../svgs/ArchiveIcon';
import TrashIcon from '../svgs/TrashIcon';
import SecondaryBtn from './SecondaryBtn';
import { useModalContext } from '@/hooks/useModalContext';
import clsx from 'clsx';
import useNoteId from '@/hooks/useNoteId';

type DialogModalProps = {
    close: () => void;
    isOpen: boolean;
    isDelete?: boolean;
};
export default function DialogModal({ close, isOpen, isDelete = true }: DialogModalProps) {
    const noteId = useNoteId();
    const { closeNotePage } = useModalContext();

    const renderDescription = () => {
        return isDelete
            ? 'Are you sure you want to permanently delete this note? This action cannot be undone.'
            : 'Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.';
    };

    const renderAction = () => {
        if (noteId == null) return () => {};

        return isDelete ? () => {
                router.delete(route('notes.destroy', noteId));
             close();
             closeNotePage();
        } : () => {
            router.post(route('notes.archive', noteId));
         close();
         closeNotePage();
    }
    }

    return (
        <Dialog open={isOpen} onClose={close} className="relative z-50">
            <DialogBackdrop transition className="fixed inset-0 bg-black/50 duration-300 ease-out data-[closed]:opacity-0" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel
                    transition
                    className="bg-colors border-colors w-9/10 max-w-110 rounded-xl border duration-300 ease-in-out data-[closed]:scale-70"
                >
                    <div className="flex items-start gap-4 p-5">
                        <div className="light-bg-colors flex size-10 shrink-0 items-center justify-center rounded-xl">
                            {isDelete ? <TrashIcon width="24" height="25" /> : <ArchiveIcon width="24" height="25" />}
                        </div>
                        <div>
                            <DialogTitle className="mb-1.5 text-lg font-bold">{isDelete ? 'Delete Note' : 'Archive Note'}</DialogTitle>
                            <Description className="text-sm">{renderDescription()}</Description>
                        </div>
                    </div>
                    <div className="border-colors flex items-center justify-end gap-4 border-t px-5 py-4">
                        <SecondaryBtn onClick={close}>Cancel</SecondaryBtn>
                        <button
                            onClick={renderAction()}
                            className={clsx("theme-colors border-colors focus:shadow-btn cursor-pointer rounded-lg border px-4 py-3 text-sm font-medium text-white focus:ring-1", isDelete ? 'hover:bg-red-400 bg-red-500' : 'hover:bg-hover-blue bg-primary-blue')}
                        >
                            {isDelete ? 'Delete Note' : 'Archive Note'}
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
