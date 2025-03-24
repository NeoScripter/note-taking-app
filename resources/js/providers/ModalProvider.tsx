import { createContext, useState } from 'react';

type ModalContextType = {
    showSidebar: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
    showNotePage: boolean;
    openNotePage: () => void;
    closeNotePage: () => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showNotePage, setShowNotePage] = useState(false);

    function openSidebar() {
        setShowSidebar(true);
    }

    function closeSidebar() {
        setShowSidebar(false);
    }

    function openNotePage() {
        setShowNotePage(true);
    }

    function closeNotePage() {
        setShowNotePage(false);
    }

    return <ModalContext.Provider value={{ showSidebar, openSidebar, closeSidebar, showNotePage, openNotePage, closeNotePage }}>{children}</ModalContext.Provider>;
}
