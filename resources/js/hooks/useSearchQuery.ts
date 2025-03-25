import { usePage } from '@inertiajs/react';

export default function useSearchQuery(): string | null {
    const { url } = usePage();
    const queryParams = new URLSearchParams(url.includes('?') ? url.split('?')[1] : '');
    return queryParams.get('search');
}
