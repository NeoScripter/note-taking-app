import { useModalContext } from '@/hooks/useModalContext';
import { Link } from '@inertiajs/react';
import clsx from 'clsx';

type FooterLinkProps = {
    routeName: string;
    children: React.ReactNode;
    title: string;
};

export default function FooterLink({ routeName, children, title }: FooterLinkProps) {
    const { showSidebar, closeSidebar, closeNotePage } = useModalContext();

    return (
        <div className="basis-1/5">
            <Link
                onClick={() => {closeSidebar(); closeNotePage()}}
                href={route(routeName)}
                className={clsx(
                    'flex flex-col items-center justify-center rounded-sm py-1 sm:mx-8',
                    route().current() === routeName && !showSidebar && 'bg-pale-blue text-primary-blue dark:bg-[#232530]',
                )}
            >
                {children}

                <p className="mt-1 hidden text-center text-xs sm:block">{title}</p>
            </Link>
        </div>
    );
}
