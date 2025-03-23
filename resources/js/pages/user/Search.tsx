import NoteLayout from '@/layouts/NoteLayout';
import UserLayout from '@/layouts/UserLayout';

const Search = () => {
    return (
        <>
            <h1>this is search page</h1>
        </>
    );
};

Search.layout = (page: React.ReactElement) => (
    <UserLayout title="Search" header="Show results for: ">
        <NoteLayout>{page}</NoteLayout>
    </UserLayout>
);

export default Search;
