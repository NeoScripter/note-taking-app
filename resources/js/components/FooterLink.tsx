import { useModalContext } from '@/hooks/useModalContext';
import { Link, usePage } from '@inertiajs/react';
import clsx from 'clsx';

type FooterLinkProps = {
    href: string;
    children: React.ReactNode;
    title: string;
};

export default function FooterLink({ href, children, title }: FooterLinkProps) {
    const { url } = usePage();
    const { showSidebar, closeSidebar } = useModalContext();

    return (
        <div className="basis-1/5">
            <Link
                onClick={closeSidebar}
                href={href}
                className={clsx(
                    'flex flex-col items-center justify-center rounded-sm py-1 sm:mx-8',
                    url.startsWith(href) && !showSidebar && 'bg-pale-blue text-primary-blue',
                )}
            >
                {children}

                <p className="mt-1 hidden text-center text-xs sm:block">{title}</p>
            </Link>
        </div>
    );
}
