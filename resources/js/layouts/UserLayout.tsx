import FooterLink from '@/components/FooterLink';
import ArchiveIcon from '@/components/svgs/ArchiveIcon';
import HouseIcon from '@/components/svgs/HouseIcon';
import LoopIcon from '@/components/svgs/LoopIcon';
import SearchIcon from '@/components/svgs/SeachIcon';
import SettingsIcon from '@/components/svgs/SettingsIcon';
import TagIcon from '@/components/svgs/TagIcon';
import TagNavItem from '@/components/TagNavItem';
import { useModalContext } from '@/hooks/useModalContext';
import { useScreenResize } from '@/hooks/useScreenResize';
import useThemeContext from '@/hooks/useThemeContext';
import { FontProvider } from '@/providers/FontProvider';
import { THEMES } from '@/utils/theme';
import { Input } from '@headlessui/react';
import { Head, Link } from '@inertiajs/react';
import clsx from 'clsx';
import darkLogo from '../../images/logo-dark.webp';
import lightLogo from '../../images/logo-light.webp';
import Toast from '@/components/Toast';

type UserLayoutProps = {
    children: React.ReactElement;
    title: string;
    header: string;
};

export default function UserLayout({ children, title, header }: UserLayoutProps) {
    return (
        <FontProvider>
            <Head title={title} />
            <main className="bg-colors isolate md:flex md:items-start">
                <UserLayoutSidebar />

                <div className="flex-1">
                    <UserLayoutHeader header={header} />
                    <article className="px-4 py-5 sm:px-8 sm:py-6 md:p-0">{children}</article>
                </div>

                <UserLayoutFooter />
            </main>

            <Toast/>
        </FontProvider>
    );
}

function UserLayoutHeader({ header }: { header: string }) {
    const { theme } = useThemeContext();
    return (
        <header className="light-bg-colors border-colors px-4 py-3 sm:px-8 sm:py-6 md:flex md:items-center md:justify-between md:gap-4 md:border-b md:bg-white! md:px-8 md:py-4.5 md:dark:bg-[#0E121B]!">
            <div className="w-24 md:hidden">
                <img src={theme === THEMES.LIGHT ? lightLogo : darkLogo} alt="Notes logo" />
            </div>

            <div className="hidden text-2xl font-bold md:block">{header}</div>

            <div className="relative ml-auto hidden md:block">
                <SearchIcon className="body-text absolute bottom-1/2 left-3 translate-y-1/2" />
                <Input
                    type="search"
                    name="search"
                    placeholder="Search..."
                    className="light-border-colors data-[hover]:bg-gray-neutral data-[focus]:shadow-input w-full rounded-lg border px-4 py-3 pl-12 text-sm outline-none data-[focus]:ring-1"
                />
            </div>

            <Link href={route('settings')} className="body-text hidden shrink-0 p-2.5 md:block">
                <SettingsIcon />
            </Link>
        </header>
    );
}

function UserLayoutSidebar() {
    const { theme } = useThemeContext();
    const { showSidebar } = useModalContext();
    const isLarge = useScreenResize();

    return (
        (showSidebar || isLarge) && (
            <aside className="bg-colors border-colors fixed inset-0 top-12 bottom-14 z-30 overflow-y-auto px-4 py-5 sm:top-19 sm:bottom-19 sm:px-8 sm:py-6 md:static md:min-h-screen md:w-68 md:border-r md:px-4 md:py-3">
                <div className="hidden md:block">
                    <div className="mb-4 w-24 py-3">
                        <img src={theme === THEMES.LIGHT ? lightLogo : darkLogo} alt="Notes logo" />
                    </div>

                    <nav>
                        <ul>
                            <TagNavItem routeName="home" label="All Notes">
                                <HouseIcon width="20" height="20" />
                            </TagNavItem>
                            <TagNavItem routeName="archive" label="Archived Notes">
                                <ArchiveIcon width="20" height="20" />
                            </TagNavItem>
                        </ul>
                    </nav>
                </div>
                <p className="border-colors mb-4 text-2xl font-bold md:mt-2 md:mb-0 md:border-t md:px-3 md:py-2 md:text-sm md:font-normal md:text-[#717784]">
                    Tags
                </p>
                <nav>
                    <ul>
                        <TagNavItem routeName="tag" label="React">
                            <TagIcon width="20" height="20" />
                        </TagNavItem>
                        <TagNavItem routeName="tag" label="React">
                            <TagIcon width="20" height="20" />
                        </TagNavItem>
                        <TagNavItem routeName="tag" label="React">
                            <TagIcon width="20" height="20" />
                        </TagNavItem>
                        <TagNavItem routeName="tag" label="React">
                            <TagIcon width="20" height="20" />
                        </TagNavItem>
                    </ul>
                </nav>
            </aside>
        )
    );
}

function UserLayoutFooter() {
    const { showSidebar, openSidebar } = useModalContext();

    return (
        <footer className="shadow-footer dark:shadow-footer-dark divide-colors border-colors fixed right-0 bottom-0 left-0 z-20 flex items-center border-t px-4 py-3 sm:divide-x sm:px-0 md:hidden">
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
                        showSidebar && 'bg-pale-blue text-primary-blue dark:bg-[#232530]',
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
