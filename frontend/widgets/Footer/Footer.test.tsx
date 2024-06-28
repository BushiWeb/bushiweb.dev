import { render } from 'shared/tests/tests-utils';
import { test } from 'vitest';
import Footer from './Footer';

test('The Footer component renders with the logo', () => {
    const { getByRole } = render(<Footer />);
    getByRole('contentinfo');
    getByRole('img', { name: 'BushiWeb' });
});
