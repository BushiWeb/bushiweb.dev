import { render } from 'shared/tests/tests-utils';
import { expect, test } from 'vitest';
import { Link } from './Link';

test('The link renders with the default empty href', () => {
    const text = 'test';
    const { getByRole } = render(<Link>{text}</Link>);
    const link = getByRole('generic', { name: text });
    expect(link).toHaveAttribute('href', '');
});

test('The link renders with a given href', () => {
    const text = 'test';
    const target = 'target';
    const { getByRole } = render(<Link href={target}>{text}</Link>);
    const link = getByRole('link', { name: text });
    expect(link).toHaveAttribute('href', target);
});

test('The link renders as a internal link', () => {
    const text = 'test';
    const href = 'href';
    const target = 'target';
    const { getByRole } = render(
        <Link href={href} to={target}>
            {text}
        </Link>,
    );
    const link = getByRole('link', { name: text });
    expect(link).toHaveAttribute('href', target);
});
