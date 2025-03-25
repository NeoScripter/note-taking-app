import { formatDate } from '@/lib/formatDate';
import { ExtendedNote } from '@/types/note';
import PrimaryBtn from '../shared/PrimaryBtn';
import SecondaryBtn from '../shared/SecondaryBtn';
import ClockIcon from '../svgs/ClockIcon';
import StatusIcon from '../svgs/StatusIcon';
import TagIcon from '../svgs/TagIcon';
import NoteInfo from './NoteInfo';
import { useModalContext } from '@/hooks/useModalContext';
import { capitalize } from '@/utils/capitalize';

type NoteCardProps = {
    note: ExtendedNote;
};

export default function NoteCard({ note }: NoteCardProps) {
    const { closeNotePage, startEditing } = useModalContext();
    return (
        <div className="notes-height flex flex-col">
            <header>
                <p className="mb-4 text-2xl font-bold">{note.title}</p>
                <div className="title-text border-colors mb-4 space-y-3.5 border-b pb-4 text-xs sm:text-sm">
                    <NoteInfo info={note.tags.map((tag) => capitalize(tag.name)).join(', ')}>
                        <TagIcon width="16" height="16" />
                        Tags
                    </NoteInfo>
                    <NoteInfo info={note.archived ? 'Archived' : 'Active'}>
                        <StatusIcon width="16" height="16" />
                        Status
                    </NoteInfo>
                    <NoteInfo info={note.updated_at ? formatDate(new Date(note.updated_at), { dateStyle: 'medium' }) : 'No update date'}>
                        <ClockIcon width="16" height="16" />
                        Last edited
                    </NoteInfo>
                </div>
            </header>
            <div className="text-sm md:text-base overflow-y-auto scrollbar-hidden">
                <pre className="break-words whitespace-pre-wrap">
                    <code>{note.content}</code>
                </pre>
            </div>
            <div className="border-colors mt-auto hidden items-center gap-4 border-t pt-4 md:flex">
                <PrimaryBtn onClick={startEditing}>Edit Note</PrimaryBtn>
                <SecondaryBtn onClick={closeNotePage}>Hide</SecondaryBtn>
            </div>
        </div>
    );
}
