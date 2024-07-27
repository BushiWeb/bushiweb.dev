import { TableProps } from './Table.props';
import { TableData } from './TableData';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

/**
 * Table component, to use within documents.
 * Responsive on mobile, displays the data in groups of lists.
 * @prop {[string[], ...(React.ReactNode | string[])[][]]} data - Date to use to populate the table. The first table defines the header row. The rest are the data.
 * @prop {string} caption - Identifies and introduces the table.
 */
export function Table({ data, caption }: TableProps) {
    const mappedData = data.map((row, rowNum) => (
        <TableRow key={rowNum}>
            {row.map((cell, cellNum) => {
                if (rowNum === 0) {
                    return (
                        <TableHeader key={`${rowNum}-${cellNum}`}>
                            {cell}
                        </TableHeader>
                    );
                }

                return (
                    <TableData
                        headerName={data[0][cellNum]}
                        key={`${rowNum}-${cellNum}`}
                    >
                        {Array.isArray(cell) ?
                            cell.map((content, index) => (
                                <p key={index}>{content}</p>
                            ))
                        :   cell}
                    </TableData>
                );
            })}
        </TableRow>
    ));

    return (
        <table className="mx-auto mb-400 mt-300 w-full border-separate border-spacing-0 font-primary text-surface-on mobile:block">
            <caption className="mb-250 font-primary text-s1 font-semibold leading-tight mobile:block">
                {caption}
            </caption>
            <thead className="bg-primary-container text-primary-on-container mobile:sr-only">
                {mappedData[0]}
            </thead>
            <tbody className="bg-surface-layer4 text-surface-on mobile:block mobile:space-y-200 mobile:bg-transparent">
                {mappedData.slice(1)}
            </tbody>
        </table>
    );
}
