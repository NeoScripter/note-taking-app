import NewNote from '@/components/noteLayout/NewNote';
import NoteList from '@/components/noteLayout/NoteList';
import PrimaryBtn from '@/components/shared/PrimaryBtn';
import SecondaryBtn from '@/components/shared/SecondaryBtn';
import RestoreIcon from '@/components/svgs/RestoreIcon';
import TrashIcon from '@/components/svgs/TrashIcon';
import { useModalContext } from '@/hooks/useModalContext';
import { PlusIcon } from '@radix-ui/react-icons';

type NoteLayoutProps = {
    children: React.ReactElement;
    header: string;
};

export default function NoteLayout({ children, header }: NoteLayoutProps) {
    const { showNotePage, openNotePage, showCreateNew, openCreateNew } = useModalContext();

    return (
        <div className="relative md:flex">
            <div className="border-colors flex-1 md:max-w-72.5 md:border-r md:py-5 md:pr-4 md:pl-8">
                <p className="mb-4 ml-2 text-2xl font-bold md:hidden">{header}</p>
                <PrimaryBtn
                    onClick={() => {
                        openCreateNew();
                        openNotePage();
                    }}
                    className="md:mb-4 shadow-create-btn dark:shadow-create-btn-dark md:shadow-none md:w-full size-12 sm:size-16 md:size-auto z-[25] fixed md:static bottom-18 sm:bottom-26.5 sm:right-9 rounded-full! md:rounded-lg! right-4 flex items-center justify-center"
                >
                    <PlusIcon className='size-8 shrink-0 md:hidden'/>
                    <span className='hidden md:block'>+ Create New Note</span>
                </PrimaryBtn>
                <NoteList />
            </div>
            {showNotePage && (
                <article className="w-full flex-1 md:flex md:items-stretch">
                    <div className="bg-colors absolute inset-0 z-40 flex-1 md:static md:px-6 md:py-5">
                        {showCreateNew ? <NewNote /> : children}
                    </div>
                    <div className="border-colors hidden flex-1 md:block md:w-full md:max-w-62.5 md:space-y-3 md:border-l md:py-5 md:pr-8 md:pl-4">
                        {showCreateNew == false && (
                            <>
                                <SecondaryBtn className="w-full">
                                    <RestoreIcon />
                                    Restore Note
                                </SecondaryBtn>
                                <SecondaryBtn className="w-full">
                                    <TrashIcon width="20" height="20" />
                                    Delete Note
                                </SecondaryBtn>
                            </>
                        )}
                    </div>
                </article>
            )}
        </div>
    );
}
