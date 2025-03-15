import { Link, useForm } from "@inertiajs/react";
import PasswordField from '@/components/PasswordField';
import AuthLayout from '@/layouts/AuthLayout';
import EmailField from "@/components/EmailField";
import PrimaryBtn from "@/components/PrimaryBtn";

const Signup = () => {
    const { data, setData } = useForm({
        email: "",
        password: "",
    });

    return (
        <div className='space-y-4 text-sm'>
            <EmailField setter={setData} fieldName="email" />

            <PasswordField setter={setData} fieldName="password" hasResetLink={false} description="At least 8 characters" />

            <PrimaryBtn type="submit" className="w-full">Sign up</PrimaryBtn>

            <hr className="text-gray-300" />

            <p className="body-text text-center">Already have an account? <Link href="/login" className="title-text">Login</Link></p>
        </div>
    );
};

Signup.layout = (page: React.ReactElement) => (
    <AuthLayout children={page} title="Signup" heading="Create your account" subheading="Sign up to start organizing your notes and boost your productivity." />
);

export default Signup;
