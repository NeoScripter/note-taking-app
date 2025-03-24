import { Button } from '@headlessui/react';
import clsx from 'clsx';

type PrimaryBtnProps = {
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
};
export default function PrimaryBtn({ children, className, type = 'button' }: PrimaryBtnProps) {
    return (
        <Button
            className={clsx(
                'theme-colors font-medium bg-primary-blue data-[hover]:bg-hover-blue data-[focus]:shadow-btn cursor-pointer rounded-lg px-4 py-3 text-sm text-white data-[focus]:ring-1',
                className,
            )}
            type={type}
        >
            {children}
        </Button>
    );
}
