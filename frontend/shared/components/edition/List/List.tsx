import './List.css';
import { List as ListProps } from './List.props';

/**
 * List componenet, allowing to insert either unordered (default) or ordered lists.
 */
export function List({ children, ordered = false }: ListProps) {
    if (ordered) {
        return <ol className="edition-list ordered-list">{children}</ol>;
    }

    return <ul className="edition-list unordered-list">{children}</ul>;
}

/** Exports the ListItem */
export { ListItem } from './ListItem';
