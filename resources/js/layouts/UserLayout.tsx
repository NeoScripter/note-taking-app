import DialogModal from '@/components/shared/DialogModal';
import PageLoader from '@/components/shared/PageLoader';
import Toast from '@/components/shared/Toast';
import UserLayoutFooter from '@/components/userLayout/UserLayoutFooter';
import UserLayoutHeader from '@/components/userLayout/UserLayoutHeader';
import UserLayoutSidebar from '@/components/userLayout/UserLayoutSidebar';
import { useModalContext } from '@/hooks/useModalContext';
import useTrans from '@/hooks/useTrans';
import { FontProvider } from '@/providers/FontProvider';
import { Head } from '@inertiajs/react';

type UserLayoutProps = {
    children: React.ReactElement;
    title: string;
    header: string;
};

export default function UserLayout({ children, title, header }: UserLayoutProps) {
    const { showDeleteModal, closeDeleteModal, showArchiveModal, closeArchiveModal } = useModalContext();
    const t = useTrans();

    return (
        <FontProvider>
            <Head title={title} />
            <main className="bg-colors isolate h-full md:flex md:items-stretch">
                <UserLayoutSidebar />

                <div className="flex-1">
                    <UserLayoutHeader header={t(header)} />
                    <article className="relative px-4 py-5 sm:px-8 sm:py-6 md:p-0">{children}</article>
                </div>

                <UserLayoutFooter />
            </main>

            <Toast />

            <DialogModal close={closeDeleteModal} isOpen={showDeleteModal} isDelete={true} />
            <DialogModal close={closeArchiveModal} isOpen={showArchiveModal} isDelete={false} />

            <PageLoader />
        </FontProvider>
    );
}
