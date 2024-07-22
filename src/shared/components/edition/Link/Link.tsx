import clsx from 'clsx';
import { LinkProps } from './Link.props';
import NextLink from 'next/link';

/**
 * Link component for document writing.
 * @prop {string} [to] - Prop used to provide pathnames of internal links. Takes priority over href.
 * @prop {string} [href=""] - Prop used to provide URL of external links.
 * @prop {string} [className=''] - Additional class names.
 * @prop children - Label of the link.
 */
export const Link = ({
    children,
    href = '',
    to,
    className = '',
}: LinkProps) => {
    const classNames = clsx(
        'text-primary-on-container',
        'hover:underline',
        'visited:text-secondary-on-container',
        className,
    );

    if (to) {
        return (
            <NextLink href={to} className={classNames}>
                {children}
            </NextLink>
        );
    }

    return (
        <a href={href} className={classNames}>
            {children}
        </a>
    );
};
