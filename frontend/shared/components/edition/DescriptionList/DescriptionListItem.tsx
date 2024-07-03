import { DescriptionListItem as DescriptionListItemProps } from './DescriptionList.props';
import './DescriptionList.css';
import DescriptionListTerm from './DescriptionListTerm';
import DescriptionListDescription from './DescriptionListDescription';

/**
 * Item from description lists, with terms and description.
 */
export default function DescriptionListItem({
    terms,
    descriptions,
}: DescriptionListItemProps) {
    return (
        <div className="description-list-item">
            {Array.isArray(terms) ?
                terms.map((value, id) => (
                    <DescriptionListTerm key={`${id}`}>
                        {value}
                    </DescriptionListTerm>
                ))
            :   <DescriptionListTerm>{terms}</DescriptionListTerm>}

            {Array.isArray(descriptions) ?
                descriptions.map((value, id) => (
                    <DescriptionListDescription key={`${id}`}>
                        {value}
                    </DescriptionListDescription>
                ))
            :   <DescriptionListDescription>
                    {descriptions}
                </DescriptionListDescription>
            }
        </div>
    );
}
