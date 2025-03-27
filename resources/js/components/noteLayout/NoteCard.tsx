import { useModalContext } from '@/hooks/useModalContext';
import useTrans from '@/hooks/useTrans';
import { formatDate } from '@/lib/formatDate';
import { ExtendedNote } from '@/types/note';
import { capitalize } from '@/utils/capitalize';
import PrimaryBtn from '../shared/PrimaryBtn';
import SecondaryBtn from '../shared/SecondaryBtn';
import ClockIcon from '../svgs/ClockIcon';
import StatusIcon from '../svgs/StatusIcon';
import TagIcon from '../svgs/TagIcon';
import NoteInfo from './NoteInfo';

type NoteCardProps = {
    note: ExtendedNote;
};

export default function NoteCard({ note }: NoteCardProps) {
    const { closeNotePage, startEditing } = useModalContext();
    const t = useTrans();
    return (
        <div className="notes-height bg-colors flex flex-col">
            <header className="select-none">
                <p className="mb-4 text-2xl font-bold">{note.title}</p>
                <div className="title-text border-colors mb-4 space-y-3.5 border-b pb-4 text-xs sm:text-sm">
                    <NoteInfo info={note.tags.map((tag) => capitalize(tag.name)).join(', ')}>
                        <TagIcon width="16" height="16" />
                        {t('Tags')}
                    </NoteInfo>
                    <NoteInfo info={note.archived ? t('Archived') : t('active')}>
                        <StatusIcon width="16" height="16" />
                        {t('Status')}
                    </NoteInfo>
                    <NoteInfo info={note.updated_at ? formatDate(new Date(note.updated_at), { dateStyle: 'medium' }) : 'No update date'}>
                        <ClockIcon width="16" height="16" />
                        {t('Last edited')}
                    </NoteInfo>
                </div>
            </header>
            <div className="scrollbar-hidden overflow-y-auto py-1 text-sm md:text-base">
                <pre className="break-words whitespace-pre-wrap">
                    <code>{note.content}</code>
                </pre>
            </div>
            <div className="border-colors mt-auto hidden items-center gap-4 border-t pt-4 md:flex">
                <PrimaryBtn onClick={startEditing}>{t('Edit Note')}</PrimaryBtn>
                <SecondaryBtn onClick={closeNotePage}>{t('Hide')}</SecondaryBtn>
            </div>
        </div>
    );
}
