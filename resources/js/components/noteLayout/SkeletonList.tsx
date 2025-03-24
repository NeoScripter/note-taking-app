import NoteItemSkeleton from './NoteItemSkeleton';

export default function SkeletonList() {
    return (
        <ul className="space-y-2 px-4 sm:px-8 md:pr-0 md:pl-4">
            {[0, 1, 2, 3, 4, 5].map((number) => (
                <NoteItemSkeleton key={number + 'skeleton'} />
            ))}
        </ul>
    );
}
