import useLocalStorage from '@/hooks/useLocalStorage';
import { THEMES, ThemeValue } from '@/utils/theme';
import { createContext, useEffect } from 'react';

type Theme = ThemeValue;

type ThemeContextType = {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT);

    const [theme, setTheme] = useLocalStorage('theme', getSystemTheme());

    const applyTheme = (currentTheme: Theme) => {
        const root = document.documentElement;
        root.classList.remove(THEMES.LIGHT, THEMES.DARK);

        if (currentTheme === THEMES.DARK) {
            root.classList.add(THEMES.DARK);
        } else if (currentTheme === THEMES.LIGHT) {
            root.classList.add(THEMES.LIGHT);
        } else {
            const systemTheme = getSystemTheme();
            root.classList.add(systemTheme);
        }
    };
    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    useEffect(() => {
        if (theme !== THEMES.SYSTEM) return;

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            applyTheme(e.matches ? THEMES.DARK : THEMES.LIGHT);
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);
        return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }, [theme]);

    return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}
