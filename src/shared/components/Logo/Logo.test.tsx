import { expect, test } from 'vitest';
import { render } from '../../tests/utils';
import { Logo } from './Logo';
import { DEFAULT_ALT } from './Logo.const';

test('The logo renders with its default dimensions and alternate text', () => {
    const { getByRole } = render(<Logo />);
    getByRole('img', { name: DEFAULT_ALT });
});

test('The logo has the right alternate text', () => {
    const props = { alt: 'test' };
    const { getByRole } = render(<Logo {...props} />);
    getByRole('img', { name: 'test' });
});

test('The logo has the right class name', () => {
    const props = { className: 'test' };
    const { getByRole } = render(<Logo {...props} />);
    const logo = getByRole('img');
    expect(logo).toHaveClass(props.className);
});
