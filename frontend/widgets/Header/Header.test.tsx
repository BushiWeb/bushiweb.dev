import { render } from 'shared/tests/tests-utils';
import { expect, test } from 'vitest';
import { Header } from './Header';

test('The Header component renders with the logo', () => {
    const logoName = 'BushiWeb';
    const { getByRole } = render(<Header />);
    getByRole('banner');

    // Logo and home link test
    getByRole('img', { name: logoName });
    const logoLink = getByRole('link', { name: logoName });
    expect(logoLink).toHaveAttribute('href', '/');
});
