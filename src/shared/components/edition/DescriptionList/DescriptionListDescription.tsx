import { DescriptionListDescriptionProps } from './DescriptionList.props';

/**
 * Description for the DescriptionListItem component.
 * @prop children
 */
export const DescriptionListDescription = ({
    children,
}: DescriptionListDescriptionProps) => {
    return <dd className="max-w-content-m pl-200">{children}</dd>;
};
