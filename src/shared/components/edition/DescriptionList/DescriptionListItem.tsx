import clsx from 'clsx';
import { DescriptionListItemProps } from './DescriptionList.props';
import { DescriptionListDescription } from './DescriptionListDescription';
import { DescriptionListTerm } from './DescriptionListTerm';

/**
 * Item for the DescriptionList component.
 * @prop {React.ReactNode[] | React.ReactNode} terms - Array of the terms to describe within the item.
 * @prop {React.ReactNode[] | React.ReactNode} descriptions - Array of the descriptions associated to the terms.
 * @prop {string} [className]
 */
export const DescriptionListItem = ({
    terms,
    descriptions,
    className = '',
}: DescriptionListItemProps) => {
    return (
        <div
            className={clsx(
                'py-150',
                'px-200',
                'border-b-outline-variation',
                'border-b-10',
                'border-solid',
                'first:pt-200',
                'last:pb-200',
                'last:border-none',
                className,
            )}
        >
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
};
