import ChevronRight from './svgs/ChevronRight';
import clsx from 'clsx';

type SettingsBtnItemProps = {
    onClick: () => void;
    isCurrent?: boolean;
    children: React.ReactNode;
    label: string;
    className?: string;
};

export default function SettingsBtnItem({ onClick, isCurrent = false, children, label, className }: SettingsBtnItemProps) {

    return (
        <li>
            <button onClick={onClick} className={clsx("flex w-full cursor-pointer items-center gap-2 py-3 text-sm md:border-none md:px-3 md:rounded-lg", isCurrent && 'text-primary-blue bg-gray-neutral', className)}>
                {children}
                <span className='body-text'>{label}</span>
                {isCurrent && <ChevronRight className="ml-auto" />}
            </button>
        </li>
    );
}
