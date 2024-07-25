import { TableDataProps } from './Table.props';

/**
 * Data cell of a Table component.
 * @prop children
 * @prop {string} headerName - Name of the header, to display on small screens.
 */
export const TableData = ({ children, headerName }: TableDataProps) => {
    return (
        <td
            className="p-150 group-last:first:rounded-bl-200 group-last:last:rounded-br-200 mobile:flex mobile:flex-row mobile:flex-nowrap mobile:items-center mobile:gap-200 mobile:before:w-1/3 mobile:before:shrink-0 mobile:before:content-[attr(data-header)] mobile:odd:bg-surface-layer4 mobile:even:bg-surface-layer3 mobile:group-last:first:rounded-bl-none mobile:group-last:last:rounded-br-none"
            data-header={headerName}
        >
            {children}
        </td>
    );
};
