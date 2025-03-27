import { Head, Link } from '@inertiajs/react';
import lightLogo from '../../images/logo-light.webp';
import darkLogo from '../../images/logo-dark.webp';
import useThemeContext from '@/hooks/useThemeContext';
import { THEMES } from '@/utils/theme';
import useTrans from '@/hooks/useTrans';

type AuthLayoutProps = {
    children: React.ReactElement;
    title: string;
    heading: string;
    subheading: string;
};

export default function AuthLayout({ children, title, heading, subheading }: AuthLayoutProps) {
    const { theme } = useThemeContext();
    const t = useTrans();

    return (
        <>
            <Head title={title} />
            <main className="light-bg-colors flex min-h-screen items-center justify-center">
                <div className="mx-4 w-full overflow-y-auto rounded-lg bg-colors px-4 py-10 shadow-md max-w-130 sm:px-8 sm:py-12 md:max-w-135 md:px-12">
                    <header className="mb-10 text-center text-balance">
                        <Link as='div' href='/' className="mx-auto mb-6 w-24 cursor-pointer">
                            <img src={theme === THEMES.DARK ? darkLogo : lightLogo} alt="Notes logo" className="w-full object-contain object-center" />
                        </Link>
                        <h1 className="mb-1 text-2xl font-bold">{t(heading)}</h1>
                        <p className="body-text text-sm">{t(subheading)}</p>
                    </header>
                    <article>{children}</article>
                </div>
            </main>
        </>
    );
}
