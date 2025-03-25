import clsx from "clsx";
import FooterLink from "../shared/FooterLink";
import ArchiveIcon from "../svgs/ArchiveIcon";
import HouseIcon from "../svgs/HouseIcon";
import LoopIcon from "../svgs/LoopIcon";
import SettingsIcon from "../svgs/SettingsIcon";
import TagIcon from "../svgs/TagIcon";
import { useModalContext } from "@/hooks/useModalContext";
import { ROUTES } from "@/consts/routeNames";

export default function UserLayoutFooter() {
    const { showSidebar, openSidebar, closeNotePage } = useModalContext();

    return (
        <footer className="shadow-footer dark:shadow-footer-dark divide-colors bg-colors border-colors fixed right-0 bottom-0 left-0 z-20 flex items-center border-t px-4 py-3 sm:divide-x sm:px-0 md:hidden">
            <FooterLink routeName={ROUTES.HOME} title="Home">
                <HouseIcon />
            </FooterLink>
            <FooterLink routeName={ROUTES.SEARCH} title="Search">
                <LoopIcon />
            </FooterLink>
            <FooterLink routeName={ROUTES.ARCHIVE} title="Archived">
                <ArchiveIcon />
            </FooterLink>

            <div className="basis-1/5 sm:px-8">
                <button
                    onClick={() => {openSidebar(); closeNotePage()}}
                    className={clsx(
                        'flex w-full cursor-pointer flex-col items-center justify-center rounded-sm py-1',
                        (showSidebar || route().current() === ROUTES.TAG) && 'bg-pale-blue text-primary-blue dark:bg-[#232530]',
                    )}
                >
                    <TagIcon />

                    <p className="mt-1 hidden text-center text-xs sm:block">Tags</p>
                </button>
            </div>

            <FooterLink routeName={ROUTES.SETTIGNS} title="Settings">
                <SettingsIcon />
            </FooterLink>
        </footer>
    );
}
