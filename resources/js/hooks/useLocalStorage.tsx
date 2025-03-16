import { useEffect, useState } from 'react';

export default function useLocalStorage(key: string, initialValue: string): [string, React.Dispatch<React.SetStateAction<string>>] {
    const [value, setValue] = useState<string>(() => {
        try {
            const jsonValue = localStorage.getItem(key);
            if (jsonValue !== null) {
                return JSON.parse(jsonValue);
            } else {
                localStorage.setItem(key, JSON.stringify(initialValue));
                return initialValue;
            }
        } catch (error) {
            console.error("Error reading localStorage", error);
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}
