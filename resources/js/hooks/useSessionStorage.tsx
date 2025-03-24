import { useEffect, useState } from 'react';

export default function useSessionStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [value, setValue] = useState<T>(() => {
        try {
            const jsonValue = sessionStorage.getItem(key);
            if (jsonValue !== null) {
                return JSON.parse(jsonValue) as T;
            } else {
                sessionStorage.setItem(key, JSON.stringify(initialValue));
                return initialValue;
            }
        } catch (error) {
            console.error("Error reading sessionStorage", error);
            return initialValue;
        }
    });

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}
