export const THEMES = {
    DARK: 'dark',
    LIGHT: 'light',
    SYSTEM: 'system',
}

export type ThemeType = keyof typeof THEMES;
export type ThemeValue = (typeof THEMES)[ThemeType];
