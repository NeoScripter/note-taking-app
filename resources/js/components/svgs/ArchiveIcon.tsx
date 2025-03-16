type ArchiveIconProps = {
    width?: string;
    height?: string;
};

export default function ArchiveIcon({ width = '25', height = '24' }: ArchiveIconProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21.5 7.78216V16.2169C21.5 19.165 19.4188 21 16.4736 21H8.52638C5.58119 21 3.5 19.165 3.5 16.2159V7.78216C3.5 4.83405 5.58119 3 8.52638 3H16.4736C19.4188 3 21.5 4.84281 21.5 7.78216Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M15.5 14L12.4982 17L9.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.498 17V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.4336 7H3.55859" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
