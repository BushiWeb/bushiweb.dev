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
