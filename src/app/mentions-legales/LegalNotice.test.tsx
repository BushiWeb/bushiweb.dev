import { render } from '@tests/utils';
import { test } from 'vitest';
import LegalNotice from './page';

test('The Legal notice component renders', () => {
    render(<LegalNotice />);
});
