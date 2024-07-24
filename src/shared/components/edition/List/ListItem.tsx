import clsx from 'clsx';
import { ListItemProps } from './List.props';

/**
 * Item for the List component
 * @prop {string} [className]
 * @prop children
 */
export const ListItem = ({ children, className = '' }: ListItemProps) => {
    return (
        <li className={clsx('mb-100', 'pl-50', 'max-w-content-m', className)}>
            {children}
        </li>
    );
};
