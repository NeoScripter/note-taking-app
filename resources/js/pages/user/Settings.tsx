import ChevronLeft from '@/components/svgs/ChevronLeft';
import UserLayout from '@/layouts/UserLayout';
import { RadioGroup } from '@headlessui/react';
import RadioField from '@/components/forms/RadioField';
import useFontContext from '@/hooks/useFontContext';
import Inter from '../../../images/Inter.webp';
import MonoSpace from '../../../images/Monospace.webp';
import NotoSerif from '../../../images/NotoSerif.webp';
import Philosopher from '../../../images/Philosopher.webp';

const Settings = () => {
    const { selectedFont, setSelectedFont } = useFontContext();

    return (
        <>
            <div>
                <button className="body-text mb-4 flex items-center gap-2 text-sm">
                    <ChevronLeft />
                    Settings
                </button>
                <p className="mb-2 text-2xl font-bold">Font Theme</p>
                <p className="mb-4">Choose your font theme:</p>
                <RadioGroup value={selectedFont} onChange={setSelectedFont} aria-label="Server size" className="space-y-4">
                    <RadioField
                        key="NotoSerif"
                        imagePath={NotoSerif}
                        fontName="NotoSerif"
                        fontDescription="Classic and elegant for a timeless feel"
                        value="notoserif"
                    />

                    <RadioField
                        key="MonoSpace"
                        imagePath={MonoSpace}
                        fontName="MonoSpace"
                        fontDescription="Code-like, great for a technical vibe"
                        value="monospace"
                    />

                    <RadioField key="Inter" imagePath={Inter} fontName="Inter" fontDescription="Clean and modern, easy to read" value="inter" />

                    <RadioField
                        key="Philosopher"
                        imagePath={Philosopher}
                        fontName="Philosopher"
                        fontDescription="Elegant and eye-appealing style"
                        value="philosopher"
                    />
                </RadioGroup>
            </div>
        </>
    );
};

Settings.layout = (page: React.ReactElement) => <UserLayout children={page} title="Settings" header="Settings" />;

export default Settings;
