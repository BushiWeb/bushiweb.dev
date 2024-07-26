import { faBars } from '@fortawesome/free-solid-svg-icons';
import { render } from '@tests/utils';
import { expect, test, vi } from 'vitest';
import { FAB } from './FAB';
import { userEvent } from '@tests/user-event';

test('The FAB renders as an icon FAB by default', () => {
    const props = { label: 'Menu', icon: faBars };
    const { getByRole } = render(<FAB {...props} />);
    getByRole('button', { name: props.label });
});

test('The FAB executes the action on click', async () => {
    const user = userEvent.setup();
    const props = { label: 'Menu', icon: faBars, onPress: vi.fn() };
    const { getByRole } = render(<FAB {...props} />);
    const buttonElt = getByRole('button', { name: props.label });
    await user.click(buttonElt);
    expect(props.onPress).toHaveBeenCalled();
});
