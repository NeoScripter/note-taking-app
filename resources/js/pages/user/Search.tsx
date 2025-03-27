import EditNote from '@/components/noteLayout/EditNote';
import NoteCard from '@/components/noteLayout/NoteCard';
import NoteMobileBar from '@/components/noteLayout/NoteMobileBar';
import ArchiveIcon from '@/components/svgs/ArchiveIcon';
import TrashIcon from '@/components/svgs/TrashIcon';
import { useModalContext } from '@/hooks/useModalContext';
import useTrans from '@/hooks/useTrans';
import NoteLayout from '@/layouts/NoteLayout';
import UserLayout from '@/layouts/UserLayout';
import { DashboardProps } from '@/types/note';

const Search = ({ note }: DashboardProps) => {
    const { openDeleteModal, openArchiveModal, isEdited, startEditing } = useModalContext();
    const t = useTrans();

    if (note == null) return null;

    return (
        <>
            {isEdited == false && (
                <NoteMobileBar>
                    <button onClick={openDeleteModal} className="cursor-pointer">
                        <TrashIcon />
                    </button>
                    <button onClick={openArchiveModal} className="cursor-pointer">
                        <ArchiveIcon width="18" height="18" />
                    </button>
                    <button onClick={startEditing} className="text-primary-blue mr-2 cursor-pointer">
                    {t('Edit Note')}
                    </button>
                </NoteMobileBar>
            )}
            {isEdited ? <EditNote note={note} /> : <NoteCard note={note} />}
        </>
    );
};

Search.layout = (page: React.ReactElement) => (
    <UserLayout title="Note Flow - Search" header="Show results for: ">
        <NoteLayout header="Search">{page}</NoteLayout>
    </UserLayout>
);

export default Search;
