import { Link } from '@inertiajs/react';
import LogoutIcon from '../svgs/LogoutIcon';

export default function LogoutButton() {
    return (
        <li>
            <Link
                href={route('logout')}
                method="post"
                as="button"
                className="body-text flex cursor-pointer items-center gap-2 px-3 py-3 text-sm md:rounded-lg md:border-none"
            >
                <LogoutIcon />
                <span className="body-text">Logout</span>
            </Link>
        </li>
    );
}
