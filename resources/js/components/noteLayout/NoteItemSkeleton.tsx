export default function NoteItemSkeleton() {
    return (
        <li className="block animate-pulse space-y-3 rounded-lg border-b p-2 pb-3 text-transparent">
            <p className="bg-gray-pale dark:bg-black-pale">title</p>
            <ul className="flex flex-wrap items-center gap-1">
                {[0, 1, 2].map((number) => (
                    <li key={`NoteItemSkeleton-${number}`} className="bg-gray-pale dark:bg-black-pale rounded-sm px-1.5 py-1 text-xs">
                        tag
                    </li>
                ))}
            </ul>
            <p className="bg-gray-pale dark:bg-black-pale w-1/2 text-xs">timestamp</p>
        </li>
    );
}
