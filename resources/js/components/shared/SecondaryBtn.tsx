
import { Button } from '@headlessui/react';
import clsx from 'clsx';

type SecondaryBtnProps = {
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
};
export default function SecondaryBtn({ children, className, type = 'button', onClick = () => {} }: SecondaryBtnProps) {
    return (
        <Button
            onClick={onClick}
            className={clsx(
                'theme-colors font-medium hover:bg-gray-neutral dark:hover:bg-black-pale focus:shadow-btn cursor-pointer rounded-lg px-4 py-3 text-sm title-text dark:bg-[#0E121B] border border-colors bg-white focus:ring-1 flex items-center gap-2',
                className,
            )}
            type={type}
        >
            {children}
        </Button>
    );
}
