import UserLayout from '@/layouts/UserLayout';

const Dashboard = () => {
    return (
        <>
            <h1>Welcome</h1>
            <p>Hello, welcome to your first Inertia app!</p>
        </>
    );
};

Dashboard.layout = (page: React.ReactElement) => (
    <UserLayout
        children={page}
        title="Dashboard
"
    />
);

export default Dashboard;
