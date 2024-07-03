import { render } from 'shared/tests/tests-utils';
import { test } from 'vitest';
import PrivacyPolicy from './PrivacyPolicy';

test('The Legal notice component renders', () => {
    render(<PrivacyPolicy />);
});
