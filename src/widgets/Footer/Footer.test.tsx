import { render } from '@tests/utils';
import { expect, test } from 'vitest';
import { Footer } from './Footer';

test('The Footer component renders with the right content', () => {
    const { getByRole } = render(<Footer />);
    getByRole('contentinfo');

    // Logo and home link
    getByRole('img', { name: 'BushiWeb' });
    const homeLinkElt = getByRole('link', { name: 'BushiWeb' });
    expect(homeLinkElt).toHaveAttribute('href', '/');

    // Social links
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

    // Other links
});
