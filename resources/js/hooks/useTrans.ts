import { usePage } from '@inertiajs/react';

export type Translations = Record<string, string>;

export default function useTrans() {
    const { translations } = usePage<{ translations: Translations }>().props;

    return (key: string): string => translations[key] ?? key;
}
