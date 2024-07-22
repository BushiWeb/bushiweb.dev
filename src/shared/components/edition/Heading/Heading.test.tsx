import { render } from '@tests/utils';
import { expect, test } from 'vitest';
import { Heading } from './Heading';
import { CLASS_LEVEL } from './Heading.const';

test('The heading renders with the default level 2 and the right classes', () => {
    const title = 'test';
    const { getByRole } = render(<Heading>{title}</Heading>);
    const headingElt = getByRole('heading', { level: 2 });
    expect(headingElt).toHaveTextContent(title);
    expect(headingElt).toHaveClass(CLASS_LEVEL[2]);
});

test('The heading renders with right custom level and the right classes', () => {
    const title = 'test';
    const level = 3;
    const { getByRole } = render(<Heading level={level}>{title}</Heading>);
    const headingElt = getByRole('heading', { level });
    expect(headingElt).toHaveTextContent(title);
    expect(headingElt).toHaveClass(CLASS_LEVEL[level]);
});

test('The heading renders as a paragraph if the level is above 6', () => {
    const children = 'test',
        level = 7;
    const { getByRole } = render(<Heading level={level}>{children}</Heading>);
    const paragraphElt = getByRole('paragraph');
    expect(paragraphElt).toHaveTextContent(children);
});

test('The heading renders as a paragraph if the level is below 1', () => {
    const children = 'test',
        level = 0;
    const { getByRole } = render(<Heading level={level}>{children}</Heading>);
    const paragraphElt = getByRole('paragraph');
    expect(paragraphElt).toHaveTextContent(children);
});

test('The heading renders with right custom classes', () => {
    const title = 'test',
        className = 'class';
    const { getByRole } = render(
        <Heading className={className}>{title}</Heading>,
    );
    const headingElt = getByRole('heading', { level: 2 });
    expect(headingElt).toHaveClass(className);
});

test('The heading renders with the right id', () => {
    const title = 'test',
        id = 'id';
    const { getByRole } = render(<Heading id={id}>{title}</Heading>);
    const headingElt = getByRole('heading', { level: 2 });
    expect(headingElt).toHaveAttribute('id', id);
});
