import { Logo } from '@/shared/components/Logo/Logo';
import Link from 'next/link';
import { Navigation } from '../Navigation/Navigation';

/**
 * Root layout heading component.
 */
export const Header = () => {
    return (
        <header className="flex min-h-1000 flex-row flex-nowrap items-center justify-center bg-primary-background px-300 py-200 text-primary-on-container desktop:justify-between desktop:gap-800 desktop:px-500">
            <Link href="/" className="h-full focus-visible:focus-ring">
                <Logo className="h-700 max-h-full w-auto" />
            </Link>
            <Navigation />
        </header>
    );
};
