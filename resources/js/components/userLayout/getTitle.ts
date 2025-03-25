import { ROUTES } from '@/consts/routeNames';
import { NotePropsType } from '@/types/note';
import { getSearchQuery } from '../../utils/getSearchQuery';

export function getTitle(routeName: (string & {}) | undefined, pageProps: NotePropsType) {
    switch (routeName) {
        case ROUTES.TAG:
            return pageProps.tag?.name ?? '';
        case ROUTES.SEARCH:
            return getSearchQuery() ?? '';
        default:
            return '';
    }
}
