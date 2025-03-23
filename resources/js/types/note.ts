
export type Note = {
    id: number;
    user_id: number;
    title: string;
    content: string;
    archived: boolean;
    created_at: string | null;
    updated_at: string | null;
}
