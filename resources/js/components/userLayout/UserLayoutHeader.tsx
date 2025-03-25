import useThemeContext from '@/hooks/useThemeContext';
import { THEMES } from '@/utils/theme';
import { Link } from '@inertiajs/react';
import darkLogo from '../../../images/logo-dark.webp';
import lightLogo from '../../../images/logo-light.webp';
import SearchNotes from '../forms/SearchNotes';
import SettingsIcon from '../svgs/SettingsIcon';
import { useScreenResize } from '@/hooks/useScreenResize';

export default function UserLayoutHeader({ header }: { header: string }) {
    const { theme } = useThemeContext();
    const isLarge = useScreenResize();
    return (
        <header className="light-bg-colors border-colors px-4 py-3 sm:px-8 sm:py-6 md:flex md:items-center md:justify-between md:gap-4 md:border-b md:bg-white! md:px-8 md:py-4.5 md:dark:bg-[#0E121B]!">
            <div className="w-24 md:hidden">
                <img src={theme === THEMES.LIGHT ? lightLogo : darkLogo} alt="Notes logo" />
            </div>

            <div className="hidden text-2xl font-bold md:block">{header}</div>

            {isLarge && <SearchNotes />}

            <Link href={route('settings')} className="body-text hidden shrink-0 p-2.5 md:block">
                <SettingsIcon />
            </Link>
        </header>
    );
}
