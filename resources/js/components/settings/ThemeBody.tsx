import { RadioBtn } from '@/types/radio-btn';
import { RadioGroup } from '@headlessui/react';
import RadioField from '../forms/RadioField';
import ThemeBodyLayout from './ThemeBodyLayout';
import useTrans from '@/hooks/useTrans';

type ThemeBodyProps = {
    onClick: () => void;
    title: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
    value: string;
    ariaLabel: string;
    radioBtns: RadioBtn[];
    shouldInvert?: boolean;
    subtitle?: string;
};

export default function ThemeBody({ onClick, title, onChange, value, ariaLabel, radioBtns, shouldInvert = true, subtitle = title }: ThemeBodyProps) {
    const t = useTrans();

    return (
        <ThemeBodyLayout onClick={onClick}>
            <p className="mb-2 text-2xl font-bold">{title}</p>
            <p className="mb-4">{t('Choose your ') + subtitle.toLowerCase()}</p>
            <RadioGroup value={value} onChange={onChange} aria-label={ariaLabel} className="space-y-4">
                {radioBtns.map((radioBtn) => (
                    <RadioField
                        key={radioBtn.key}
                        imagePath={radioBtn.imagePath}
                        fontName={radioBtn.name}
                        fontDescription={radioBtn.description}
                        value={radioBtn.value}
                        shouldInvert={shouldInvert}
                    />
                ))}
            </RadioGroup>
        </ThemeBodyLayout>
    );
}
