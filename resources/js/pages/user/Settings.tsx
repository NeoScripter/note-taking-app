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
import { SETTINGS } from '@/types/settings';
import { THEMES } from '@/types/theme';
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
            <div className="flex-1 md:min-h-screen md:max-w-64.5 md:border-r border-colors md:px-4 md:py-4">
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
                className="flex cursor-pointer items-center gap-2 py-3 text-sm body-text md:rounded-lg md:border-none px-3"
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

    return (
        <div className="bg-colors absolute inset-0 z-10 md:static md:p-8">
            <button onClick={onClick} className="body-text mb-4 flex cursor-pointer items-center gap-2 text-sm md:hidden">
                <ChevronLeft />
                Settings
            </button>
            <p className="mb-2 text-2xl font-bold">Font Theme</p>
            <p className="mb-4">Choose your font theme:</p>
            <RadioGroup value={selectedFont} onChange={setSelectedFont} aria-label="Font Picker" className="space-y-4">
                <RadioField
                    key="NotoSerif"
                    imagePath={NotoSerif}
                    fontName="NotoSerif"
                    fontDescription="Classic and elegant for a timeless feel"
                    value="notoserif"
                />

                <RadioField
                    key="MonoSpace"
                    imagePath={MonoSpace}
                    fontName="MonoSpace"
                    fontDescription="Code-like, great for a technical vibe"
                    value="monospace"
                />

                <RadioField key="Inter" imagePath={Inter} fontName="Inter" fontDescription="Clean and modern, easy to read" value="inter" />

                <RadioField
                    key="Philosopher"
                    imagePath={Philosopher}
                    fontName="Philosopher"
                    fontDescription="Elegant and eye-appealing style"
                    value="philosopher"
                />
            </RadioGroup>
        </div>
    );
}

type ColorThemeProps = {
    onClick: () => void;
};

function ColorTheme({ onClick }: ColorThemeProps) {
    const { theme, setTheme } = useThemeContext();

    return (
        <div className="bg-colors absolute inset-0 z-10 md:static md:p-8">
            <button onClick={onClick} className="body-text mb-4 flex cursor-pointer items-center gap-2 text-sm md:hidden">
                <ChevronLeft />
                Settings
            </button>
            <p className="mb-2 text-2xl font-bold">Color Theme</p>
            <p className="mb-4">Choose your color theme:</p>
            <RadioGroup value={theme} onChange={setTheme} aria-label="Theme Picker" className="space-y-4">
                <RadioField
                    key="LightTheme"
                    imagePath={LightTheme}
                    fontName="Light Mode"
                    fontDescription="Pick a clean and classic light theme"
                    value={THEMES.LIGHT}
                />

                <RadioField
                    key="DarkTheme"
                    imagePath={DarkTheme}
                    fontName="Dark Mode"
                    fontDescription="Select a sleek and modern dark theme"
                    value={THEMES.DARK}
                />

                <RadioField
                    key="SystemTheme"
                    imagePath={SystemTheme}
                    fontName="System"
                    fontDescription="Adapts to your device's theme"
                    value={THEMES.SYSTEM}
                />
            </RadioGroup>
        </div>
    );
}
