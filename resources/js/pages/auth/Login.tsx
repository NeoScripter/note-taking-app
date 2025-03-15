import CheckboxField from '@/components/forms/CheckboxField';
import EmailField from '@/components/forms/EmailField';
import PasswordField from '@/components/forms/PasswordField';
import PrimaryBtn from '@/components/PrimaryBtn';
import AuthLayout from '@/layouts/AuthLayout';
import { Link, useForm } from '@inertiajs/react';

const Login = () => {
    const { data, setData, post, errors } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post('/login');
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <EmailField setter={setData} fieldName="email" error={errors.email} />

            <PasswordField setter={setData} fieldName="password" hasResetLink={true} error={errors.password} />

            <CheckboxField isChecked={data.remember} setter={setData} fieldName='remember'>remember me</CheckboxField>

            <PrimaryBtn type="submit" className="w-full">
                Login
            </PrimaryBtn>

            <hr className="text-gray-300" />

            <p className="body-text text-center">
                No account yet?{' '}
                <Link href="/signup" className="title-text">
                    Sign up
                </Link>
            </p>
        </form>
    );
};

Login.layout = (page: React.ReactElement) => (
    <AuthLayout children={page} title="Login" heading="Welcome to Note" subheading="Please log in to continue" />
);

export default Login;
