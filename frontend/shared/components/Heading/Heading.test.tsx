import { render } from 'shared/tests/tests-utils';
import { expect, test } from 'vitest';
import Heading from './Heading';
import TYPO_CLASSNAMES from './Heading.const';

test('The heading renders with the default level 1', () => {
    const title = 'test';
    const { getByRole } = render(<Heading>{title}</Heading>);
    const heading = getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(title);
    expect(heading).toHaveClass(TYPO_CLASSNAMES[0]);
});

test('The heading renders with the level 2 and the right class', () => {
    const title = 'test';
    const { getByRole } = render(<Heading level={2}>{title}</Heading>);
    const heading = getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(title);
    expect(heading).toHaveClass(TYPO_CLASSNAMES[1]);
});

test('The heading renders with the level 3 and the right class', () => {
    const title = 'test';
    const { getByRole } = render(<Heading level={3}>{title}</Heading>);
    const heading = getByRole('heading', { level: 3 });
    expect(heading).toHaveTextContent(title);
    expect(heading).toHaveClass(TYPO_CLASSNAMES[2]);
});
