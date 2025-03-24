import Toast from '@/components/shared/Toast';
import UserLayoutFooter from '@/components/userLayout/UserLayoutFooter';
import UserLayoutHeader from '@/components/userLayout/UserLayoutHeader';
import UserLayoutSidebar from '@/components/userLayout/UserLayoutSidebar';
import { useModalContext } from '@/hooks/useModalContext';
import { FontProvider } from '@/providers/FontProvider';
import { Transition } from '@headlessui/react';
import { Head } from '@inertiajs/react';

type UserLayoutProps = {
    children: React.ReactElement;
    title: string;
    header: string;
};

export default function UserLayout({ children, title, header }: UserLayoutProps) {
    const { showDeleteModal, closeDeleteModal} = useModalContext();
    return (
        <FontProvider>
            <Head title={title} />
            <main className="bg-colors isolate md:flex md:items-stretch h-full">
                <UserLayoutSidebar />

                <div className="flex-1">
                    <UserLayoutHeader header={header} />
                    <article className="px-4 py-5 sm:px-8 sm:py-6 md:p-0 relative">{children}</article>
                </div>

                <UserLayoutFooter />
            </main>

            <Toast />

            <Transition show={showDeleteModal}>
                <div className='fixed inset-0 z-50 bg-black/70 grid place-content-center transition duration-300 ease-in data-[closed]:opacity-0'>
                    <div className='w-100 h-100 bg-white'>Hello world
                        <button onClick={closeDeleteModal}>Close</button>
                    </div>
                </div>
            </Transition>
        </FontProvider>
    );
}
