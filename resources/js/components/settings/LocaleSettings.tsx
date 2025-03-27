import { RadioBtn } from '@/types/radio-btn';
import { LOCALE } from '@/utils/locale';
import { router, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import English from '../../../images/flags/en.webp';
import French from '../../../images/flags/fr.webp';
import Russian from '../../../images/flags/ru.webp';
import ThemeBody from './ThemeBody';
import useTrans from '@/hooks/useTrans';

type LocaleProps = {
    onClick: () => void;
};

export default function LocaleSettings({ onClick }: LocaleProps) {
    const { locale } = usePage<{ locale: string }>().props;
    const [currentLocale, setLocale] = useState<string>(locale);
    const t = useTrans();

    useEffect(() => {
        router.visit(route('locale', currentLocale), {
            preserveState: true,
            preserveScroll: true,
            only: ['translations', 'locale'],
        });
    }, [currentLocale])

    const radioBtns: RadioBtn[] = [
        { key: 'English', imagePath: English, name: 'English', description: t('The English language'), value: LOCALE.ENGLISH },
        { key: 'Russian', imagePath: Russian, name: 'Русский', description: t('The Russian language'), value: LOCALE.RUSSIAN },
        { key: 'French', imagePath: French, name: 'Francais', description: t("The French language"), value: LOCALE.FRENCH },
    ];

    return <ThemeBody onClick={onClick} title={t("Language")} onChange={setLocale} ariaLabel="Language Picker" value={currentLocale} radioBtns={radioBtns} shouldInvert={false} />;
}
