import SettingsBtnItem from '@/components/SettingsBtnItem';
import RadioField from '@/components/forms/RadioField';
import ChangePasswordIcon from '@/components/svgs/ChangePasswordIcon';
import ChevronLeft from '@/components/svgs/ChevronLeft';
import ColorThemeIcon from '@/components/svgs/ColorThemeIcon';
import FontThemeIcon from '@/components/svgs/FontThemeIcon';
import LogoutIcon from '@/components/svgs/LogoutIcon';
import useFontContext from '@/hooks/useFontContext';
import useThemeContext from '@/hooks/useThemeContext';
import UserLayout from '@/layouts/UserLayout';
import { FONTS } from '@/utils/fonts';
import { SETTINGS } from '@/utils/settings';
import { THEMES } from '@/utils/theme';
import { RadioGroup } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import DarkTheme from '../../../images/DarkTheme.svg';
import Inter from '../../../images/Inter.webp';
import LightTheme from '../../../images/LightTheme.svg';
import MonoSpace from '../../../images/Monospace.webp';
import NotoSerif from '../../../images/NotoSerif.webp';
import Philosopher from '../../../images/Philosopher.webp';
import SystemTheme from '../../../images/SystemTheme.svg';

const Settings = () => {
    const [currentSettingPage, setCurrentSettingPage] = useState('');

    const renderSettingPage = () => {
        if (currentSettingPage === SETTINGS.COLOR) {
            return <ColorTheme onClick={() => setCurrentSettingPage('')} />;
        } else if (currentSettingPage === SETTINGS.FONT) {
            return <FontTheme onClick={() => setCurrentSettingPage('')} />;
        } else {
            return null;
        }
    };

    return (
        <div className="relative md:flex">
            <div className="border-colors flex-1 md:min-h-screen md:max-w-64.5 md:border-r md:px-4 md:py-4">
                <p className="mb-4 text-2xl font-bold md:hidden">Settings</p>
                <nav>
                    <ul className="space-y-2">
                        <SettingsBtnItem
                            onClick={() => setCurrentSettingPage(SETTINGS.COLOR)}
                            isCurrent={currentSettingPage === SETTINGS.COLOR}
                            label="Color Theme"
                            className="border-none"
                        >
                            <ColorThemeIcon />
                        </SettingsBtnItem>
                        <SettingsBtnItem
                            onClick={() => setCurrentSettingPage(SETTINGS.FONT)}
                            isCurrent={currentSettingPage === SETTINGS.FONT}
                            label="Font Theme"
                            className="border-none"
                        >
                            <FontThemeIcon />
                        </SettingsBtnItem>
                        <SettingsBtnItem
                            onClick={() => setCurrentSettingPage(SETTINGS.PASSWORD)}
                            isCurrent={currentSettingPage === SETTINGS.PASSWORD}
                            label="Change Password"
                            className="border-none"
                        >
                            <ChangePasswordIcon />
                        </SettingsBtnItem>
                        <hr className="hr-colors" />
                        <LogoutButton />
                    </ul>
                </nav>
            </div>
            <div className="max-w-146 flex-1">{renderSettingPage()}</div>
        </div>
    );
};

Settings.layout = (page: React.ReactElement) => <UserLayout children={page} title="Settings" header="Settings" />;

export default Settings;

function LogoutButton() {
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

type FontThemeProps = {
    onClick: () => void;
};

function FontTheme({ onClick }: FontThemeProps) {
    const { selectedFont, setSelectedFont } = useFontContext();

    const radioBtns: RadioBtn[] = [
        { key: 'NotoSerif', imagePath: NotoSerif, name: 'NotoSerif', description: 'Classic and elegant for a timeless feel', value: FONTS.NOTOSERIF },
        { key: 'MonoSpace', imagePath: MonoSpace, name: 'MonoSpace', description: 'Code-like, great for a technical vibe', value: FONTS.MONOSPACE },
        { key: 'Inter', imagePath: Inter, name: 'Inter', description: 'Clean and modern, easy to read', value: FONTS.INTER },
        { key: 'Philosopher', imagePath: Philosopher, name: 'Philosopher', description: 'Elegant and eye-appealing style', value: FONTS.PHILOSOPHER },
    ];

    return <ThemeBody onClick={onClick} title="Font" onChange={setSelectedFont} ariaLabel="Font Picker" value={selectedFont} radioBtns={radioBtns} />;
}

type ColorThemeProps = {
    onClick: () => void;
};

function ColorTheme({ onClick }: ColorThemeProps) {
    const { theme, setTheme } = useThemeContext();

    const radioBtns: RadioBtn[] = [
        { key: 'LightTheme', imagePath: LightTheme, name: 'Light Mode', description: 'Pick a clean and classic light theme', value: THEMES.LIGHT },
        { key: 'DarkTheme', imagePath: DarkTheme, name: 'Dark Mode', description: 'Select a sleek and modern dark theme', value: THEMES.DARK },
        { key: 'SystemTheme', imagePath: SystemTheme, name: 'System', description: "Adapts to your device's theme", value: THEMES.SYSTEM },
    ];

    return <ThemeBody onClick={onClick} title="Color" onChange={setTheme} ariaLabel="Theme Picker" value={theme} radioBtns={radioBtns} />;
}

type RadioBtn = {
    key: string;
    imagePath: string;
    name: string;
    description: string;
    value: string;
};

type ThemeBodyProps = {
    onClick: () => void;
    title: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
    value: string;
    ariaLabel: string;
    radioBtns: RadioBtn[];
};

function ThemeBody({ onClick, title, onChange, value, ariaLabel, radioBtns }: ThemeBodyProps) {
    return (
        <div className="bg-colors absolute inset-0 z-10 md:static md:p-8">
            <button onClick={onClick} className="body-text mb-4 flex cursor-pointer items-center gap-2 text-sm md:hidden">
                <ChevronLeft />
                Settings
            </button>
            <p className="mb-2 text-2xl font-bold">{title} Theme</p>
            <p className="mb-4">{`Choose your ${title.toLowerCase()} theme:`}</p>
            <RadioGroup value={value} onChange={onChange} aria-label={ariaLabel} className="space-y-4">
                {radioBtns.map((radioBtn) => (
                    <RadioField
                        key={radioBtn.key}
                        imagePath={radioBtn.imagePath}
                        fontName={radioBtn.name}
                        fontDescription={radioBtn.description}
                        value={radioBtn.value}
                    />
                ))}
            </RadioGroup>
        </div>
    );
}
