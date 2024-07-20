import Image from 'next/image';
import { DEFAULT_ALT, LOGO_HEIGHT, LOGO_WIDTH } from './Logo.const';
import type { LogoProps } from './Logo.props';

/**
 * BushiWeb textual logo.
 * @prop {string} [alt='BushiWeb'] - Alt text, if needed. Defaults to empty.
 * @prop {string} [className] - Additional class names for styling.
 * @prop {boolean} [priority=false] - Set the priority property of the underlying Nextjs Image component.
 */
export const Logo = ({
    alt = DEFAULT_ALT,
    className,
    priority = false,
}: LogoProps) => {
    return (
        <Image
            src="logo/logo_text_dark.svg"
            alt={alt}
            className={className}
            priority={priority}
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
        />
    );
};
