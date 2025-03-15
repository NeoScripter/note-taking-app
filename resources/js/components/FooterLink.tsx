import { Link, usePage } from '@inertiajs/react';
import clsx from 'clsx';

type FooterLinkProps = {
    href: string;
    children: React.ReactNode;
    title: string;
};

export default function FooterLink({ href, children, title }: FooterLinkProps) {
    const { url } = usePage();

    return (
        <div className='basis-1/5'>
            <Link
                href={href}
                className={clsx(
                    'b flex flex-col sm:mx-8 items-center justify-center rounded-sm py-1',
                    url.startsWith(href) && 'bg-pale-blue text-primary-blue',
                )}
            >
                {children}

                <p className="mt-1 hidden text-center text-xs sm:block">{title}</p>
            </Link>
        </div>
    );
}
