import { DescriptionListDescription as DescriptionListDescriptionProps } from './DescriptionList.props';
import './DescriptionList.css';

/**
 * Description from the description list item
 */
export default function DescriptionListDescription({
    children,
}: DescriptionListDescriptionProps) {
    return <dd className="description-list-description">{children}</dd>;
}
