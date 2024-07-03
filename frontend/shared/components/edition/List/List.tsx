import { List as ListProps } from './List.props';
import './List.css';

/**
 * List componenet, allowing to insert either unordered (default) or ordered lists.
 */
export default function List({ children, ordered = false }: ListProps) {
    if (ordered) {
        return <ol className="edition-list ordered-list">{children}</ol>;
    }

    return <ul className="edition-list unordered-list">{children}</ul>;
}
