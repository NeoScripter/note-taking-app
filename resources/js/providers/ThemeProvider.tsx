import useLocalStorage from '@/hooks/useLocalStorage';
import { THEMES, ThemeValue } from '@/types/theme';
import { createContext, useEffect } from 'react';

type Theme = ThemeValue;

type ThemeContextType = {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT);

    const [theme, setTheme] = useLocalStorage('theme', THEMES.SYSTEM);

    const applyTheme = (currentTheme: Theme) => {
        const root = document.documentElement;
        root.classList.remove(THEMES.LIGHT, THEMES.DARK);

        if (currentTheme === THEMES.DARK) {
            root.classList.add(THEMES.DARK);
        } else if (currentTheme === THEMES.LIGHT) {
            root.classList.add(THEMES.LIGHT);
        } else {
            // "system" mode → apply based on system preference
            const systemTheme = getSystemTheme();
            root.classList.add(systemTheme);
        }
    };
    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    // ✅ If "system" is selected, listen for OS theme changes
    useEffect(() => {
        if (theme !== THEMES.SYSTEM) return; // Skip if user set Light or Dark manually

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            applyTheme(e.matches ? THEMES.DARK : THEMES.LIGHT);
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);
        return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }, [theme]);

    return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}
