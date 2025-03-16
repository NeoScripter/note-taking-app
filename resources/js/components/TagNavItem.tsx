import { Link } from '@inertiajs/react';
import TagIcon from './svgs/TagIcon';

type TagNavItemProps = {
    path: string;
    label: string;
};

export default function TagNavItem({ path, label }: TagNavItemProps) {
    return (
        <li>
            <Link href={path} className="flex items-center gap-2 border-b border-gray-200 py-3 text-sm">
                <TagIcon width="20" height="20" />
                {label}
            </Link>
        </li>
    );
}
