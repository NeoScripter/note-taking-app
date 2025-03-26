import { Button } from '@headlessui/react';
import clsx from 'clsx';

type PrimaryBtnProps = {
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
    onClick?: () => void;
};
export default function PrimaryBtn({ children, className, type = 'button', onClick = () => {}, disabled = false }: PrimaryBtnProps) {
    return (
        <Button
            disabled={disabled}
            onClick={onClick}
            className={clsx(
                'theme-colors font-medium bg-primary-blue data-[hover]:bg-hover-blue data-[focus]:shadow-btn data-[focus]:dark:shadow-create-btn-dark cursor-pointer rounded-lg px-4 py-3 text-sm text-white data-[focus]:ring-1',
                className,
            )}
            type={type}
        >
            {children}
        </Button>
    );
}
