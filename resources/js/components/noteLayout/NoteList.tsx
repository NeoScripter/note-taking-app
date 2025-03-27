import { ExtendedNote, NotePropsType } from '@/types/note';
import { usePage, WhenVisible } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import EmptyNoteMessage from './EmptyNoteMessage';
import NoteItem from './NoteItem';
import SkeletonList from './SkeletonList';
import { getSearchQuery } from '@/utils/getSearchQuery';

type NoteListProps = NotePropsType & {
    flash?: {
        message?: {
            id: string;
            text: string;
          };
    };
};

export default function NoteList() {
    const { props } = usePage<NoteListProps>();
    const [notes, setNotes] = useState<ExtendedNote[]>(props.notes);
    const query = getSearchQuery();

    useEffect(() => {
        setNotes((prevNotes) => {
            const existingIds = new Set(prevNotes.map((note) => note.id));
            const newNotes = props.notes.filter((note) => !existingIds.has(note.id));
            return [...prevNotes, ...newNotes];
        });
    }, [props.notes]);

    useEffect(() => {
        setNotes(props.notes);
    }, [route().current(), props.tag, props.flash?.message?.id, query]);

    return (
        <nav>
            <ul className="notes-height scrollbar-hidden space-y-2 overflow-y-auto select-none" scroll-region="true">
                {notes.length > 0 ? notes.map((note) => <NoteItem key={note.id} note={note} noteProps={props} />) : <EmptyNoteMessage />}
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
