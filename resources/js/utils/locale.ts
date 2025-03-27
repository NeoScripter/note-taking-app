export const LOCALE = {
    ENGLISH: 'en',
    FRENCH: 'fr',
    RUSSIAN: 'ru',
}

export type LocaleType = keyof typeof LOCALE;
export type LocaleValue = (typeof LOCALE)[LocaleType];
