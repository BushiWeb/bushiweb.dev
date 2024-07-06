import './DescriptionList.css';
import { DescriptionListDescription as DescriptionListDescriptionProps } from './DescriptionList.props';

/**
 * Description from the description list item
 */
export function DescriptionListDescription({
    children,
}: DescriptionListDescriptionProps) {
    return <dd className="description-list-description">{children}</dd>;
}
