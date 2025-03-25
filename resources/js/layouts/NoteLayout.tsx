import SearchNotes from '@/components/forms/SearchNotes';
import NewNote from '@/components/noteLayout/NewNote';
import NoteList from '@/components/noteLayout/NoteList';
import SidePanel from '@/components/noteLayout/SidePanel';
import PrimaryBtn from '@/components/shared/PrimaryBtn';
import { useModalContext } from '@/hooks/useModalContext';
import { useScreenResize } from '@/hooks/useScreenResize';
import { PlusIcon } from '@radix-ui/react-icons';

type NoteLayoutProps = {
    children: React.ReactElement;
    header: string;
};

export default function NoteLayout({ children, header }: NoteLayoutProps) {
    const { showNotePage, openNotePage, showCreateNew, openCreateNew, isEdited } = useModalContext();
    const isLarge = useScreenResize();

    return (
        <div className="md:flex">
            <div className="border-colors flex-1 md:max-w-72.5 md:border-r md:py-5 md:pr-4 md:pl-8">
                <p className="mb-4 ml-2 text-2xl font-bold md:hidden">{header}</p>

                {(route().current() === 'search' && !isLarge) && <SearchNotes />}
                <PrimaryBtn
                    onClick={() => {
                        openCreateNew();
                        openNotePage();
                    }}
                    className="shadow-create-btn dark:shadow-create-btn-dark fixed right-4 bottom-18 z-[25] flex size-12 items-center justify-center rounded-full! sm:right-9 sm:bottom-26.5 sm:size-16 md:static md:mb-4 md:size-auto md:w-full md:rounded-lg! md:shadow-none"
                >
                    <PlusIcon className="size-8 shrink-0 md:hidden" />
                    <span className="hidden md:block">+ Create New Note</span>
                </PrimaryBtn>
                <NoteList />
            </div>
            {showNotePage && (
                <article className="w-full flex-1 md:flex md:items-stretch">
                    <div className="bg-colors absolute inset-0 z-40 flex-1 px-4 py-5 sm:px-8 sm:py-6 md:static md:p-0 md:px-6 md:py-5">
                        {showCreateNew ? <NewNote /> : children}
                    </div>
                    <div className="border-colors hidden flex-1 md:block md:w-full md:max-w-62.5 md:space-y-3 md:border-l md:py-5 md:pr-8 md:pl-4">
                        {(showCreateNew == false && isEdited == false) && <SidePanel />}
                    </div>
                </article>
            )}
        </div>
    );
}
