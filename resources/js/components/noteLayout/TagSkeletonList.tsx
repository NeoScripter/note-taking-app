import TagItemSkeleton from './TagItemSkeleton';

export default function TagSkeletonList() {
    return (
        <ul className="notes-height scrollbar-hidden animate-pulse overflow-y-auto">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                <TagItemSkeleton key={number + 'skeletonTag'} />
            ))}
        </ul>
    );
}
