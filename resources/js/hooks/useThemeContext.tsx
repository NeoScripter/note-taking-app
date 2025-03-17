import { ThemeContext } from "@/providers/ThemeProvider";
import { useContext } from "react";

export default function useThemeContext() {
    const themeContext = useContext(ThemeContext);

    if (themeContext == null) {
        throw new Error('Must be within provider');
    }

    return themeContext;
}
