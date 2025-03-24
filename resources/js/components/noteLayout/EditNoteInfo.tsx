import { Field, Input, Label } from '@headlessui/react';
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
            <Input onChange={onChange} className="flex-1" value={value} placeholder={placeholder} />
            {error && <ErrorField>{error}</ErrorField>}
        </Field>
    );
}
