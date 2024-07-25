import { render } from '@tests/utils';
import { test } from 'vitest';
import CookiePolicy from './page';

test('The Legal notice component renders', () => {
    render(<CookiePolicy />);
});
