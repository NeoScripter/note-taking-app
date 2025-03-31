export default function TagItemSkeleton() {
    return (
        <li className="border-colors flex items-center gap-2 border-b px-3 py-2 text-sm md:rounded-lg md:border-none">
            <div className="bg-gray-pale dark:bg-black-pale h-full w-full rounded-sm px-1.5 py-1 text-transparent">loading</div>
        </li>
    );
}
