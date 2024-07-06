import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { render } from 'shared/tests/tests-utils';
import { expect, test, vi } from 'vitest';
import { FAB } from './FAB';
import { userEvent } from 'shared/tests/user-event';

test('The FAB renders as an icon FAB by default', () => {
    const name = 'bars';
    const { getByRole } = render(
        <FAB>
            <FontAwesomeIcon icon={faBars} title={name} />
        </FAB>,
    );
    const fabElt = getByRole('button', { name });
    expect(fabElt).toHaveClass('FAB--icon');
    expect(fabElt).toHaveAttribute('type', 'button');
});

test('The FAB renders as an extended FAB', () => {
    const name = 'bars';
    const { getByRole } = render(<FAB extendedFab={true}>{name}</FAB>);
    const fabElt = getByRole('button', { name });
    expect(fabElt).toHaveClass('pattern-typography-label-l');
});

test('The FAB executes the action on click', async () => {
    const name = 'bars';
    const action = vi.fn();
    const user = userEvent.setup();
    const { getByRole } = render(
        <FAB extendedFab={true} onClick={action}>
            {name}
        </FAB>,
    );
    const fabElt = getByRole('button', { name });
    await user.click(fabElt);
    expect(action).toHaveBeenCalled();
});

test('The FAB renders as submit button', () => {
    const name = 'bars',
        type = 'submit';
    const { getByRole } = render(
        <FAB extendedFab={true} type={type}>
            {name}
        </FAB>,
    );
    const fabElt = getByRole('button', { name });
    expect(fabElt).toHaveClass('pattern-typography-label-l');
    expect(fabElt).toHaveAttribute('type', type);
});
