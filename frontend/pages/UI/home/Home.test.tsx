import { render } from 'shared/tests/tests-utils';
import { test } from 'vitest';
import Home from './Home';

test('The Home component renders', () => {
    const { getByRole } = render(<Home />);
    getByRole('heading', { level: 1 });
    getByRole('paragraph');
});
