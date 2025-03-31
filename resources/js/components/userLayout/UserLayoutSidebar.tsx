import { useModalContext } from '@/hooks/useModalContext';
import { useScreenResize } from '@/hooks/useScreenResize';
import useThemeContext from '@/hooks/useThemeContext';
import { THEMES } from '@/utils/theme';
import { usePage } from '@inertiajs/react';
import darkLogo from '../../../images/logo-dark.webp';
import lightLogo from '../../../images/logo-light.webp';

import { ROUTES } from '@/consts/routeNames';
import useTrans from '@/hooks/useTrans';
import TagNavItem from '../shared/TagNavItem';
import ArchiveIcon from '../svgs/ArchiveIcon';
import HouseIcon from '../svgs/HouseIcon';
import TagIcon from '../svgs/TagIcon';

export default function UserLayoutSidebar() {
    const { theme } = useThemeContext();
    const { showSidebar } = useModalContext();
    const isLarge = useScreenResize();
    const { props } = usePage<{ tags: string[] }>();
    const t = useTrans();

    return (
        (showSidebar || isLarge) && (
            <aside className="bg-colors border-colors fixed inset-0 top-12 bottom-14 z-30 overflow-y-auto px-4 py-5 sm:top-19 sm:bottom-19 sm:px-8 sm:py-6 md:static md:inset-auto md:w-68 md:border-r md:px-4 md:py-3">
                <div className="hidden md:block">
                    <div className="mb-4 w-24 py-3">
                        <img src={theme === THEMES.LIGHT ? lightLogo : darkLogo} alt="Notes logo" />
                    </div>

                    <nav>
                        <ul>
                            <TagNavItem routeName={ROUTES.HOME} label={t('All Notes')}>
                                <HouseIcon width="20" height="20" />
                            </TagNavItem>
                            <TagNavItem routeName={ROUTES.ARCHIVE} label={t('Archived Notes')}>
                                <ArchiveIcon width="20" height="20" />
                            </TagNavItem>
                        </ul>
                    </nav>
                </div>
                <p className="border-colors mb-4 text-2xl font-bold md:mt-2 md:mb-0 md:border-t md:px-3 md:py-2 md:text-sm md:font-normal md:text-[#717784]">
                {t('Tags')}
                </p>
                <nav>
                    <ul className="notes-height scrollbar-hidden overflow-y-auto" scroll-region="true">
                        {props.tags.map((tag) => (
                            <TagNavItem key={tag} routeName={ROUTES.TAG} tagName={tag} label={tag}>
                                <TagIcon width="20" height="20" />
                            </TagNavItem>
                        ))}
                    </ul>
                </nav>
            </aside>
        )
    );
}
