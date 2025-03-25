import useDebounce from '@/hooks/useDebounce';
import { Input } from '@headlessui/react';
import { router, useForm } from '@inertiajs/react';
import SearchIcon from '../svgs/SeachIcon';
import { useEffect } from 'react';

export default function SearchNotes() {
    const { data, setData, reset } = useForm({
        search: '',
    });

    useEffect(() => {
        reset();
    }, [route().current()])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData('search', e.target.value);
    };

    useDebounce(
        () => {
            router.get(route('search'), { search: data.search }, { preserveState: true, replace: true });
        },
        400,
        [data.search],
    );

    return (
        <>
        <div className="relative ml-auto block mb-4 md:mb-0">
            <SearchIcon className="body-text absolute bottom-1/2 left-3 translate-y-1/2" />
            <Input
                value={data.search}
                onChange={handleInput}
                type="search"
                name="search"
                placeholder="Search..."
                className="light-border-colors data-[hover]:dark:bg-[#232530] data-[focus]:shadow-input data-[focus]:dark:shadow-input-dark w-full rounded-lg border px-4 py-3 pl-12 text-sm outline-none data-[focus]:ring-1"
            />
        </div>
        {data.search !== '' && <p className='block md:hidden my-4 body-text text-sm'>{`All notes matching ”${data.search}” are displayed below.`}</p>}
        </>
    );
}
