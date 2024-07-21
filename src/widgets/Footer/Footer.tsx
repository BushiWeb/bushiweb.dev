import { Logo } from '@/shared/components/Logo/Logo';

/**
 * Root layout footer component.
 */
export const Footer = () => {
    return (
        <footer className="flex flex-row flex-nowrap items-center justify-center bg-primary-background px-300 py-150 text-primary-on-container">
            <Logo className="h-500 w-auto" />
        </footer>
    );
};
