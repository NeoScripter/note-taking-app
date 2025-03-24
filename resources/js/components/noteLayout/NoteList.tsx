import { ExtendedNote, NotePropsType } from '@/types/note';
import { usePage, WhenVisible } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import NoteItem from './NoteItem';
import SkeletonList from './SkeletonList';

export default function NoteList() {
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
    );
}
