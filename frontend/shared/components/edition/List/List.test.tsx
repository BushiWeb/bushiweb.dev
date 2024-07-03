import { render, getByRole as genGetByRole } from 'shared/tests/tests-utils';
import { expect, test } from 'vitest';
import List from './List';
import ListItem from './ListItem';

test('The description list renders an unordered list', () => {
    const items = ['item1', 'item2'];

    const { getByRole, getAllByRole } = render(
        <List>
            {items.map((value, index) => (
                <ListItem key={index}>{value}</ListItem>
            ))}
        </List>,
    );

    const listElt = getByRole('list');
    expect(listElt.tagName).toBe('UL');

    const listItemElts = getAllByRole('listitem');
    expect(listItemElts).toHaveLength(items.length);
});

test('The description list renders an ordered list', () => {
    const items = ['item1', 'item2'];

    const { getByRole, getAllByRole } = render(
        <List ordered={true}>
            {items.map((value, index) => (
                <ListItem key={index}>{value}</ListItem>
            ))}
        </List>,
    );

    const listElt = getByRole('list');
    expect(listElt.tagName).toBe('OL');

    const listItemElts = getAllByRole('listitem');
    expect(listItemElts).toHaveLength(items.length);
});

test('The description list renders the right list items', () => {
    const items = ['item1', 'item2'];

    const { getAllByRole } = render(
        <List ordered={true}>
            {items.map((value, index) => (
                <ListItem key={index}>{value}</ListItem>
            ))}
        </List>,
    );

    const listItemElts = getAllByRole('listitem');
    expect(listItemElts).toHaveLength(items.length);
    for (let i = 0; i < items.length; i++) {
        expect(listItemElts[i]).toHaveTextContent(items[i]);
    }
});

test('The description list renders the right list items containing elements', () => {
    const item = <a href="test.com">Link</a>;

    const { getByRole } = render(
        <List ordered={true}>
            <ListItem>{item}</ListItem>
        </List>,
    );

    const listItemElt = getByRole('listitem');
    genGetByRole(listItemElt, 'link', { name: 'Link' });
});
