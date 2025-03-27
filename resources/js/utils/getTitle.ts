import { ROUTES } from '@/consts/routeNames';
import { NotePropsType } from '@/types/note';
import { getSearchQuery } from './getSearchQuery';

export function getTitle(routeName: (string & {}) | undefined, pageProps: NotePropsType) {
    switch (routeName) {
        case ROUTES.TAG:
            return pageProps.tag ?? '';
        case ROUTES.SEARCH:
            return getSearchQuery() ?? '';
        default:
            return '';
    }
}
