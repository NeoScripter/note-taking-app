import { router } from '@inertiajs/react';
import clsx from 'clsx';
import { useState } from 'react';
import { ScaleLoader } from 'react-spinners';

export default function PageLoader() {
    const [loading, setLoading] = useState(false);

    const start = (event: { detail: { visit: { prefetch: boolean } } }) => {
        if (!event.detail.visit.prefetch) {
            setLoading(true);
        }
    };
    const stop = () => setLoading(false);

    router.on('start', start);
    router.on('finish', stop);
    router.on('error', stop);

    return (
        <div
            className={clsx(
                'fixed inset-0 z-[100] flex items-center justify-center bg-black/60 transition-opacity duration-300',
                loading ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
            )}
        >
            <ScaleLoader color="#fff" />
        </div>
    );
}
