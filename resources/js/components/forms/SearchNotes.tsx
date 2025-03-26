import { ROUTES } from '@/consts/routeNames';
import { Input } from '@headlessui/react';
import { router, useForm } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import SearchIcon from '../svgs/SeachIcon';

export default function SearchNotes() {
    const { data, setData, reset } = useForm({
        search: '',
    });

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (route().current() !== ROUTES.SEARCH) {
            reset();
        }
    }, [route().current()]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData('search', e.target.value);
    };

    function search() {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            router.get(route(ROUTES.SEARCH), { search: data.search }, { preserveState: true, replace: true });
        }, 300);
    }

    return (
        <>
            <div className="relative mb-4 ml-auto block md:mb-0 md:w-100">
                <SearchIcon className="body-text absolute bottom-1/2 left-3 translate-y-1/2" />
                <Input
                    value={data.search}
                    onChange={handleInput}
                    onKeyUp={search}
                    type="search"
                    name="search"
                    placeholder="Search by title, content, or tags…"
                    className="light-border-colors data-[focus]:shadow-input data-[focus]:dark:shadow-input-dark w-full rounded-lg border px-4 py-3 pl-12 text-sm outline-none data-[focus]:ring-1 data-[hover]:bg-gray-neutral data-[hover]:dark:bg-[#232530]"
                />
            </div>
            {data.search !== '' && (
                <p className="body-text my-4 block text-sm md:hidden">{`All notes matching ”${data.search}” are displayed below.`}</p>
            )}
        </>
    );
}
