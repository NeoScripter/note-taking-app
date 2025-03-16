import useLocalStorage from '@/hooks/useLocalStorage';
import { createContext, useEffect } from 'react';

type FontContextType = {
    selectedFont: string;
    setSelectedFont: React.Dispatch<React.SetStateAction<string>>;
};

export const FontContext = createContext<FontContextType | null>(null);

export function FontProvider({ children }: { children: React.ReactNode }) {
    const [selectedFont, setSelectedFont] = useLocalStorage('user-font', 'notoserif');

    const applyFont = () => {
        if (!selectedFont) return;

        const fontClasses = ['font-inter', 'font-monospace', 'font-philosopher', 'font-notoserif'];
        document.body.classList.remove(...fontClasses);
        document.body.classList.add(`font-${selectedFont}`);
    };

    useEffect(() => {
        applyFont();
    }, [selectedFont]);


    return <FontContext.Provider value={{ selectedFont, setSelectedFont }}>{children}</FontContext.Provider>;
}
