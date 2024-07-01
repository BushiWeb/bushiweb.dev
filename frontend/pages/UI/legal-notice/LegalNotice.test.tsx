import { render } from 'shared/tests/tests-utils';
import { test } from 'vitest';
import LegalNotice from './LegalNotice';

test('The Legal notice component renders', () => {
    render(<LegalNotice />);
});
