import { useModalContext } from '@/hooks/useModalContext';
import { formatDate } from '@/lib/formatDate';
import { ExtendedNote, NotePropsType } from '@/types/note';
import { Link, usePage } from '@inertiajs/react';
import clsx from 'clsx';

type NoteItemProps = {
    note: ExtendedNote;
    noteProps: NotePropsType;
};

export default function NoteItem({ note, noteProps }: NoteItemProps) {
    const { openNotePage } = useModalContext();
    const { url } = usePage();

    const queryParams = new URLSearchParams(url.split('?')[1]);
    const currentNoteId = Number(queryParams.get('note_id')) || null;

    const isCurrent = currentNoteId === note.id;

    return (
        <Link
            preserveState
            preserveScroll
            onClick={openNotePage}
            href={url}
            data={{ note_id: note.id, page: noteProps.page }}
            className={clsx('border-colors block space-y-3 rounded-lg border-b p-2 pb-3', isCurrent && 'bg-gray-pale dark:bg-black-pale border-none')}
        >
            <p className="font-bold">{note.title}</p>
            <ul className="flex flex-wrap items-center gap-1">
                {note.tags.map((tag) => (
                    <li key={tag.id} className="title-text rounded-sm bg-[#E0E4EA] px-1.5 py-1 text-xs dark:bg-[#232530]">
                        {tag.name}
                    </li>
                ))}
            </ul>
            <p className="body-text text-xs">{note.updated_at ? formatDate(new Date(note.updated_at), { dateStyle: 'medium' }) : 'No update date'}</p>
        </Link>
    );
}
