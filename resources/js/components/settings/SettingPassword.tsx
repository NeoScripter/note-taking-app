import useTrans from '@/hooks/useTrans';
import { useForm } from '@inertiajs/react';
import PasswordField from '../forms/PasswordField';
import PrimaryBtn from '../shared/PrimaryBtn';
import ThemeBodyLayout from './ThemeBodyLayout';

type SettingPasswordProps = {
    onClick: () => void;
};

export default function SettingPassword({ onClick }: SettingPasswordProps) {
    const t = useTrans();
    const { data, setData, post, errors, reset } = useForm({
        old_password: '',
        new_password: '',
        new_password_confirmation: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post('/update-password', {
            onSuccess: () => reset(),
        });
    }

    return (
        <ThemeBodyLayout onClick={onClick}>
            <p className="mb-6 text-2xl font-bold">{t('Change Password')}</p>

            <form onSubmit={handleSubmit} className="space-y-6 text-sm">
                <PasswordField
                    setter={setData}
                    value={data.old_password}
                    fieldName="old_password"
                    hasResetLink={false}
                    error={errors.old_password}
                    label={t('Old Password')}
                />

                <PasswordField
                    setter={setData}
                    fieldName="new_password"
                    value={data.new_password}
                    hasResetLink={false}
                    error={errors.new_password}
                    description={t('At least 8 characters')}
                    label={t('New Password')}
                />

                <PasswordField
                    setter={setData}
                    fieldName="new_password_confirmation"
                    value={data.new_password_confirmation}
                    hasResetLink={false}
                    error={errors.new_password_confirmation}
                    label={t('Confirm New Password')}
                />

                <PrimaryBtn type="submit" className="ml-auto block">
                    {t('Save Password')}
                </PrimaryBtn>
            </form>
        </ThemeBodyLayout>
    );
}
