import { ListItem as ListItemProps } from './List.props';
import './List.css';

/**
 * Item from lists
 */
export default function ListItem({ children }: ListItemProps) {
    return (
        <li className="edition-list-item pattern-typography-body-m">
            {children}
        </li>
    );
}
