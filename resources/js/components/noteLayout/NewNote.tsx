import { useModalContext } from '@/hooks/useModalContext';
import { Field, Input, Textarea } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import ErrorField from '../forms/ErrorField';
import PrimaryBtn from '../shared/PrimaryBtn';
import SecondaryBtn from '../shared/SecondaryBtn';
import ClockIcon from '../svgs/ClockIcon';
import TagIcon from '../svgs/TagIcon';
import EditNoteInfo from './EditNoteInfo';
import NoteInfo from './NoteInfo';

export default function NewNote() {
    const { closeCreateNew } = useModalContext();
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        content: '',
        tags: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('notes.store'), {
            onSuccess: () => {
                resetFields();
            },
        });
    };

    function resetFields() {
        reset();
        closeCreateNew();
    }

    return (
        <form onSubmit={handleSubmit} className="notes-height flex flex-col">
            <header>
                <Field className="mb-4">
                    <Input
                        placeholder="Enter a title..."
                        className="text-2xl font-bold"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                    />
                    {errors.title && <ErrorField>{errors.title}</ErrorField>}
                </Field>

                <div className="title-text border-colors mb-4 space-y-3.5 border-b pb-4 text-xs sm:text-sm">
                    <EditNoteInfo
                        placeholder="Add tags separated by commas (e.g. Work, Planning)"
                        onChange={(e) => setData('tags', e.target.value)}
                        value={data.tags}
                        error={errors.tags}
                    >
                        <TagIcon width="16" height="16" />
                        Tags
                    </EditNoteInfo>

                    <NoteInfo info="Not yet saved">
                        <ClockIcon width="16" height="16" />
                        Last edited
                    </NoteInfo>
                </div>
            </header>
            <Field as="div" className="mb-4 flex-1 pb-4">
                <Textarea
                    placeholder="Start typing your note here…"
                    className="h-full w-full text-sm md:text-base"
                    value={data.content}
                    onChange={(e) => setData('content', e.target.value)}
                />
                {errors.content && <ErrorField>{errors.content}</ErrorField>}
            </Field>

            <div className="border-colors mt-auto hidden items-center gap-4 border-t pt-4 md:flex">
                <PrimaryBtn type="submit" disabled={processing}>
                    Save Note
                </PrimaryBtn>
                <SecondaryBtn onClick={resetFields}>Cancel</SecondaryBtn>
            </div>
        </form>
    );
}
