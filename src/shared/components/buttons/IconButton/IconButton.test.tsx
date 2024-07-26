import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { render } from '@tests/utils';
import { expect, test, vi } from 'vitest';
import { IconButton } from './IconButton';
import { userEvent } from '@tests/user-event';

test('The icon button renders', () => {
    const name = 'Close',
        icon = faXmark;
    const { getByRole } = render(<IconButton icon={icon} label={name} />);
    const buttonElt = getByRole('button', { name });
    expect(buttonElt).toHaveAttribute('type', 'button');
});

test('The icon button executes the action on click', async () => {
    const name = 'Close',
        icon = faXmark,
        action = vi.fn();
    const user = userEvent.setup();
    const { getByRole } = render(
        <IconButton icon={icon} label={name} onPress={action} />,
    );
    const buttonElt = getByRole('button', { name });
    await user.click(buttonElt);
    expect(action).toHaveBeenCalled();
});
