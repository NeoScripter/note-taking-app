import { ROUTES } from '@/consts/routeNames';
import { useScreenResize } from '@/hooks/useScreenResize';
import useThemeContext from '@/hooks/useThemeContext';
import { NotePropsType } from '@/types/note';
import { THEMES } from '@/utils/theme';
import { Link, usePage } from '@inertiajs/react';
import darkLogo from '../../../images/logo-dark.webp';
import lightLogo from '../../../images/logo-light.webp';
import SearchNotes from '../forms/SearchNotes';
import SettingsIcon from '../svgs/SettingsIcon';
import { capitalize } from '@/utils/capitalize';
import { getTitle } from '@/utils/getTitle';

export default function UserLayoutHeader({ header }: { header: string }) {
    const { theme } = useThemeContext();
    const isLarge = useScreenResize();

    const { props } = usePage<NotePropsType>();


    return (
        <header className="light-bg-colors border-colors px-4 py-3 sm:px-8 sm:py-6 md:flex md:items-center md:justify-between md:gap-4 md:border-b md:bg-white! md:px-8 md:py-4.5 md:dark:bg-[#0E121B]!">
            <div className="w-24 md:hidden">
                <img src={theme === THEMES.LIGHT ? lightLogo : darkLogo} alt="Notes logo" />
            </div>

            <div className="hidden text-2xl font-bold md:block">{header + capitalize(getTitle(route().current(), props))}</div>

            {isLarge && <SearchNotes />}

            <Link prefetch href={route(ROUTES.SETTIGNS)} className="body-text hidden shrink-0 p-2.5 md:block">
                <SettingsIcon />
            </Link>
        </header>
    );
}
