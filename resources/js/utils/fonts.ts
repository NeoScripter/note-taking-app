export const FONTS = {
    NOTOSERIF: 'notoserif',
    MONOSPACE: 'monospace',
    INTER: 'inter',
    PHILOSOPHER: 'philosopher',
}

export type FontType = keyof typeof FONTS;
export type FontValue = (typeof FONTS)[FontType];
