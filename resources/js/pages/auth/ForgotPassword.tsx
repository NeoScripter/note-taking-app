import TextField from '@/components/forms/TextField';
import PrimaryBtn from '@/components/shared/PrimaryBtn';
import { PageProps } from '@/components/shared/Toast';
import useTrans from '@/hooks/useTrans';
import AuthLayout from '@/layouts/AuthLayout';
import { useForm, usePage } from '@inertiajs/react';

const ForgotPassword = () => {
    const { flash } = usePage<PageProps>().props;
    const t = useTrans();

    const { data, setData, post, errors } = useForm({
        email: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post('/forgot-password');
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            {flash?.message && <p className="body-text text-sm text-center text-balance">{flash.message.text}</p>}

            <TextField
                setter={setData}
                fieldName="email"
                value={data.email}
                type="email"
                error={errors.email}
                placeholder="email@example.com"
                label={t("Email Address")}
                shouldFocus={true}
            />

            <PrimaryBtn type="submit" className="w-full">
                {t('Send Reset Link')}
            </PrimaryBtn>
        </form>
    );
};

ForgotPassword.layout = (page: React.ReactElement) => (
    <AuthLayout
        children={page}
        title="Forgot Password"
        heading="Forgot your password?"
        subheading="Enter your email below, and we’ll send you a link to reset it."
    />
);

export default ForgotPassword;
