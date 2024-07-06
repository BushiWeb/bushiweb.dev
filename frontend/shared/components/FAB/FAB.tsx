import classNames from 'classnames';
import './FAB.css';
import { FABProps } from './FAB.props';

/**
 * Regular button
 */
export function FAB({
    children,
    onClick,
    type = 'button',
    extendedFab = false,
}: FABProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={classNames('FAB', {
                'pattern-typography-label-l': extendedFab,
                'FAB--icon': !extendedFab,
            })}
        >
            {children}
        </button>
    );
}
