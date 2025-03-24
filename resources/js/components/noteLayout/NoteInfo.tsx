import clsx from "clsx";

type NoteInfoProps = {
    children: React.ReactNode;
    info: string;
    className?: string;
};

export default function NoteInfo({ children, info, className }: NoteInfoProps) {
    return (
        <div className={clsx("flex items-center gap-2", className)}>
            <div className="flex w-full max-w-28.75 items-center gap-1.5">{children}</div>
            <div className="flex-1">{info}</div>
        </div>
    );
}
