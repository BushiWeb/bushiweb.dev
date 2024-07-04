import { render } from 'shared/tests/tests-utils';
import { test } from 'vitest';
import CookiePolicy from './CookiePolicy';

test('The Legal notice component renders', () => {
    render(<CookiePolicy />);
});
