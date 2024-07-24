import { render } from '@tests/utils';
import { expect, test } from 'vitest';
import { Header } from './Header';

test('The Header component renders with the logo', () => {
    const { getByRole } = render(<Header />);
    getByRole('banner');

    // Logo and home link
    getByRole('img', { name: 'BushiWeb' });
    const homeLinkElt = getByRole('link', { name: 'BushiWeb' });
    expect(homeLinkElt).toHaveAttribute('href', '/');
});
