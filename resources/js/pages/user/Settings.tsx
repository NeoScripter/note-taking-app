import UserLayout from '@/layouts/UserLayout';

const Settings = () => {
    return (
        <>
            <h1>this is settings page</h1>
        </>
    );
};

Settings.layout = (page: React.ReactElement) => <UserLayout children={page} title="Settings" />;

export default Settings;
