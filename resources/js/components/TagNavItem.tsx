import { Link } from '@inertiajs/react';
import ChevronRight from './svgs/ChevronRight';
import clsx from 'clsx';

type TagNavItemProps = {
    routeName: string;
    children: React.ReactNode;
    label: string;
};

export default function TagNavItem({ routeName, children, label }: TagNavItemProps) {
    const isCurrent = route().current() === routeName;

    return (
        <li>
            <Link href={route(routeName)} className={clsx("flex items-center gap-2 border-b border-gray-200 py-3 text-sm md:border-none md:px-3", isCurrent && 'text-primary-blue bg-gray-neutral md:rounded-lg')}>
                {children}
                <span className='text-black'>{label}</span>
                {isCurrent && <ChevronRight className="ml-auto" />}
            </Link>
        </li>
    );
}
