import FooterLink from '@/components/FooterLink';
import ArchiveIcon from '@/components/svgs/ArchiveIcon';
import HouseIcon from '@/components/svgs/HouseIcon';
import LoopIcon from '@/components/svgs/LoopIcon';
import SettingsIcon from '@/components/svgs/SettingsIcon';
import TagIcon from '@/components/svgs/TagIcon';
import { Head } from '@inertiajs/react';
import lightLogo from '../../images/logo-light.webp';

type UserLayoutProps = {
    children: React.ReactElement;
    title: string;
};

export default function UserLayout({ children, title }: UserLayoutProps) {
    return (
        <>
            <Head title={title} />
            <main>
                <header className="bg-gray-neutral px-4 py-3 sm:px-8 sm:py-6">
                    <div className="w-24">
                        <img src={lightLogo} alt="Notes logo" />
                    </div>
                </header>
                <article className="px-4 py-5 sm:px-8 sm:py-6 md:p-0">{children}</article>

                <footer className="shadow-footer fixed right-0 bottom-0 left-0 flex items-center border-t border-gray-200 px-4 py-3 sm:px-0 md:hidden sm:divide-x divide-gray-200">
                    <FooterLink href="" title="Home">
                        <HouseIcon />
                    </FooterLink>
                    <FooterLink href="/search" title="Search">
                        <LoopIcon />
                    </FooterLink>
                    <FooterLink href="/archive" title="Archived">
                        <ArchiveIcon />
                    </FooterLink>
                    <FooterLink href="/tags" title="Tags">
                        <TagIcon />
                    </FooterLink>
                    <FooterLink href="/settings" title="Settings">
                        <SettingsIcon />
                    </FooterLink>
                </footer>
            </main>
        </>
    );
}
