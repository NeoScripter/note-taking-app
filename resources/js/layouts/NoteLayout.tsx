import ChevronLeft from '@/components/svgs/ChevronLeft';
import { formatDate } from '@/lib/formatDate';
import { ExtendedNote } from '@/types/note';
import { Link, usePage } from '@inertiajs/react';
import clsx from 'clsx';
import { useState } from 'react';

type NoteLayoutProps = {
    children: React.ReactElement;
    header: string;
};

export type Paginated<T> = {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    next_page_url: string | null;
    prev_page_url: string | null;
};

export default function NoteLayout({ children, header }: NoteLayoutProps) {
    const { props } = usePage<{ notes: ExtendedNote[] }>();
    const [showPage, setShowPage] = useState(true);

    return (
        <div className="relative md:flex">
            <div className="border-colors flex-1 md:min-h-screen md:max-w-72.5 md:border-r md:px-4 md:py-4">
                <p className="mb-4 text-2xl font-bold md:hidden">{header}</p>
                <nav>
                    <ul className="space-y-2 px-4 sm:px-8 md:pr-0 md:pl-4">
                        {props.notes.map((note) => (
                            <NoteItem key={note.id} note={note} />
                        ))}
                    </ul>
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
};

function NoteItem({ note }: NoteItemProps) {
    const { url } = usePage();

    const currentNoteId = Number(url.split('/').pop());

    const isCurrent = currentNoteId === note.id;

    return (
        <Link preserveScroll href={route(route().current() || 'home', note.id)} className={clsx("border-colors block space-y-3 border-b p-2 pb-3", isCurrent && 'bg-red-400')}>
            <p className="font-bold">{note.title}</p>
            <ul className="flex flex-wrap items-center gap-1">
                {note.tags.map((tag) => (
                    <li key={tag.id} className="bg-gray-neutral title-text rounded-sm px-1.5 py-1 text-xs dark:bg-[#232530]">
                        {tag.name}
                    </li>
                ))}
            </ul>
            <p className="body-text text-xs">
                {note.updated_at ? formatDate(new Date(note.updated_at), { dateStyle: 'medium' }) : 'No update date'}
            </p>
        </Link>
    );
}
