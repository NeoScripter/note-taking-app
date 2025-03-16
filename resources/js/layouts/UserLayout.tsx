import FooterLink from '@/components/FooterLink';
import ArchiveIcon from '@/components/svgs/ArchiveIcon';
import HouseIcon from '@/components/svgs/HouseIcon';
import LoopIcon from '@/components/svgs/LoopIcon';
import SettingsIcon from '@/components/svgs/SettingsIcon';
import TagIcon from '@/components/svgs/TagIcon';
import TagNavItem from '@/components/TagNavItem';
import { useModalContext } from '@/hooks/useModalContext';
import { useScreenResize } from '@/hooks/useScreenResize';
import { Transition } from '@headlessui/react';
import { Head } from '@inertiajs/react';
import clsx from 'clsx';
import lightLogo from '../../images/logo-light.webp';

type UserLayoutProps = {
    children: React.ReactElement;
    title: string;
};

export default function UserLayout({ children, title }: UserLayoutProps) {

    return (
        <>
            <Head title={title} />
            <main className="isolate">
                <UserLayoutSidebar />

                <div>
                    <header className="bg-gray-neutral px-4 py-3 sm:px-8 sm:py-6">
                        <div className="w-24">
                            <img src={lightLogo} alt="Notes logo" />
                        </div>
                    </header>
                    <article className="px-4 py-5 sm:px-8 sm:py-6 md:p-0">{children}</article>
                </div>

                <UserLayoutFooter />
            </main>
        </>
    );
}

function UserLayoutSidebar() {
    const { showSidebar } = useModalContext();
    const isLarge = useScreenResize();

    return (
        <Transition show={showSidebar || isLarge}>
            <aside className="fixed inset-0 top-12 bottom-14 z-10 overflow-y-auto bg-white px-4 py-5 transition duration-300 ease-in data-[closed]:opacity-0 sm:top-19 sm:bottom-19 sm:px-8 sm:py-6">
                <p className="mb-4 text-2xl font-bold">Tags</p>
                <nav>
                    <ul>
                        <TagNavItem path="" label="React" />
                        <TagNavItem path="" label="Dev" />
                        <TagNavItem path="" label="Cooking" />
                        <TagNavItem path="" label="Recipes" />
                    </ul>
                </nav>
            </aside>
        </Transition>
    );
}

function UserLayoutFooter() {
    const { showSidebar, openSidebar } = useModalContext();

    return (
        <footer className="shadow-footer fixed right-0 bottom-0 left-0 z-20 flex items-center divide-gray-200 border-t border-gray-200 px-4 py-3 sm:divide-x sm:px-0 md:hidden">
            <FooterLink routeName="home" title="Home">
                <HouseIcon />
            </FooterLink>
            <FooterLink routeName="search" title="Search">
                <LoopIcon />
            </FooterLink>
            <FooterLink routeName="archive" title="Archived">
                <ArchiveIcon />
            </FooterLink>

            <div className="basis-1/5 sm:px-8">
                <button
                    onClick={openSidebar}
                    className={clsx(
                        'flex w-full cursor-pointer flex-col items-center justify-center rounded-sm py-1',
                        showSidebar && 'bg-pale-blue text-primary-blue',
                    )}
                >
                    <TagIcon />

                    <p className="mt-1 hidden text-center text-xs sm:block">Tags</p>
                </button>
            </div>

            <FooterLink routeName="settings" title="Settings">
                <SettingsIcon />
            </FooterLink>
        </footer>
    );
}
