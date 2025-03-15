import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react'

type UserLayoutProps = {
    children: React.ReactElement;
    title: string;
}

export default function UserLayout({ children, title }: UserLayoutProps) {
    return (
        <>
        <Head title={title} />
        <main>
            <header>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </header>
            <article>{children}</article>
        </main>
        </>
    );
}
