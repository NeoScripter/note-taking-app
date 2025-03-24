import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { ModalProvider } from './providers/ModalProvider';
import { ThemeProvider } from './providers/ThemeProvider';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

resetPageOnRefresh();

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ThemeProvider>
                <ModalProvider>
                    <App {...props} />
                </ModalProvider>
            </ThemeProvider>,
        );
    },
    progress: {
        color: '#335CFF',
    },
});

function resetPageOnRefresh() {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const isRefresh = navigationEntry.type === 'reload';

    if (isRefresh) {
        const url = new URL(window.location.href);
        const pageParam = url.searchParams.get('page');

        if (pageParam && pageParam !== '1') {
            url.searchParams.set('page', '1');
            window.location.replace(url.toString());
        }
    }
}
