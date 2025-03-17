import { Link } from '@inertiajs/react';
import ChevronRight from './svgs/ChevronRight';
import clsx from 'clsx';

type TagNavItemProps = {
    routeName: string;
    children: React.ReactNode;
    label: string;
    className?: string;
};

export default function TagNavItem({ routeName, children, label, className }: TagNavItemProps) {
    const isCurrent = route().current() === routeName;

    return (
        <li>
            <Link href={route(routeName)} className={clsx("flex items-center gap-2 border-b border-colors py-3 text-sm md:border-none px-3 md:rounded-lg", isCurrent && 'text-primary-blue bg-gray-neutral dark:bg-[#232530]', className)}>
                {children}
                <span className='body-text'>{label}</span>
                {isCurrent && <ChevronRight className="ml-auto body-text" />}
            </Link>
        </li>
    );
}
