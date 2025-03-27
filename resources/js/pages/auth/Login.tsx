import CheckboxField from '@/components/forms/CheckboxField';
import PasswordField from '@/components/forms/PasswordField';
import TextField from '@/components/forms/TextField';
import PrimaryBtn from '@/components/shared/PrimaryBtn';
import SecondaryBtn from '@/components/shared/SecondaryBtn';
import useTrans from '@/hooks/useTrans';
import AuthLayout from '@/layouts/AuthLayout';
import { Link, router, useForm } from '@inertiajs/react';

const Login = () => {
    const t = useTrans();
    const { data, setData, post, errors } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post('/login');
    }

    const loginAsDemo = () => {
        router.post(route('login.demo'));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
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

            <PasswordField setter={setData} fieldName="password" value={data.password} hasResetLink={true} error={errors.password} label={t("Password")} />

            <CheckboxField isChecked={data.remember} setter={setData} fieldName="remember">
                {t('remember me')}
            </CheckboxField>

            <PrimaryBtn type="submit" className="w-full">
                {t('Login')}
            </PrimaryBtn>

            <hr className="hr-colors" />

            <p className="body-text text-center text-sm">{t('Or enter without registration')}</p>

            <SecondaryBtn onClick={loginAsDemo} type="button" className="w-full justify-center">
                {t('Try it out')}
            </SecondaryBtn>

            <hr className="hr-colors" />

            <p className="body-text text-center">
                {t('No account yet?')}{' '}
                <Link href="/signup" className="title-text">
                    {t('Sign up')}
                </Link>
            </p>
        </form>
    );
};

Login.layout = (page: React.ReactElement) => (
    <AuthLayout children={page} title="Login" heading="Welcome to Note" subheading="Please log in to continue" />
);

export default Login;
