
import UserLayout from '@/layouts/UserLayout';

const Archive = () => {
    return (
        <>
            <h1>this is archive page</h1>
        </>
    );
};

Archive.layout = (page: React.ReactElement) => (
    <UserLayout
        children={page}
        title="Archive"
        header="Archived Notes"
    />
);

export default Archive;
