import { render } from '@tests/utils';
import { expect, test } from 'vitest';
import { Link } from './Link';

test('The link renders with the default empty href and the right label', () => {
    const children = 'test';
    const { getByRole } = render(<Link>{children}</Link>);
    const link = getByRole('generic', { name: children });
    expect(link).toHaveAttribute('href', '');
});

test('The link renders with a given href', () => {
    const children = 'test';
    const props = { href: 'target' };
    const { getByRole } = render(<Link {...props}>{children}</Link>);
    const link = getByRole('link', { name: children });
    expect(link).toHaveAttribute('href', props.href);
});

test('The link renders as a internal link', () => {
    const children = 'test';
    const { getByRole } = render(<Link to="/">{children}</Link>);
    const link = getByRole('link', { name: children });
    expect(link).toHaveAttribute('href', '/');
});

test('The internal link is prioritized over the external one', () => {
    const text = 'test';
    const href = 'href';
    const target = '/';
    const { getByRole } = render(
        <Link href={href} to={target}>
            {text}
        </Link>,
    );
    const link = getByRole('link', { name: text });
    expect(link).toHaveAttribute('href', target);
});

test('The link has the given class name', () => {
    const text = 'test';
    const target = '/';
    const className = 'class';
    const { getByRole } = render(
        <Link to={target} className={className}>
            {text}
        </Link>,
    );
    const link = getByRole('link', { name: text });
    expect(link).toHaveClass(className);
});
