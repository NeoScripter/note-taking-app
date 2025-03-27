import useFontContext from '@/hooks/useFontContext';
import { RadioBtn } from '@/types/radio-btn';
import { FONTS } from '@/utils/fonts';
import Inter from '../../../images/Inter.webp';
import MonoSpace from '../../../images/Monospace.webp';
import NotoSerif from '../../../images/NotoSerif.webp';
import Philosopher from '../../../images/Philosopher.webp';
import ThemeBody from './ThemeBody';

type FontThemeProps = {
    onClick: () => void;
};

export default function FontTheme({ onClick }: FontThemeProps) {
    const { selectedFont, setSelectedFont } = useFontContext();

    const radioBtns: RadioBtn[] = [
        { key: 'NotoSerif', imagePath: NotoSerif, name: 'NotoSerif', description: 'Classic and elegant for a timeless feel', value: FONTS.NOTOSERIF },
        { key: 'MonoSpace', imagePath: MonoSpace, name: 'MonoSpace', description: 'Code-like, great for a technical vibe', value: FONTS.MONOSPACE },
        { key: 'Inter', imagePath: Inter, name: 'Inter', description: 'Clean and modern, easy to read', value: FONTS.INTER },
        { key: 'Philosopher', imagePath: Philosopher, name: 'Philosopher', description: 'Elegant and eye-appealing style', value: FONTS.PHILOSOPHER },
    ];

    return <ThemeBody onClick={onClick} title="Font Theme" onChange={setSelectedFont} ariaLabel="Font Picker" value={selectedFont} radioBtns={radioBtns} />;
}
