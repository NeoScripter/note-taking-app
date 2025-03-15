import { Field, Input, Label } from '@headlessui/react';
import clsx from 'clsx';
import ErrorField from './ErrorField';

type TextFieldProps = {
    setter: (key: string, value: string) => void;
    fieldName: string;
    shouldFocus?: boolean;
    error?: string;
    placeholder?: string;
    label: string;
    type?: string;
};

export default function TextField({ setter, fieldName, error, shouldFocus = false, placeholder = '', label, type = 'text' }: TextFieldProps) {
    return (
        <Field>
            <Label className="mb-1 flex items-center justify-between">{label}</Label>
            <Input
                onChange={(e) => setter(fieldName, e.target.value)}
                name={fieldName}
                type={type}
                className={clsx(
                    'border-colors data-[hover]:bg-gray-neutral data-[focus]:shadow-input w-full rounded-lg border px-4 py-3 outline-none data-[focus]:ring-1',
                    error && 'border-red-600!',
                )}
                autoFocus={shouldFocus}
                placeholder={placeholder}
            />
            {error && <ErrorField>{error}</ErrorField>}
        </Field>
    );
}
