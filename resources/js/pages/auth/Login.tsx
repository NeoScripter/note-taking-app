import { Link, useForm } from "@inertiajs/react";
import PasswordField from '@/components/PasswordField';
import AuthLayout from '@/layouts/AuthLayout';
import EmailField from "@/components/EmailField";
import PrimaryBtn from "@/components/PrimaryBtn";

const Login = () => {
    const { data, setData } = useForm({
        email: "",
        password: "",
    });

    return (
        <div className='space-y-4 text-sm'>
            <EmailField setter={setData} fieldName="email" />

            <PasswordField setter={setData} fieldName="password" hasResetLink={true} />

            <PrimaryBtn type="submit" className="w-full">Login</PrimaryBtn>

            <hr className="text-gray-300" />

            <p className="body-text text-center">No account yet? <Link href="" className="title-text">Sign up</Link></p>
        </div>
    );
};

Login.layout = (page: React.ReactElement) => (
    <AuthLayout children={page} title="Login" heading="Welcome to Note" subheading="Please log in to continue" />
);

export default Login;
