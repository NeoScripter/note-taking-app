import { createContext, useState } from 'react';

type ModalContextType = {
    showSidebar: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
    showNotePage: boolean;
    openNotePage: () => void;
    closeNotePage: () => void;
    showCreateNew: boolean;
    openCreateNew: () => void;
    closeCreateNew: () => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showCreateNew, setShowCreateNew] = useState(false);
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

    function openCreateNew() {
        setShowCreateNew(true);
    }

    function closeCreateNew() {
        setShowCreateNew(false);
    }


    return <ModalContext.Provider value={{ showSidebar, openSidebar, closeSidebar, showNotePage, openNotePage, closeNotePage, showCreateNew, openCreateNew, closeCreateNew }}>{children}</ModalContext.Provider>;
}
