import Toast from '@/components/shared/Toast';
import UserLayoutFooter from '@/components/userLayout/UserLayoutFooter';
import UserLayoutHeader from '@/components/userLayout/UserLayoutHeader';
import UserLayoutSidebar from '@/components/userLayout/UserLayoutSidebar';
import { FontProvider } from '@/providers/FontProvider';
import { Head } from '@inertiajs/react';

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

            <Toast />
        </FontProvider>
    );
}
