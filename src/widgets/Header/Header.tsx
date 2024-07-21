import { Logo } from '@/shared/components/Logo/Logo';

/**
 * Root layout heading component.
 */
export const Header = () => {
    return (
        <header className="flex h-1000 flex-row flex-nowrap items-center justify-center bg-primary-background px-300 py-200 text-primary-on-container">
            <Logo className="max-h-full w-auto" />
        </header>
    );
};
