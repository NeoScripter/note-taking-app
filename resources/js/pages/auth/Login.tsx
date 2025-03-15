import AuthLayout from "@/layouts/AuthLayout";

const Login = () => {
    return (
        <>
            <h1>This is the login page</h1>
        </>
    );
};

Login.layout = (page: React.ReactElement) => (
    <AuthLayout
        children={page}
        title="Login"
        heading="Welcome to Note"
        subheading="Please log in to continue"
    />
);

export default Login;
