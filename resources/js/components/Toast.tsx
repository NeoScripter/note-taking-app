import { usePage } from '@inertiajs/react';

type PageProps = {
    flash?: {
        message?: string;
    };
};

export default function Toast() {
    const { flash } = usePage<PageProps>().props;
    /* const [showMessage, setShowMessage] = useState(true); */

    return (
        <div className="bg-colors border-colors text-xs sm:text-sm fixed right-4 sm:right-8 sm:bottom-27 md:right-16 md:bottom-16 bottom-19 z-30 flex w-68 items-center justify-between rounded-lg border p-2.5 sm:w-98">
            <div className="flex items-center gap-2">
                <div>
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.6618 6.81499L7.58317 9.89366C7.48517 9.99166 7.35784 10.0403 7.22984 10.0403C7.10117 10.0403 6.97384 9.99166 6.87584 9.89366L5.3365 8.35433C5.14117 8.15899 5.14117 7.84233 5.3365 7.64699C5.53184 7.45166 5.84784 7.45166 6.04317 7.64699L7.22984 8.83299L9.9545 6.10766C10.1498 5.91233 10.4665 5.91233 10.6618 6.10766C10.8572 6.30299 10.8572 6.61966 10.6618 6.81499ZM7.99984 1.66699C4.50784 1.66699 1.6665 4.50833 1.6665 8.00033C1.6665 11.493 4.50784 14.3337 7.99984 14.3337C11.4918 14.3337 14.3332 11.493 14.3332 8.00033C14.3332 4.50833 11.4918 1.66699 7.99984 1.66699Z"
                            fill="#21C16B"
                        />
                    </svg>
                </div>
                <div>long and interesting message</div>
            </div>
            <button>&times;</button>
        </div>
    );
}
