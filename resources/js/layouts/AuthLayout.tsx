import { Head } from '@inertiajs/react';
import lightLogo from '../../images/logo-light.webp';

type AuthLayoutProps = {
    children: React.ReactElement;
    title: string;
    heading: string;
    subheading: string;
};

export default function AuthLayout({ children, title, heading, subheading }: AuthLayoutProps) {
    return (
        <>
            <Head title={title} />
            <main className="bg-gray-neutral theme-colors dark:bg-slate-neutral flex min-h-screen items-center justify-center">
                <div className="mx-4 w-full overflow-y-auto rounded-lg bg-white px-4 py-10 shadow-md max-w-130 sm:px-8 sm:py-12 md:max-w-135 md:px-12">
                    <header className="mb-10 text-center text-balance">
                        <div className="mx-auto mb-6 w-24">
                            <img src={lightLogo} alt="Notes logo" className="w-full object-contain object-center" />
                        </div>
                        <h1 className="mb-1 text-2xl font-bold">{heading}</h1>
                        <p className="body-text text-sm">{subheading}</p>
                    </header>
                    <article>{children}</article>
                </div>
            </main>
        </>
    );
}
