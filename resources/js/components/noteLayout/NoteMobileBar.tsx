import { useModalContext } from '@/hooks/useModalContext';
import ChevronLeft from '../svgs/ChevronLeft';

type NoteMobileBarProps = {
    children: React.ReactNode;
};

export default function NoteMobileBar({ children }: NoteMobileBarProps) {
    const { closeNotePage, closeCreateNew } = useModalContext();
    return (
        <div className="body-text xs:gap-4 border-colors mb-4 flex items-center justify-end gap-3 border-b pb-4 text-sm md:hidden">
            <button
                onClick={() => {
                    closeNotePage();
                    closeCreateNew();
                }}
                className="mr-auto flex cursor-pointer items-center gap-2"
            >
                <ChevronLeft />
                Go Back
            </button>
            {children}
        </div>
    );
}
