import ChevronLeft from '@/components/svgs/ChevronLeft';
import { formatDate } from '@/lib/formatDate';
import { ExtendedNote } from '@/types/note';
import { Link, usePage, WhenVisible } from '@inertiajs/react';
import clsx from 'clsx';
import { useState } from 'react';

type NoteLayoutProps = {
    children: React.ReactElement;
    header: string;
};

export default function NoteLayout({ children, header }: NoteLayoutProps) {
    const [showPage, setShowPage] = useState(true);
    const { props } = usePage<{
        notes: ExtendedNote[];
        isNextPageExists: boolean;
        page: number;
    }>();

    return (
        <div className="relative md:flex">
            <div className="border-colors flex-1 md:min-h-screen md:max-w-72.5 md:border-r md:px-4 md:py-4">
                <p className="mb-4 text-2xl font-bold md:hidden">{header}</p>
                <nav>
                    <ul className="space-y-2 px-4 sm:px-8 md:pr-0 md:pl-4">
                        {props.notes.map((note) => (
                            <NoteItem key={note.id} note={note} onClick={() => setShowPage(true)} />
                        ))}
                    </ul>

                    {props.isNextPageExists && (
                        <WhenVisible
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
                </nav>
            </div>
            <article className="max-w-146 flex-1">
                {showPage && (
                    <div className="bg-colors absolute inset-0 z-10 md:static md:p-8">
                        <button
                            onClick={() => setShowPage(false)}
                            className="body-text mb-4 flex cursor-pointer items-center gap-2 text-sm md:hidden"
                        >
                            <ChevronLeft />
                            Go Back
                        </button>
                        {children}
                    </div>
                )}
            </article>
        </div>
    );
}

type NoteItemProps = {
    note: ExtendedNote;
    onClick: () => void;
};

function NoteItem({ note, onClick }: NoteItemProps) {
    const { url } = usePage();

    const currentNoteId = Number((url.split('/').pop() || '').split('?')[0]);

    const isCurrent = currentNoteId === note.id;

    return (
        <Link
            onClick={onClick}
            replace
            href={route(route().current() || 'home', note.id)}
            className={clsx('border-colors block space-y-3 rounded-lg border-b p-2 pb-3', isCurrent && 'bg-gray-pale dark:bg-black-pale border-none')}
        >
            <p className="font-bold">{note.title}</p>
            <ul className="flex flex-wrap items-center gap-1">
                {note.tags.map((tag) => (
                    <li key={tag.id} className="bg-[#E0E4EA] title-text rounded-sm px-1.5 py-1 text-xs dark:bg-[#232530]">
                        {tag.name}
                    </li>
                ))}
            </ul>
            <p className="body-text text-xs">{note.updated_at ? formatDate(new Date(note.updated_at), { dateStyle: 'medium' }) : 'No update date'}</p>
        </Link>
    );
}

function NoteItemSkeleton() {
    return (
        <li className="block animate-pulse space-y-3 rounded-lg border-b p-2 pb-3 text-transparent">
            <p className="bg-gray-pale dark:bg-black-pale">title</p>
            <ul className="flex flex-wrap items-center gap-1">
                {[0, 1, 2].map((number) => (
                    <li key={`NoteItemSkeleton-${number}`} className="bg-gray-pale dark:bg-black-pale rounded-sm px-1.5 py-1 text-xs">tag</li>
                ))}
            </ul>
            <p className="bg-gray-pale dark:bg-black-pale w-1/2 text-xs">timestamp</p>
        </li>
    );
}

function SkeletonList() {
    return (
        <ul className="space-y-2 px-4 sm:px-8 md:pr-0 md:pl-4">
            {[0, 1, 2, 3, 4, 5].map((number) => (
                <NoteItemSkeleton key={number + 'skeleton'} />
            ))}
        </ul>
    );
}
