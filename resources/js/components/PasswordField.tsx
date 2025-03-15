import { Button, Description, Field, Input, Label } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

type PasswordFieldProps = {
    setter: (key: string, value: string) => void;
    fieldName: string;
    hasResetLink: boolean;
    description?: string;
};

export default function PasswordField({ setter, fieldName, hasResetLink, description }: PasswordFieldProps) {
    const [showInput, setShowInput] = useState(false);

    return (
        <Field>
            <Label className="mb-1 flex items-center justify-between">
                Password
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
                    className="border-colors theme-colors data-[hover]:bg-gray-neutral data-[focus]:shadow-input w-full rounded-lg border px-4 py-3 outline-none focus:outline-none data-[focus]:ring-1"
                />
                <Button onClick={() => setShowInput((o) => !o)} className="absolute right-5 bottom-1/2 translate-y-1/2 cursor-pointer">
                {showInput ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                    </svg>
                )}
            </Button>
            </div>
            {description && (
                <Description className="body-text text-xs mt-1 inline-flex items-center gap-2">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2 8.5C2 11.8133 4.68605 14.5 8 14.5C11.3139 14.5 14 11.8133 14 8.5C14 5.18605 11.3139 2.5 8 2.5C4.68605 2.5 2 5.18605 2 8.5Z"
                            stroke="#525866"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M8.0038 10.9621V8.09573V10.9621ZM8 6.0695V6.02734V6.0695Z" fill="#525866" />
                        <path d="M8.0038 10.9621V8.09573M8 6.0695V6.02734" stroke="#525866" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    {description}
                </Description>
            )}
        </Field>
    );
}
