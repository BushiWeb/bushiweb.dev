import './List.css';
import { ListItem as ListItemProps } from './List.props';

/**
 * Item from lists
 */
export function ListItem({ children }: ListItemProps) {
    return (
        <li className="edition-list-item pattern-typography-body-m">
            {children}
        </li>
    );
}
