import { ROUTES } from '@/consts/routeNames';
import { useModalContext } from '@/hooks/useModalContext';

export default function EmptyNoteMessage() {
    const { openCreateNew, openNotePage } = useModalContext();

    const renderMessageContent = () => {
        if (route().current() === ROUTES.SEARCH) {
            return (
                <p>
                    No notes match your search. Try a different keyword or{' '}
                    <button
                        className="cursor-pointer underline underline-offset-4"
                        onClick={() => {
                            openNotePage();
                            openCreateNew();
                        }}
                    >
                        create a new note.
                    </button>
                </p>
            );
        } else if (route().current() === ROUTES.ARCHIVE) {
            return (
                <p>
                    No notes have been archived yet. Move notes here for safekeeping, or{' '}
                    <button
                        className="cursor-pointer underline underline-offset-4"
                        onClick={() => {
                            openNotePage();
                            openCreateNew();
                        }}
                    >
                        create a new note.
                    </button>
                </p>
            );
        } else if (route().current() === ROUTES.HOME) {
            return <p>You don’t have any notes yet. Start a new note to capture your thoughts and ideas.</p>;
        } else {
            return null;
        }
    };

    const messageContent = renderMessageContent();

    return messageContent === null ? null : (
        <div className="border-colors light-bg-colors rounded-xl border p-2 text-sm md:text-base">{messageContent}</div>
    );
}
