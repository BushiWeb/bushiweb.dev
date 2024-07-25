import { TableHeaderProps } from './Table.props';

/**
 * Header cell of a Table component.
 * @prop children
 */
export const TableHeader = ({ children }: TableHeaderProps) => {
    return (
        <th className="p-150 first:rounded-tl-200 last:rounded-tr-200">
            {children}
        </th>
    );
};
