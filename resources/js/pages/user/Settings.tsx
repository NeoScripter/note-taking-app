import ChangePasswordIcon from '@/components/svgs/ChangePasswordIcon';
import ColorThemeIcon from '@/components/svgs/ColorThemeIcon';
import FontThemeIcon from '@/components/svgs/FontThemeIcon';

import ColorTheme from '@/components/settings/ColorTheme';
import FontTheme from '@/components/settings/FontTheme';
import LogoutButton from '@/components/settings/LogoutButton';
import SettingPassword from '@/components/settings/SettingPassword';
import SettingsBtnItem from '@/components/shared/SettingsBtnItem';
import UserLayout from '@/layouts/UserLayout';
import { SETTINGS } from '@/utils/settings';
import { useState } from 'react';
import LocaleSettings from '@/components/settings/LocaleSettings';
import LanguageIcon from '@/components/svgs/LanguageIcon';
import useTrans from '@/hooks/useTrans';

const Settings = () => {
    const [currentSettingPage, setCurrentSettingPage] = useState('');
    const t = useTrans();

    function closePage() {
        setCurrentSettingPage('');
    }

    const renderSettingPage = () => {
        if (currentSettingPage === SETTINGS.COLOR) {
            return <ColorTheme onClick={closePage} />;
        } else if (currentSettingPage === SETTINGS.FONT) {
            return <FontTheme onClick={closePage} />;
        } else if (currentSettingPage === SETTINGS.PASSWORD) {
            return <SettingPassword onClick={closePage} />;
        } else if (currentSettingPage === SETTINGS.LOCALE) {
            return <LocaleSettings onClick={closePage} />;
        } else {
            return null;
        }
    };

    return (
        <div className="relative md:flex">
            <div className="border-colors flex-1 md:min-h-screen md:max-w-64.5 md:border-r md:px-4 md:py-4">
                <p className="mb-4 text-2xl font-bold md:hidden">{t('Settings')}</p>
                <nav>
                    <ul className="space-y-2">
                        <SettingsBtnItem
                            onClick={() => setCurrentSettingPage(SETTINGS.COLOR)}
                            isCurrent={currentSettingPage === SETTINGS.COLOR}
                            label={t("Color Theme")}
                            className="border-none"
                        >
                            <ColorThemeIcon />
                        </SettingsBtnItem>
                        <SettingsBtnItem
                            onClick={() => setCurrentSettingPage(SETTINGS.FONT)}
                            isCurrent={currentSettingPage === SETTINGS.FONT}
                            label={t("Font Theme")}
                            className="border-none"
                        >
                            <FontThemeIcon />
                        </SettingsBtnItem>
                        <SettingsBtnItem
                            onClick={() => setCurrentSettingPage(SETTINGS.PASSWORD)}
                            isCurrent={currentSettingPage === SETTINGS.PASSWORD}
                            label={t("Change Password")}
                            className="border-none"
                        >
                            <ChangePasswordIcon />
                        </SettingsBtnItem>
                        <SettingsBtnItem
                            onClick={() => setCurrentSettingPage(SETTINGS.LOCALE)}
                            isCurrent={currentSettingPage === SETTINGS.LOCALE}
                            label={t("Language")}
                            className="border-none"
                        >
                            <LanguageIcon width='20' height='20' />
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

Settings.layout = (page: React.ReactElement) => <UserLayout children={page} title="Note Flow - Settings" header="Settings" />;

export default Settings;
