import { render, getByText, getByTestId } from 'shared/tests/tests-utils';
import { expect, test } from 'vitest';
import { DescriptionList } from './DescriptionList';
import { DescriptionListItem } from './DescriptionListItem';

test('The description list renders one item', () => {
    const data = {
        terms: 'test',
        descriptions: 'description',
    };

    const { container } = render(
        <DescriptionList>
            <DescriptionListItem {...data} />
        </DescriptionList>,
    );
    const list = container.getElementsByTagName('dl');
    expect(list).toHaveLength(1);

    const listItems = list[0].getElementsByTagName('div');
    expect(listItems).toHaveLength(1);

    const listTerm = getByText(listItems[0], data.terms);
    expect(listTerm.tagName).toBe('DT');
    const listDescription = getByText(listItems[0], data.descriptions);
    expect(listDescription.tagName).toBe('DD');
});

test('The description list renders multiple items', () => {
    const data = [
        {
            terms: 'test',
            descriptions: 'description',
        },
        {
            terms: 'test2',
            descriptions: 'description2',
        },
    ];

    const { container } = render(
        <DescriptionList>
            {data.map((value, index) => (
                <DescriptionListItem {...value} key={index} />
            ))}
        </DescriptionList>,
    );
    const list = container.getElementsByTagName('dl');
    expect(list).toHaveLength(1);

    const listItems = list[0].getElementsByTagName('div');
    expect(listItems).toHaveLength(data.length);

    for (let i = 0; i < data.length; i++) {
        const listTerm = getByText(listItems[i], data[i].terms);
        expect(listTerm.tagName).toBe('DT');
        const listDescription = getByText(listItems[i], data[i].descriptions);
        expect(listDescription.tagName).toBe('DD');
    }
});

test('The description list renders an item with multiple terms and one description', () => {
    const data = {
        terms: ['test1', 'test2'],
        descriptions: 'description',
    };

    const { container } = render(
        <DescriptionList>
            <DescriptionListItem {...data} />
        </DescriptionList>,
    );

    const list = container.getElementsByTagName('dl');
    expect(list).toHaveLength(1);

    const listItems = list[0].getElementsByTagName('div');
    expect(listItems).toHaveLength(1);

    for (const term of data.terms) {
        const listTerm = getByText(listItems[0], term);
        expect(listTerm.tagName).toBe('DT');
    }

    const listDescription = getByText(listItems[0], data.descriptions);
    expect(listDescription.tagName).toBe('DD');
});

test('The description list renders an item with multiple terms and one description', () => {
    const data = {
        terms: 'test',
        descriptions: ['description1', 'description2'],
    };

    const { container } = render(
        <DescriptionList>
            <DescriptionListItem {...data} />
        </DescriptionList>,
    );

    const list = container.getElementsByTagName('dl');
    expect(list).toHaveLength(1);

    const listItems = list[0].getElementsByTagName('div');
    expect(listItems).toHaveLength(1);

    const listTerm = getByText(listItems[0], data.terms);
    expect(listTerm.tagName).toBe('DT');

    for (const description of data.descriptions) {
        const listDescription = getByText(listItems[0], description);
        expect(listDescription.tagName).toBe('DD');
    }
});

test('The description list renders an item with multiple terms and descriptions', () => {
    const data = {
        terms: ['test3.1', 'test3.2'],
        descriptions: ['description3.1', 'description3.2'],
    };

    const { container } = render(
        <DescriptionList>
            <DescriptionListItem {...data} />
        </DescriptionList>,
    );

    const list = container.getElementsByTagName('dl');
    expect(list).toHaveLength(1);

    const listItems = list[0].getElementsByTagName('div');
    expect(listItems).toHaveLength(1);

    for (const term of data.terms) {
        const listTerm = getByText(listItems[0], term);
        expect(listTerm.tagName).toBe('DT');
    }

    for (const description of data.descriptions) {
        const listDescription = getByText(listItems[0], description);
        expect(listDescription.tagName).toBe('DD');
    }
});

test('The description list renders one item with terms and descriptions as components', () => {
    const data = {
        terms: <span data-testid="term">Term</span>,
        descriptions: <span data-testid="description">Description</span>,
    };

    const { container } = render(
        <DescriptionList>
            <DescriptionListItem {...data} />
        </DescriptionList>,
    );
    const list = container.getElementsByTagName('dl');
    expect(list).toHaveLength(1);

    const listItems = list[0].getElementsByTagName('div');
    expect(listItems).toHaveLength(1);

    const listTerm = listItems[0].getElementsByTagName('dt');
    expect(listTerm).toHaveLength(1);
    expect(listTerm[0].tagName).toBe('DT');

    const listDescription = listItems[0].getElementsByTagName('dd');
    expect(listDescription).toHaveLength(1);
    expect(listDescription[0].tagName).toBe('DD');

    const listTermContent = getByTestId(listTerm[0], 'term');
    expect(listTermContent).toHaveTextContent('Term');
    const listDescriptionContent = getByTestId(
        listDescription[0],
        'description',
    );
    expect(listDescriptionContent).toHaveTextContent('Description');
});
