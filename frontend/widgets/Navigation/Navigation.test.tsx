import { changeViewportWidth } from 'shared/tests/changeViewportWidth';
import { render } from 'shared/tests/tests-utils';
import { userEvent } from 'shared/tests/user-event';
import { expect, test, vi } from 'vitest';
import { Navigation } from './Navigation';
import { navigationLinks } from './Navigation.context';

vi.mock('focus-trap-react', () => ({
    default: function FocusTrap({ children }: { children: React.ReactNode }) {
        return children;
    },
}));

function mobileSetup() {
    changeViewportWidth(500);
    return userEvent.setup();
}

test('The component only renders a button on mobile', () => {
    mobileSetup();
    const { getByRole, queryByRole } = render(<Navigation />);
    getByRole('button', { name: 'Accéder à la navigation' });
    const navigationElt = queryByRole('navigation');
    expect(navigationElt).toBeNull();
});

test('Clicking the button opens the navigation drawer', async () => {
    const user = mobileSetup();
    const { getByRole } = render(<Navigation />);

    // Click on the button
    const buttonElt = getByRole('button', { name: 'Accéder à la navigation' });
    await user.click(buttonElt);

    // Checks the menu
    getByRole('navigation');
});

test('The menu links to the social networks', async () => {
    const user = mobileSetup();
    const { getByRole } = render(<Navigation />);

    // Click on the button to display the menu
    const buttonElt = getByRole('button', { name: 'Accéder à la navigation' });
    await user.click(buttonElt);

    // Social link tests
    const linkedInLinkElt = getByRole('link', { name: /LinkedIn/ });
    expect(linkedInLinkElt).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/emeric-francisod',
    );
    const gitHubLinkElt = getByRole('link', { name: /GitHub/ });
    expect(gitHubLinkElt).toHaveAttribute(
        'href',
        'https://github.com/BushiWeb',
    );
});

test('The menu links to the main pages of the website', async () => {
    const user = mobileSetup();
    const { getByRole } = render(<Navigation />);

    // Click on the button to display the menu
    const buttonElt = getByRole('button', { name: 'Accéder à la navigation' });
    await user.click(buttonElt);

    // Link tests
    for (const link of navigationLinks) {
        const linkElt = getByRole('link', { name: link.label });
        expect(linkElt).toHaveAttribute('href', link.to);
    }
});

test('Pressing escape closes the drawer', async () => {
    const user = mobileSetup();
    const { getByRole, queryByRole } = render(<Navigation />);

    // Click on the button
    const buttonElt = getByRole('button', { name: 'Accéder à la navigation' });
    await user.click(buttonElt);

    // Checks if the menu is displayed
    getByRole('navigation');

    // Close de menu
    await user.keyboard('{Escape}');
    const navigationMenu = queryByRole('navigation');
    expect(navigationMenu).toBeNull();
});

test('Clicking the backdrop closes the drawer', async () => {
    const user = mobileSetup();
    const { getByRole, queryByRole, getByTestId } = render(<Navigation />);

    // Click on the button
    const buttonElt = getByRole('button', { name: 'Accéder à la navigation' });
    await user.click(buttonElt);

    // Checks if the menu is displayed
    getByRole('navigation');

    // Close de menu
    const backdropElt = getByTestId('backdrop');
    await user.click(backdropElt);
    const navigationMenu = queryByRole('navigation');
    expect(navigationMenu).toBeNull();
});

test('Clicking a link closes the drawer', async () => {
    const user = mobileSetup();
    const { getByRole, getAllByRole, queryByRole } = render(<Navigation />);

    // Click on the button
    const buttonElt = getByRole('button', { name: 'Accéder à la navigation' });
    await user.click(buttonElt);

    // Checks if the menu is displayed
    getByRole('navigation');

    // Close de menu
    const linkElt = getAllByRole('link');
    await user.click(linkElt[0]);
    const navigationMenu = queryByRole('navigation');
    expect(navigationMenu).toBeNull();
});

test('Clicking the close button closes the drawer', async () => {
    const user = mobileSetup();
    const { getByRole, queryByRole } = render(<Navigation />);

    // Click on the button
    const buttonElt = getByRole('button', { name: 'Accéder à la navigation' });
    await user.click(buttonElt);

    // Checks if the menu is displayed
    getByRole('navigation');

    // Close de menu
    const closeButtonElt = getByRole('button', {
        name: 'Fermer la navigation',
    });
    await user.click(closeButtonElt);
    const navigationMenu = queryByRole('navigation');
    expect(navigationMenu).toBeNull();
});
