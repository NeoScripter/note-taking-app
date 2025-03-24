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
    showDeleteModal: boolean;
    openDeleteModal: () => void;
    closeDeleteModal: () => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showCreateNew, setShowCreateNew] = useState(false);
    const [showNotePage, setShowNotePage] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(true);

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

    function openDeleteModal() {
        setShowDeleteModal(true);
    }

    function closeDeleteModal() {
        setShowDeleteModal(false);
    }


    return <ModalContext.Provider value={{ showSidebar, openSidebar, closeSidebar, showNotePage, openNotePage, closeNotePage, showCreateNew, openCreateNew, closeCreateNew, showDeleteModal, openDeleteModal, closeDeleteModal }}>{children}</ModalContext.Provider>;
}
