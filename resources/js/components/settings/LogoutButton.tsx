import { Link } from '@inertiajs/react';
import LogoutIcon from '../svgs/LogoutIcon';
import useTrans from '@/hooks/useTrans';

export default function LogoutButton() {
    const t = useTrans();
    return (
        <li>
            <Link
                href={route('logout')}
                method="post"
                as="button"
                className="body-text flex cursor-pointer items-center gap-2 px-3 py-3 text-sm md:rounded-lg md:border-none"
            >
                <LogoutIcon />
                <span className="body-text">{t('Logout')}</span>
            </Link>
        </li>
    );
}
