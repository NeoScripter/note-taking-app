import { Field, Label, Checkbox } from '@headlessui/react';

type CheckboxFieldProps = {
    children: React.ReactNode;
    setter: (key: string, value: boolean) => void;
    isChecked: boolean;
    fieldName: string;
}

export default function CheckboxField({ children, setter, isChecked, fieldName}: CheckboxFieldProps) {
    return (
        <Field className="inline-flex items-center gap-2">
            <Checkbox
                checked={isChecked}
                onChange={(checked: boolean) => setter(fieldName, checked)}
                name={fieldName}
                className="group block size-4 rounded border border-gray-400 bg-white data-[checked]:bg-blue-500"
            >
                <svg className="stroke-white opacity-0 group-data-[checked]:opacity-100" viewBox="0 0 14 14" fill="none">
                    <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Checkbox>
            <Label className="body-text text-sm">{children}</Label>
        </Field>
    );
}
