import { ModalContext } from "@/providers/ModalProvider";
import { useContext } from "react";


export function useModalContext() {
    const modalContext = useContext(ModalContext);

    if (modalContext == null) {
        throw new Error('Must be within provider');
    }

    return modalContext;
}
