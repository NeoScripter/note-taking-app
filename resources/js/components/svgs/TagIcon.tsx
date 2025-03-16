type TagIconProps = {
    width?: string;
    height?: string;
};

export default function TagIcon({ width = '25', height = '24' }: TagIconProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.11592 5.96647C3.11884 4.5547 4.18618 3.28888 5.57168 3.0505C5.85578 3.00088 9.18818 3.00769 10.5669 3.00866C11.931 3.00964 13.0937 3.50001 14.0569 4.4613C16.1021 6.50257 18.1453 8.5458 20.1856 10.591C21.393 11.8004 21.4096 13.6568 20.207 14.8701C18.4722 16.6214 16.7286 18.364 14.9783 20.0988C13.766 21.3004 11.9096 21.2848 10.6992 20.0774C8.63554 18.0195 6.57188 15.9617 4.51698 13.8951C3.72207 13.0954 3.25311 12.1292 3.149 10.9996C3.06532 10.0967 3.11397 6.73998 3.11592 5.96647Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0072 8.31531C10.0033 9.18514 9.27652 9.90027 8.39794 9.89832C7.52519 9.89638 6.79838 9.1686 6.80325 8.30169C6.80909 7.39683 7.52519 6.69144 8.43588 6.69533C9.29987 6.69825 10.0111 7.43089 10.0072 8.31531Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
