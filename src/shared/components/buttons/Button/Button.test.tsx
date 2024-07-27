import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { render } from '@tests/utils';
import { expect, test, vi } from 'vitest';
import { Button } from './Button';
import { userEvent } from '@tests/user-event';

test('The button renders', () => {
    const name = 'action';
    const { getByRole } = render(<Button>{name}</Button>);
    getByRole('button', { name });
});

test('The button renders with an icon', () => {
    const name = 'action',
        icon = faPaperPlane;
    const { getByRole } = render(<Button icon={icon}>{name}</Button>);
    getByRole('button', { name });
});

test('The button has the right type', () => {
    const name = 'action',
        type = 'submit';
    const { getByRole } = render(<Button type={type}>{name}</Button>);
    const buttonElt = getByRole('button', { name });
    expect(buttonElt).toHaveAttribute('type', type);
});

test('The icon button executes the action on click', async () => {
    const user = userEvent.setup();
    const name = 'action',
        action = vi.fn();
    const { getByRole } = render(<Button onPress={action}>{name}</Button>);
    const buttonElt = getByRole('button', { name });
    await user.click(buttonElt);
    expect(action).toHaveBeenCalled();
});
