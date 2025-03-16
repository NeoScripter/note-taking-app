type ChevronLeftProps = {
    width?: string;
    height?: string;
    className?: string;
};

export default function ChevronLeft({ width = '20', height = '20', className }: ChevronLeftProps) {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.1249 17.0117L6.11328 10L13.1249 2.98834L14.3032 4.16668L8.46991 10L14.3032 15.8333L13.1249 17.0117Z"
                fill="#525866"
            />
        </svg>
    );
}
