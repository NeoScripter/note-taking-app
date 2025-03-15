import UserLayout from '@/layouts/UserLayout';
import { Link } from '@inertiajs/react';

type DashboardProps = {
    user: {
        name: string;
    };
};
const Dashboard = ({ user }: DashboardProps) => {
    return (
        <>
            <h1>Welcome, {user.name}</h1>
            <p>Hello, welcome to your first Inertia app!</p>

            <Link href="/logout" method="post" as="button" className="rounded bg-red-500 px-4 py-2 text-white cursor-pointer">
                Logout
            </Link>
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
