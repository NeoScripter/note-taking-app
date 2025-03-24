type TrashIconProps = {
    width?: string;
    height?: string;
};

export default function TrashIcon({ width = '18', height = '18' }: TrashIconProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Delete">
                <path
                    id="Vector"
                    d="M11.139 2.79285L11.7527 4.07789H13.7322C14.3409 4.07789 14.8343 4.55157 14.8343 5.13588V5.91938C14.8343 6.31888 14.4969 6.64274 14.0808 6.64274H3.75349C3.33735 6.64274 3 6.31888 3 5.91938V5.13588C3 4.55157 3.49341 4.07789 4.10207 4.07789H6.08164L6.69529 2.79285C6.87941 2.40721 7.28081 2.15997 7.72271 2.15997H10.1116C10.5535 2.15997 10.9548 2.40721 11.139 2.79285Z"
                    stroke="currentColor"
                    strokeWidth="1.11818"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    id="Vector_2"
                    d="M13.6803 6.69653V12.9502C13.6803 14.1487 12.6808 15.1203 11.4478 15.1203H6.3877C5.15477 15.1203 4.15527 14.1487 4.15527 12.9502V6.69653"
                    stroke="currentColor"
                    strokeWidth="1.11818"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    id="Vector_3"
                    d="M7.64941 9.22772V12.4738M10.1847 9.22772V12.4738"
                    stroke="currentColor"
                    strokeWidth="1.11818"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}
