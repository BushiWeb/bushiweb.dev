import { render } from 'shared/tests/tests-utils';
import { test } from 'vitest';
import UI from './UI';

test('The UI renders with a header, main section and a footer', () => {
    const { getByRole } = render(<UI />);
    getByRole('banner');
    getByRole('contentinfo');
    getByRole('main');
});
