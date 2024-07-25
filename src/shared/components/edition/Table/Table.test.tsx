import { render, getAllByRole as containedGetAllByRole } from '@tests/utils';
import { expect, test } from 'vitest';
import { Table } from './Table';

test('The data are rendered in a table, with the first row as headers, the caption and the summary', () => {
    const data = [
        ['Name', 'Price', 'Date'],
        ['John', '13000', '2024-06-25'],
        ['Jane', '5000', '2022-12-02'],
        ['Dupond', '250', '2005-02-28'],
    ];
    const caption = 'test';

    const { getByRole, getAllByRole } = render(
        <Table data={data} caption={caption} />,
    );
    // Table, thead and tbody
    getByRole('table');
    const captionElt = getByRole('caption');
    expect(captionElt).toHaveTextContent(caption);
    const rowGroupsElts = getAllByRole('rowgroup');
    expect(rowGroupsElts).toHaveLength(2);
    expect(rowGroupsElts[0].tagName).toBe('THEAD');
    expect(rowGroupsElts[1].tagName).toBe('TBODY');

    // Headers
    const headerRowElts = containedGetAllByRole(rowGroupsElts[0], 'row');
    expect(headerRowElts).toHaveLength(1);

    const headerElts = containedGetAllByRole(headerRowElts[0], 'columnheader');
    expect(headerElts).toHaveLength(data[0].length);
    for (let i = 0; i < headerElts.length; i++) {
        expect(headerElts[i]).toHaveTextContent(data[0][i]);
    }

    // Data
    const dataRowElts = containedGetAllByRole(rowGroupsElts[1], 'row');
    expect(dataRowElts).toHaveLength(data.length - 1);

    for (let i = 0; i < dataRowElts.length; i++) {
        const dataElts = containedGetAllByRole(dataRowElts[i], 'cell');
        expect(dataElts).toHaveLength(data[i + 1].length);
        for (let j = 0; j < dataElts.length; j++) {
            expect(dataElts[j]).toHaveTextContent(data[i + 1][j]);
        }
    }
});

test('The table handles data containing multiple values (arrays of data)', () => {
    const data = [
        ['Names', 'Price', 'Date'],
        [['John', 'Tim'], '13000', '2024-06-25'],
    ];
    const caption = 'test';

    const { getByRole, getAllByRole } = render(
        <Table data={data} caption={caption} />,
    );

    getByRole('table');
    const rowGroupsElts = getAllByRole('rowgroup');

    const dataRowElts = containedGetAllByRole(rowGroupsElts[1], 'row');
    expect(dataRowElts).toHaveLength(1);

    const dataElts = containedGetAllByRole(dataRowElts[0], 'cell');
    expect(dataElts).toHaveLength(data[1].length);
    for (const name of data[1][0]) {
        expect(dataElts[0]).toHaveTextContent(new RegExp(name));
    }
});
