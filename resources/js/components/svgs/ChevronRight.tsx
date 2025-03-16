type ChevronRightProps = {
    width?: string;
    height?: string;
    className?: string;
};

export default function ChevronRight({ width = '6', height = '10', className }: ChevronRightProps) {
    return (
        <svg width={width} height={height} className={className} viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2394_2055)">
                <path d="M1 1L5 5L1 9" stroke="#0E121B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_2394_2055">
                    <rect width="6" height="10" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
