import PrimaryBtn from '@/components/PrimaryBtn';
import PasswordField from '@/components/forms/PasswordField';
import TextField from '@/components/forms/TextField';
import AuthLayout from '@/layouts/AuthLayout';
import { Link, useForm } from '@inertiajs/react';

const Signup = () => {
    const { data, setData, post, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post('/signup');
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <TextField setter={setData} fieldName="name" value={data.name} error={errors.name} shouldFocus={true} placeholder="John Doe" label="Username" />

            <TextField setter={setData} fieldName="email" value={data.email} type="email" error={errors.email} placeholder="email@example.com" label="Email Address" />

            <PasswordField setter={setData} fieldName="password" value={data.password} hasResetLink={false} error={errors.password} description="At least 8 characters" label="Password" />

            <PasswordField setter={setData} fieldName="password_confirmation" value={data.password_confirmation} hasResetLink={false} error={errors.password_confirmation} label="Confirm Password" />

            <PrimaryBtn type="submit" className="w-full">
                Sign up
            </PrimaryBtn>

            <hr className="text-gray-300" />

            <p className="body-text text-center">
                Already have an account?{' '}
                <Link href="/login" className="title-text">
                    Login
                </Link>
            </p>
        </form>
    );
};

Signup.layout = (page: React.ReactElement) => (
    <AuthLayout
        children={page}
        title="Signup"
        heading="Create your account"
        subheading="Sign up to start organizing your notes and boost your productivity."
    />
);

export default Signup;
