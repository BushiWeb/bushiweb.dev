import logo from 'assets/images/logo/logo_text_dark.svg';
import LogoProps from './LogoProps';
import { DEFAULT_ALT, LOGO_ASPECT_RATIO, LOGO_HEIGHT } from './Logo.const';

/** BushiWeb logo */
export default function Logo({
    alt = DEFAULT_ALT,
    width,
    height,
    className = '',
}: LogoProps) {
    if (width === undefined) {
        width = (height ?? LOGO_HEIGHT) * LOGO_ASPECT_RATIO;
    }

    if (height === undefined) {
        height = width / LOGO_ASPECT_RATIO;
    }

    return (
        <img
            className={className}
            src={logo}
            alt={alt}
            width={width}
            height={height}
        />
    );
}
