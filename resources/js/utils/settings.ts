export const SETTINGS = {
    COLOR: 'colorTheme',
    FONT: 'fontTheme',
    PASSWORD: 'password',
    LOCALE: 'locale'
}

export type SettingType = keyof typeof SETTINGS;
export type SettingValue = (typeof SETTINGS)[SettingType];
