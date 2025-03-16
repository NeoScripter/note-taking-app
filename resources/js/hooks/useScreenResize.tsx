import { useRef, useState } from 'react';
import useEventListener from './useEventListener';

export function useScreenResize() {
    const [isLarge, setIsLarge] = useState(() => window.innerWidth > 1250);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEventListener('resize', () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setIsLarge(window.innerWidth > 1250);
        }, 100);
    });

    return isLarge;
}
