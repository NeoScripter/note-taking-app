import { Field, Input, Label } from '@headlessui/react';
import clsx from 'clsx';
import ErrorField from '../forms/ErrorField';

type EditNoteInfoProps = {
    children: React.ReactNode;
    value?: string;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    error?: string;
};

export default function EditNoteInfo({ children, value = '', placeholder = '', onChange, error }: EditNoteInfoProps) {
    return (
        <Field className="flex items-center gap-2">
            <Label className="flex w-full max-w-28.75 items-center gap-1.5">{children}</Label>
            <Input
                onChange={onChange}
                className={clsx(
                    'border-colors data-[hover]:bg-gray-neutral data-[focus]:shadow-input data-[focus]:dark:shadow-input-dark w-full flex-1 rounded-lg border p-1 outline-none data-[focus]:ring-1 data-[hover]:dark:bg-[#232530]',
                    error && 'border-red-600!',
                )}
                value={value}
                placeholder={placeholder}
            />
            {error && <ErrorField>{error}</ErrorField>}
        </Field>
    );
}
