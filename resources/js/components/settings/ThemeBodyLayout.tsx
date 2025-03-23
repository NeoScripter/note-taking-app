import ChevronLeft from '../svgs/ChevronLeft';

type ThemeBodyLayoutProps = {
    children: React.ReactNode;
    onClick: () => void;
};

export default function ThemeBodyLayout({ children, onClick }: ThemeBodyLayoutProps) {
    return (
        <div className="bg-colors absolute inset-0 z-10 md:static md:p-8">
            <button onClick={onClick} className="body-text mb-4 flex cursor-pointer items-center gap-2 text-sm md:hidden">
                <ChevronLeft />
                Settings
            </button>
            {children}
        </div>
    );
}
