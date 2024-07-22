import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialLinkProps } from './SocialLink.props';
import { clsx } from 'clsx';

/**
 * One social link, to use within the SocialLinks component.
 * @prop {string} link - Link to the social account.
 * @prop {string} [className=""] - Addional classnames for styling.
 * @prop {IconDefinition} icon - FontAwesome icon to display.
 * @prop {string} title - Accessible title for the icon.
 */
export const SocialLink = ({
    link,
    className = '',
    icon,
    title,
}: SocialLinkProps) => {
    return (
        <a
            href={link}
            className={clsx(
                className,
                'relative isolate text-24 text-surface-on-variant after:absolute after:left-1/2 after:top-1/2 after:z-low after:h-600 after:w-600 after:-translate-x-1/2 after:-translate-y-1/2',
            )}
        >
            <FontAwesomeIcon icon={icon} title={title} />
        </a>
    );
};
