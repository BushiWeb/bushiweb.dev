import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { render } from 'shared/tests/tests-utils';
import { expect, test, vi } from 'vitest';
import { IconButton } from './IconButton';
import { userEvent } from 'shared/tests/user-event';

test('The icon button renders', () => {
    const name = 'bars',
        icon = faXmark;
    const { getByRole } = render(<IconButton icon={icon} title={name} />);
    const buttonElt = getByRole('button', { name });
    expect(buttonElt).toHaveAttribute('type', 'button');
});

test('The icon button executes the action on click', async () => {
    const name = 'bars',
        icon = faXmark,
        action = vi.fn();
    const user = userEvent.setup();
    const { getByRole } = render(
        <IconButton icon={icon} title={name} onClick={action} />,
    );
    const buttonElt = getByRole('button', { name });
    await user.click(buttonElt);
    expect(action).toHaveBeenCalled();
});

test('The FAB renders as submit button', () => {
    const name = 'bars',
        icon = faXmark,
        type = 'submit';
    const { getByRole } = render(
        <IconButton icon={icon} title={name} type={type} />,
    );
    const fabElt = getByRole('button', { name });
    expect(fabElt).toHaveAttribute('type', type);
});
