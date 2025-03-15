import AuthLayout from '@/layouts/AuthLayout';
import { Field, Input, Label } from '@headlessui/react';

const ResetPassword = () => {
    return (
        <div className='space-y-4'>
            <Field>
                <Label className="mb-1 block">New password</Label>
                <Input name="full_name" type='password' className="w-full border border-colors px-4 py-3 rounded-lg" />
            </Field>

        </div>
    );
};

ResetPassword.layout = (page: React.ReactElement) => (
    <AuthLayout children={page} title="Forgot Password" heading="Forgot your password" subheading="Enter your email below, and we’ll send you a link to reset it." />
);

export default ResetPassword;
