import classNames from 'classnames';
import './IconButton.css';
import { IconButtonProps } from './IconButton.props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Icon button
 */
export function IconButton({
    onClick,
    type = 'button',
    icon,
    title,
    className,
}: IconButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={classNames('IconButton', className)}
        >
            <FontAwesomeIcon icon={icon} title={title} />
        </button>
    );
}
