import './DescriptionList.css';
import { DescriptionListTerm as DescriptionListTermProps } from './DescriptionList.props';

/**
 * Term from the description list item
 */
export function DescriptionListTerm({ children }: DescriptionListTermProps) {
    return <dt className="description-list-term">{children}</dt>;
}
