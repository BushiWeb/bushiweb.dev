import { Logo } from '@/shared/components/Logo/Logo';
import { SocialLinks } from '@/shared/components/SocialLinks/SocialLinks';
import Link from 'next/link';
import { FooterNav } from './FooterNav';

/**
 * Root layout footer component.
 */
export const Footer = () => {
    return (
        <footer className="flex flex-col flex-nowrap items-stretch justify-center bg-primary-background text-primary-on-container">
            <div className="flex flex-col flex-nowrap items-center justify-start gap-200 px-300 py-150 desktop:flex-row desktop:flex-wrap desktop:justify-between desktop:px-500 desktop:py-250">
                <Link href="/" className="focus-visible:focus-ring">
                    <Logo className="h-500 w-auto" />
                </Link>
                <SocialLinks />
            </div>
            <FooterNav />
        </footer>
    );
};
