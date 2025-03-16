import { createContext, useState } from 'react';

type ModalContextType = {
    showSidebar: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;

};

export const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [showSidebar, setShowSidebar] = useState(false);

    function openSidebar() {
        setShowSidebar(true);
    }

    function closeSidebar() {
        setShowSidebar(false);
    }

    return <ModalContext.Provider value={{ showSidebar, openSidebar, closeSidebar }}>{children}</ModalContext.Provider>;
}
