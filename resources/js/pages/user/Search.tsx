import UserLayout from '@/layouts/UserLayout';

const Search = () => {
    return (
        <>
            <h1>this is search page</h1>
        </>
    );
};

Search.layout = (page: React.ReactElement) => (
    <UserLayout
        children={page}
        title="Search"
        header="Show results for: "
    />
);

export default Search;
