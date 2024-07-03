import { DescriptionList as DescriptionListProps } from './DescriptionList.props';
import './DescriptionList.css';

/**
 * Description list element, container for DescriptionListItems componenents.
 */
export default function DescriptionList({ children }: DescriptionListProps) {
    return <dl className="description-list">{children}</dl>;
}
