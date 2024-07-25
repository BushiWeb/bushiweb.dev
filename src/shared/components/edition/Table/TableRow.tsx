import { TableRowProps } from './Table.props';

/**
 * Table row to use within a Table component.
 * @prop children
 */
export const TableRow = ({ children }: TableRowProps) => {
    return (
        <tr className="group even:bg-surface-layer3 mobile:block mobile:even:bg-transparent">
            {children}
        </tr>
    );
};
