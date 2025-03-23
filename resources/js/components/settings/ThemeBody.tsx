import { RadioBtn } from '@/types/radio-btn';
import { RadioGroup } from '@headlessui/react';
import RadioField from '../forms/RadioField';
import ThemeBodyLayout from './ThemeBodyLayout';

type ThemeBodyProps = {
    onClick: () => void;
    title: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
    value: string;
    ariaLabel: string;
    radioBtns: RadioBtn[];
};

export default function ThemeBody({ onClick, title, onChange, value, ariaLabel, radioBtns }: ThemeBodyProps) {
    return (
        <ThemeBodyLayout onClick={onClick}>
            <p className="mb-2 text-2xl font-bold">{title} Theme</p>
            <p className="mb-4">{`Choose your ${title.toLowerCase()} theme:`}</p>
            <RadioGroup value={value} onChange={onChange} aria-label={ariaLabel} className="space-y-4">
                {radioBtns.map((radioBtn) => (
                    <RadioField
                        key={radioBtn.key}
                        imagePath={radioBtn.imagePath}
                        fontName={radioBtn.name}
                        fontDescription={radioBtn.description}
                        value={radioBtn.value}
                    />
                ))}
            </RadioGroup>
        </ThemeBodyLayout>
    );
}
