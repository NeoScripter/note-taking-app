import { ROUTES } from '@/consts/routeNames';
import useTrans from '@/hooks/useTrans';
import { NotePropsType } from '@/types/note';
import { capitalize } from '@/utils/capitalize';
import { usePage } from '@inertiajs/react';

export default function NoteListSummary() {
    const { props } = usePage<NotePropsType>();
    const t = useTrans();

    const renderMessageContent = () => {
        if (route().current() === ROUTES.ARCHIVE) {
            return <p>{t('All your archived notes are stored here. You can restore or delete them anytime.')}</p>;
        } else if (route().current() === ROUTES.TAG) {
            return <p>{t('All notes with the ')}”{props.tag ? capitalize(props.tag) : ''}”{t(' tag are shown here.')}</p>;
        } else {
            return null;
        }
    };

    const messageContent = renderMessageContent();

    return messageContent === null ? null : <div className="px-2 my-2 text-sm">{messageContent}</div>;
}
