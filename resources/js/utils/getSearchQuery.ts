
export function getSearchQuery(): string | null {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get('search');
}
