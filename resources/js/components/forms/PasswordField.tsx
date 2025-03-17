import { Field, Input, Label } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import clsx from 'clsx';
import { useState } from 'react';
import ErrorField from './ErrorField';
import HintField from './HintField';
import ShowInputBtn from './ShowInputBtn';

type PasswordFieldProps = {
    setter: (key: string, value: string) => void;
    fieldName: string;
    hasResetLink: boolean;
    description?: string;
    error?: string;
    label: string;
};

export default function PasswordField({ setter, fieldName, hasResetLink, description, error, label }: PasswordFieldProps) {
    const [showInput, setShowInput] = useState(false);

    return (
        <Field>
            <Label className="mb-1 flex items-center justify-between">
                {label}
                {hasResetLink && (
                    <Link href="/password-reset" className="body-text text-xs underline">
                        Forgot password
                    </Link>
                )}
            </Label>
            <div className="relative">
                <Input
                    onChange={(e) => setter(fieldName, e.target.value)}
                    name={fieldName}
                    type={showInput ? 'text' : 'password'}
                    className={clsx(
                        'border-colors theme-colors data-[hover]:bg-gray-neutral data-[hover]:dark:bg-[#232530] data-[focus]:shadow-input data-[focus]:dark:shadow-input-dark w-full rounded-lg border px-4 py-3 outline-none focus:outline-none data-[focus]:ring-1',
                        error && 'border-red-600!',
                    )}
                />
                <ShowInputBtn showInput={showInput} onClick={() => setShowInput((o) => !o)} />
            </div>
            {error ? <ErrorField>{error}</ErrorField> : (description && <HintField>{description}</HintField>)}
        </Field>
    );
}
