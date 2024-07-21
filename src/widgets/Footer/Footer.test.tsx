import { render } from '@tests/utils';
import { test } from 'vitest';
import { Footer } from './Footer';

test('The Header component renders with the logo', () => {
    const { getByRole } = render(<Footer />);
    getByRole('contentinfo');
    getByRole('img', { name: 'BushiWeb' });
});
