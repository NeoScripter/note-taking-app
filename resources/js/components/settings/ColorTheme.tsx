import useThemeContext from '@/hooks/useThemeContext';
import { RadioBtn } from '@/types/radio-btn';
import { THEMES } from '@/utils/theme';
import DarkTheme from '../../../images/DarkTheme.svg';
import LightTheme from '../../../images/LightTheme.svg';
import SystemTheme from '../../../images/SystemTheme.svg';
import ThemeBody from './ThemeBody';

type ColorThemeProps = {
    onClick: () => void;
};

export default function ColorTheme({ onClick }: ColorThemeProps) {
    const { theme, setTheme } = useThemeContext();

    const radioBtns: RadioBtn[] = [
        { key: 'LightTheme', imagePath: LightTheme, name: 'Light Mode', description: 'Pick a clean and classic light theme', value: THEMES.LIGHT },
        { key: 'DarkTheme', imagePath: DarkTheme, name: 'Dark Mode', description: 'Select a sleek and modern dark theme', value: THEMES.DARK },
        { key: 'SystemTheme', imagePath: SystemTheme, name: 'System', description: "Adapts to your device's theme", value: THEMES.SYSTEM },
    ];

    return <ThemeBody onClick={onClick} title="Color Theme" onChange={setTheme} ariaLabel="Theme Picker" value={theme} radioBtns={radioBtns} />;
}
