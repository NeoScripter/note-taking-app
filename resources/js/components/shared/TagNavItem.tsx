import { Link, usePage } from '@inertiajs/react';
import clsx from 'clsx';
import ChevronRight from '../svgs/ChevronRight';
import { Tag } from '@/types/note';
import { useModalContext } from '@/hooks/useModalContext';
import { capitalize } from '@/utils/capitalize';

type TagNavItemProps = {
    routeName: string;
    children: React.ReactNode;
    label: string;
    tagId?: number;
    className?: string;
};



export default function TagNavItem({ routeName, children, label, className, tagId }: TagNavItemProps) {
    const { props } = usePage<{ tag: Tag }>();
    const { closeSidebar, closeCreateNew } = useModalContext();

    const isCurrent =
        route().current(routeName) &&
        (tagId === undefined || Number(props.tag?.id ?? props.tag) === tagId);

    return (
        <li>
            <Link
                onClick={() => {closeSidebar(); closeCreateNew()}}
                href={tagId !== undefined ? route(routeName, { tag: tagId }) : route(routeName)}
                className={clsx(
                    'border-colors flex items-center gap-2 border-b px-3 py-3 text-sm md:rounded-lg md:border-none',
                    isCurrent && 'text-primary-blue bg-gray-neutral dark:bg-[#232530]',
                    className,
                )}
            >
                {children}
                <span className="body-text">{capitalize(label)}</span>
                {isCurrent && <ChevronRight className="body-text ml-auto" />}
            </Link>
        </li>
    );
}
