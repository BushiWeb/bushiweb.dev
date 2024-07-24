import { DescriptionListTermProps } from './DescriptionList.props';

/**
 * Term for the DescriptionListItem component.
 * @prop children
 */
export const DescriptionListTerm = ({ children }: DescriptionListTermProps) => {
    return <dt className="mb-100 max-w-content-s font-semibold">{children}</dt>;
};
