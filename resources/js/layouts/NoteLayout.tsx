import NewNote from '@/components/noteLayout/NewNote';
import NoteList from '@/components/noteLayout/NoteList';
import PrimaryBtn from '@/components/shared/PrimaryBtn';
import SecondaryBtn from '@/components/shared/SecondaryBtn';
import ArchiveIcon from '@/components/svgs/ArchiveIcon';
import ChevronLeft from '@/components/svgs/ChevronLeft';
import RestoreIcon from '@/components/svgs/RestoreIcon';
import TrashIcon from '@/components/svgs/TrashIcon';
import { useModalContext } from '@/hooks/useModalContext';

type NoteLayoutProps = {
    children: React.ReactElement;
    header: string;
};

export default function NoteLayout({ children, header }: NoteLayoutProps) {
    const { showNotePage, closeNotePage, openNotePage, showCreateNew, closeCreateNew, openCreateNew } = useModalContext();

    return (
        <div className="relative md:flex">
            <div className="border-colors flex-1 md:max-w-72.5 md:border-r md:py-5 md:pr-4 md:pl-8">
                <p className="mb-4 ml-2 text-2xl font-bold md:hidden">{header}</p>
                <PrimaryBtn
                    onClick={() => {
                        openCreateNew();
                        openNotePage();
                    }}
                    className="mb-4 hidden w-full md:block"
                >
                    + Create New Note
                </PrimaryBtn>
                <NoteList />
            </div>
            {showNotePage && (
                <article className="w-full flex-1 md:flex md:items-stretch">
                    <div className="bg-colors absolute inset-0 z-40 flex-1 md:static md:px-6 md:py-5">
                        <div className="body-text xs:gap-4 border-colors mb-4 flex items-center justify-end gap-3 border-b pb-4 text-sm md:hidden">
                            <button
                                onClick={() => {
                                    closeNotePage();
                                    closeCreateNew();
                                }}
                                className="mr-auto flex cursor-pointer items-center gap-2"
                            >
                                <ChevronLeft />
                                Go Back
                            </button>
                            <button className="cursor-pointer">
                                <TrashIcon />
                            </button>
                            <button className="cursor-pointer">
                                <ArchiveIcon width="18" height="18" />
                            </button>
                            <button className="cursor-pointer">Cancel</button>
                            <button className="text-primary-blue mr-2 cursor-pointer">Save Note</button>
                        </div>
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
