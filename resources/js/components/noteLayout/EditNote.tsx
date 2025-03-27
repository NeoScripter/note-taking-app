import { useModalContext } from '@/hooks/useModalContext';
import useTrans from '@/hooks/useTrans';
import { formatDate } from '@/lib/formatDate';
import { ExtendedNote } from '@/types/note';
import { Field, Input, Textarea } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import clsx from 'clsx';
import ErrorField from '../forms/ErrorField';
import PrimaryBtn from '../shared/PrimaryBtn';
import SecondaryBtn from '../shared/SecondaryBtn';
import ClockIcon from '../svgs/ClockIcon';
import TagIcon from '../svgs/TagIcon';
import EditNoteInfo from './EditNoteInfo';
import NoteMobileBar from './NoteMobileBar';

type EditNoteProps = {
    note: ExtendedNote;
};

export default function EditNote({ note }: EditNoteProps) {
    const t = useTrans();
    const { finishEditing } = useModalContext();
    const { data, setData, post, processing, errors } = useForm({
        title: note.title,
        content: note.content,
        tags: note.tags.map((tag) => tag.name).join(', '),
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('notes.update', note), {
            onSuccess: () => {
                resetFields();
            },
        });
    };

    function resetFields() {
        finishEditing();
    }

    return (
        <>
            <NoteMobileBar>
                <button onClick={resetFields} className="cursor-pointer">
                    {t('Cancel')}
                </button>
                <button type="submit" form="create-note-form" className="text-primary-blue mr-2 cursor-pointer">
                    {t('Save Note')}
                </button>
            </NoteMobileBar>
            <form onSubmit={handleSubmit} id="create-note-form" className="notes-height flex flex-col">
                <header>
                    <Field className="mb-4">
                        <Input
                            placeholder={t('Enter a title...')}
                            className={clsx(
                                'border-colors data-[hover]:bg-gray-neutral data-[focus]:shadow-input data-[focus]:dark:shadow-input-dark w-full flex-1 rounded-lg border p-1 text-2xl font-bold outline-none data-[focus]:ring-1 data-[hover]:dark:bg-[#232530]',
                                errors.title && 'border-red-600!',
                            )}
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                        />
                        {errors.title && <ErrorField>{errors.title}</ErrorField>}
                    </Field>

                    <div className="title-text border-colors mb-4 space-y-3.5 border-b pb-4 text-xs sm:text-sm">
                        <EditNoteInfo
                            placeholder={t('Add tags separated by commas (e.g. Work, Planning)')}
                            onChange={(e) => setData('tags', e.target.value)}
                            value={data.tags}
                            error={errors.tags}
                        >
                            <TagIcon width="16" height="16" />
                            Tags{t('Save Note')}
                        </EditNoteInfo>

                        <div className="flex items-center gap-2">
                            <div className="flex w-full max-w-28.75 items-center gap-1.5">
                                <ClockIcon width="16" height="16" />
                                Last edited
                                {t('Save Note')}
                            </div>
                            <div className="flex-1 text-gray-400">
                                {note.updated_at ? formatDate(new Date(note.updated_at), { dateStyle: 'medium' }) : 'No update date'}
                            </div>
                        </div>
                    </div>
                </header>
                <Field as="div" className="mb-4 flex-1 pb-4">
                    <Textarea
                        placeholder={t('Start typing your note here…')}
                        className={clsx(
                            'border-colors data-[hover]:bg-gray-neutral data-[focus]:shadow-input data-[focus]:dark:shadow-input-dark h-full w-full flex-1 rounded-lg border p-1 text-sm outline-none data-[focus]:ring-1 md:text-base data-[hover]:dark:bg-[#232530]',
                            errors.title && 'border-red-600!',
                        )}
                        value={data.content}
                        onChange={(e) => setData('content', e.target.value)}
                    />
                    {errors.content && <ErrorField>{errors.content}</ErrorField>}
                </Field>

                <div className="border-colors mt-auto hidden items-center gap-4 border-t pt-4 md:flex">
                    <PrimaryBtn type="submit" disabled={processing}>
                        {t('Save Note')}
                    </PrimaryBtn>
                    <SecondaryBtn onClick={resetFields}>{t('Cancel')}</SecondaryBtn>
                </div>
            </form>
        </>
    );
}
