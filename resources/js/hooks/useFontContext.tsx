import { FontContext } from "@/providers/FontProvider";
import { useContext } from "react";

export default function useFontContext() {
    const fontContext = useContext(FontContext);

    if (fontContext == null) {
        throw new Error('Must be within provider');
    }

    return fontContext;
}
