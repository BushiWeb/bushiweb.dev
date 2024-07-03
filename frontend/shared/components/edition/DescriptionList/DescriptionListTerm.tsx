import { DescriptionListTerm as DescriptionListTermProps } from './DescriptionList.props';
import './DescriptionList.css';

/**
 * Term from the description list item
 */
export default function DescriptionListTerm({
    children,
}: DescriptionListTermProps) {
    return <dt className="description-list-term">{children}</dt>;
}
