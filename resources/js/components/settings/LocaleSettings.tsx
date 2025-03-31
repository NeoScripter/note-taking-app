import { RadioBtn } from '@/types/radio-btn';
import { LOCALE } from '@/utils/locale';
import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';
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

    function selectLocale(newLocale: string) {
        setLocale(newLocale);

        router.visit(route('locale', newLocale), {
            preserveState: true,
            preserveScroll: true,
            only: ['translations', 'locale'],
            showProgress: false,
        });
    }

    const radioBtns: RadioBtn[] = [
        { key: 'English', imagePath: English, name: 'English', description: t('The English language'), value: LOCALE.ENGLISH },
        { key: 'Russian', imagePath: Russian, name: 'Русский', description: t('The Russian language'), value: LOCALE.RUSSIAN },
        { key: 'French', imagePath: French, name: 'Francais', description: t("The French language"), value: LOCALE.FRENCH },
    ];

    return <ThemeBody onClick={onClick} title={t("Language")} onChange={selectLocale} ariaLabel="Language Picker" value={currentLocale} radioBtns={radioBtns} shouldInvert={false} />;
}
