import { useModalContext } from '@/hooks/useModalContext';
import ChevronLeft from '../svgs/ChevronLeft';
import useTrans from '@/hooks/useTrans';

type NoteMobileBarProps = {
    children: React.ReactNode;
};

export default function NoteMobileBar({ children }: NoteMobileBarProps) {
    const { closeNotePage, closeCreateNew } = useModalContext();
    const t = useTrans();
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
                {t('Go Back')}
            </button>
            {children}
        </div>
    );
}
