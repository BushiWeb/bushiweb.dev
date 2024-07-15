import { render } from 'shared/tests/tests-utils';
import { test } from 'vitest';
import { Contact } from './Contact';

test('The Contact component renders', () => {
    render(<Contact />);
});
