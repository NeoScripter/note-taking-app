import { Field, Label, Radio } from '@headlessui/react';

type RadioFieldProps = {
    imagePath: string;
    fontName: string;
    fontDescription: string;
    value: string;
};
export default function RadioField({ imagePath, fontName, fontDescription, value }: RadioFieldProps) {
    return (
        <Field className="flex w-full cursor-pointer items-center gap-5 rounded-xl border border-gray-300 p-4 relative isolate has-data-[checked]:bg-gray-neutral dark:has-data-[checked]:bg-[#232530]">
            <div className="grid aspect-square w-10 place-content-center rounded-xl border bg-colors border-gray-300 p-1.5">
                <img src={imagePath} alt="Font sample" className='dark:invert' />
            </div>
            <Label>
                <p className="mb-1 font-bold">{fontName}</p>
                <p className="text-xs">{fontDescription}</p>
            </Label>
            <Radio
                value={value}
                className="group data-[checked]:bg-primary-blue ml-auto not-data-[checked]:border-2 border-gray-200 flex size-6 items-center justify-center rounded-full bg-white"
            >
                <span className="invisible size-3 rounded-full bg-white group-data-[checked]:visible" />
                <span className='absolute inset-0 z-10'></span>
            </Radio>
        </Field>
    );
}
