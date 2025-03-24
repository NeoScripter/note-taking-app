
export type Note = {
    id: number;
    user_id: number;
    title: string;
    content: string;
    archived: boolean;
    created_at: string | null;
    updated_at: string | null;
    tags?: Tag[];
}

export type Tag = {
    id: number;
    user_id: number;
    name: string;
    created_at: string | null;
    updated_at: string | null;
};

export type ExtendedNote = Note & {
    tags: Tag[];
};

export type NotePropsType = {
    notes: ExtendedNote[];
    isNextPageExists: boolean;
    page: number;
};

export type DashboardProps = {
    notes: Note[];
    note?: ExtendedNote | null;
};
