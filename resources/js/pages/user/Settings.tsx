import SettingsBtnItem from '@/components/SettingsBtnItem';
import RadioField from '@/components/forms/RadioField';
import ChangePasswordIcon from '@/components/svgs/ChangePasswordIcon';
import ChevronLeft from '@/components/svgs/ChevronLeft';
import ColorThemeIcon from '@/components/svgs/ColorThemeIcon';
import FontThemeIcon from '@/components/svgs/FontThemeIcon';
import LogoutIcon from '@/components/svgs/LogoutIcon';
import useFontContext from '@/hooks/useFontContext';
import UserLayout from '@/layouts/UserLayout';
import { RadioGroup } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import Inter from '../../../images/Inter.webp';
import MonoSpace from '../../../images/Monospace.webp';
import NotoSerif from '../../../images/NotoSerif.webp';
import Philosopher from '../../../images/Philosopher.webp';

const Settings = () => {
    const [showFontTheme, setShowFontTheme] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);

    return (
        <div className="relative">
            <p className="mb-4 text-2xl font-bold md:mt-2 md:mb-0 md:border-t md:border-gray-200 md:px-3 md:py-2 md:text-sm md:font-normal md:text-gray-500">
                Settings
            </p>
            <nav>
                <ul className="space-y-2">
                    <SettingsBtnItem onClick={() => {}} isCurrent={false} label="Color Theme" className="border-none">
                        <ColorThemeIcon />
                    </SettingsBtnItem>

                    <SettingsBtnItem
                        onClick={() => setShowFontTheme(true)}
                        isCurrent={showFontTheme === true}
                        label="Font Theme"
                        className="border-none"
                    >
                        <FontThemeIcon />
                    </SettingsBtnItem>

                    <SettingsBtnItem onClick={() => setShowChangePassword(true)} isCurrent={showChangePassword === true} label="Change Password" className="border-none">
                        <ChangePasswordIcon />
                    </SettingsBtnItem>

                    <hr className="text-gray-300" />

                    <LogoutButton />
                </ul>
            </nav>
            {showFontTheme && <FontTheme onClick={() => setShowFontTheme(false)} />}
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
                className="flex cursor-pointer items-center gap-2 py-3 text-sm md:rounded-lg md:border-none md:px-3"
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
        <div className="bg-colors absolute inset-0 z-10">
            <button onClick={onClick} className="body-text mb-4 flex cursor-pointer items-center gap-2 text-sm">
                <ChevronLeft />
                Settings
            </button>
            <p className="mb-2 text-2xl font-bold">Font Theme</p>
            <p className="mb-4">Choose your font theme:</p>
            <RadioGroup value={selectedFont} onChange={setSelectedFont} aria-label="Server size" className="space-y-4">
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
