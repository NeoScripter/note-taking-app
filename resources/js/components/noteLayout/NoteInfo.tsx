type NoteInfoProps = {
    children: React.ReactNode;
    info: string;
};

export default function NoteInfo({ children, info }: NoteInfoProps) {
    return (
        <div className="flex items-center gap-2">
            <div className="flex w-full max-w-28.75 items-center gap-1.5">{children}</div>
            <div className="flex-1">{info}</div>
        </div>
    );
}
