import NoteItem from '@/components/noteLayout/NoteItem';
import SkeletonList from '@/components/noteLayout/SkeletonList';
import PrimaryBtn from '@/components/shared/PrimaryBtn';
import SecondaryBtn from '@/components/shared/SecondaryBtn';
import ArchiveIcon from '@/components/svgs/ArchiveIcon';
import ChevronLeft from '@/components/svgs/ChevronLeft';
import RestoreIcon from '@/components/svgs/RestoreIcon';
import TrashIcon from '@/components/svgs/TrashIcon';
import { useModalContext } from '@/hooks/useModalContext';
import { ExtendedNote, NotePropsType } from '@/types/note';
import { usePage, WhenVisible } from '@inertiajs/react';
import { useEffect, useState } from 'react';

type NoteLayoutProps = {
    children: React.ReactElement;
    header: string;
};

export default function NoteLayout({ children, header }: NoteLayoutProps) {
    const { showNotePage, closeNotePage } = useModalContext();
    const { props } = usePage<NotePropsType>();
    const [notes, setNotes] = useState<ExtendedNote[]>(props.notes);

    useEffect(() => {
        setNotes((prevNotes) => {
            const existingIds = new Set(prevNotes.map((note) => note.id));
            const newNotes = props.notes.filter((note) => !existingIds.has(note.id));
            return [...prevNotes, ...newNotes];
        });
    }, [props.notes]);

    useEffect(() => {
        setNotes(props.notes);
    }, [route().current(), props.tag]);

    return (
        <div className="relative md:flex">
            <div className="border-colors flex-1 md:max-w-72.5 md:border-r md:py-5 md:pr-4 md:pl-8">
                <p className="mb-4 text-2xl ml-2 font-bold md:hidden">{header}</p>
                <PrimaryBtn className="mb-4 hidden w-full md:block">Create new Note</PrimaryBtn>
                <nav>
                    <ul className="notes-height scrollbar-hidden space-y-2 overflow-y-auto" scroll-region="true">
                        {notes.map((note) => (
                            <NoteItem key={note.id} note={note} noteProps={props} />
                        ))}
                        {props.isNextPageExists && (
                            <WhenVisible
                                as="div"
                                always
                                params={{
                                    data: {
                                        page: +props.page + 1,
                                    },
                                    only: ['notes', 'page', 'isNextPageExists'],
                                }}
                                fallback={<SkeletonList />}
                            >
                                <SkeletonList />
                            </WhenVisible>
                        )}
                    </ul>
                </nav>
            </div>
            <article className="w-full flex-1 md:flex md:items-stretch">
                {showNotePage && (
                    <>
                        <div className="bg-colors absolute inset-0 z-40 flex-1 md:static md:py-5 md:px-6">
                            <div className="body-text xs:gap-4 border-colors mb-4 flex items-center justify-end gap-3 border-b pb-4 text-sm md:hidden">
                                <button onClick={closeNotePage} className="mr-auto flex cursor-pointer items-center gap-2">
                                    <ChevronLeft />
                                    Go Back
                                </button>
                                <button className="cursor-pointer">
                                    <TrashIcon />
                                </button>
                                <button className="cursor-pointer">
                                    <ArchiveIcon width="18" height="18" />
                                </button>
                                <button className="cursor-pointer">Cancel</button>
                                <button className="text-primary-blue mr-2 cursor-pointer">Save Note</button>
                            </div>
                            {children}
                        </div>
                        <div className="border-colors hidden flex-1 md:block md:space-y-3 md:w-full md:max-w-62.5 md:border-l md:py-5 md:pr-8 md:pl-4">
                            <SecondaryBtn className='w-full'>
                                <RestoreIcon />
                                Restore Note
                            </SecondaryBtn>
                            <SecondaryBtn className='w-full'>
                                <TrashIcon width='20' height='20' />
                                Delete Note
                            </SecondaryBtn>
                        </div>
                    </>
                )}
            </article>
        </div>
    );
}
