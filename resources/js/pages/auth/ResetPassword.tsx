import PasswordField from '@/components/forms/PasswordField';
import TextField from '@/components/forms/TextField';
import PrimaryBtn from '@/components/shared/PrimaryBtn';
import AuthLayout from '@/layouts/AuthLayout';
import { useForm } from '@inertiajs/react';

interface ResetPasswordProps {
    token: string;
    email: string;
}

type ResetPasswordForm = {
    token: string;
    email: string;
    password: string;
    password_confirmation: string;
};

const ResetPassword = ({ token, email }: ResetPasswordProps) => {
    const { data, setData, post, processing, errors, reset } = useForm<Required<ResetPasswordForm>>({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <TextField
                setter={setData}
                fieldName="email"
                value={data.email}
                type="email"
                error={errors.email}
                placeholder="email@example.com"
                label="Email Address"
                shouldFocus={true}
            />

            <PasswordField
                setter={setData}
                fieldName="password"
                value={data.password}
                hasResetLink={false}
                error={errors.password}
                description="At least 8 characters"
                label="New Password"
            />

            <PasswordField
                setter={setData}
                fieldName="password_confirmation"
                value={data.password_confirmation}
                hasResetLink={false}
                error={errors.password_confirmation}
                label="Confirm New Password"
            />

            <PrimaryBtn type="submit" disabled={processing} className="w-full">
                Reset Password
            </PrimaryBtn>
        </form>
    );
};

ResetPassword.layout = (page: React.ReactElement) => (
    <AuthLayout children={page} title="Reset Password" heading="Reset Your Password" subheading="Choose a new password to secure your account." />
);

export default ResetPassword;
