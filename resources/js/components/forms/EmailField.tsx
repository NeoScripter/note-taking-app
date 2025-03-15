import { Field, Input, Label } from '@headlessui/react';
import clsx from 'clsx';
import ErrorField from './ErrorField';

type EmailFieldProps = {
    setter: (key: string, value: string) => void;
    fieldName: string;
    error?: string;
};

export default function EmailField({ setter, fieldName, error }: EmailFieldProps) {
    return (
        <Field>
            <Label className="mb-1 flex items-center justify-between">Email Address</Label>
            <Input
                onChange={(e) => setter(fieldName, e.target.value)}
                name={fieldName}
                type="email"
                className={clsx(
                    'border-colors data-[hover]:bg-gray-neutral data-[focus]:shadow-input w-full rounded-lg border px-4 py-3 outline-none data-[focus]:ring-1',
                    error && 'border-red-600!',
                )}
                autoFocus
                placeholder="email@example.com"
            />
            {error && <ErrorField>{error}</ErrorField>}
        </Field>
    );
}
