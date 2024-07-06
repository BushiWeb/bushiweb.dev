import './DescriptionList.css';
import { DescriptionListItem as DescriptionListItemProps } from './DescriptionList.props';
import { DescriptionListDescription } from './DescriptionListDescription';
import { DescriptionListTerm } from './DescriptionListTerm';

/**
 * Item from description lists, with terms and description.
 */
export function DescriptionListItem({
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
