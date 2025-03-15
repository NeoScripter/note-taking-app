import { Field, Input, Label } from '@headlessui/react';

type EmailFieldProps = {
    setter: (key: string, value: string) => void;
    fieldName: string;
};

export default function EmailField({ setter, fieldName }: EmailFieldProps) {
    return (
        <Field>
            <Label className="mb-1 flex items-center justify-between">Email Address</Label>
            <Input
                onChange={(e) => setter(fieldName, e.target.value)}
                name={fieldName}
                type="email"
                className="border-colors outline-none w-full rounded-lg border px-4 py-3 data-[hover]:bg-gray-neutral data-[focus]:ring-1 data-[focus]:shadow-input"
                autoFocus
                placeholder='email@example.com'
            />
        </Field>
    );
}
