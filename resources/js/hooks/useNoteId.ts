import { usePage } from '@inertiajs/react';

export default function useNoteId(): string | null {
    const { url } = usePage();
    const queryParams = new URLSearchParams(url.includes('?') ? url.split('?')[1] : '');
    return queryParams.get('note_id');
}
