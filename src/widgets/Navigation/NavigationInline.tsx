'use client';
import { useContext } from 'react';
import { navigationContext } from './Navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { SocialLinks } from '@/shared/components/SocialLinks/SocialLinks';

/**
 * Inline navigation, always visible.
 */
export const NavigationInline = () => {
    const navigationLinks = useContext(navigationContext);
    const pathName = usePathname();

    return (
        <nav className="flew-wrap flex flex-row content-start items-center justify-between gap-x-400 gap-y-300 text-primary-on-container">
            <ul className="flex flex-row flex-wrap items-center justify-start gap-x-300 gap-y-100">
                {navigationLinks.map(({ label, to }) => (
                    <li key={label}>
                        <Link
                            href={to}
                            className={clsx(
                                'text-m font-primary font-semibold leading-tight',
                                'active:text-surface-on',
                                'focus-visible:focus-ring',
                                'hover:text-surface-on hover:underline hover:decoration-[15%] hover:underline-offset-8',
                                { 'text-surface-on': to === pathName },
                            )}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
            <SocialLinks />
        </nav>
    );
};
