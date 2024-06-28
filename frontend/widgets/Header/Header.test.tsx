import { render } from 'shared/tests/tests-utils';
import { test } from 'vitest';
import Header from './Header';

test('The Header component renders with the logo', () => {
    const { getByRole } = render(<Header />);
    getByRole('banner');
    getByRole('img', { name: 'BushiWeb' });
});
