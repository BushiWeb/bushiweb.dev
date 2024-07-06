import './DescriptionList.css';
import { DescriptionList as DescriptionListProps } from './DescriptionList.props';

/**
 * Description list element, container for DescriptionListItems componenents.
 */
export function DescriptionList({ children }: DescriptionListProps) {
    return <dl className="description-list">{children}</dl>;
}

/** Re-exporting the DescriptionListItem */
export { DescriptionListItem } from './DescriptionListItem';
