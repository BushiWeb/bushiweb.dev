import { render } from 'shared/tests/tests-utils';
import { expect, test } from 'vitest';
import { Footer } from './Footer';

test('The Footer component renders with the logo and the links', () => {
    const logoName = 'BushiWeb';
    const { getByRole } = render(<Footer />);
    getByRole('contentinfo');

    // Logo and home link test
    const homeLink = getByRole('link', { name: logoName });
    getByRole('img', { name: logoName });
    expect(homeLink).toHaveAttribute('href', '/');

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

    // Legal notice link test
    const legalNoticeLink = getByRole('link', { name: 'Mentions légales' });
    expect(legalNoticeLink).toHaveAttribute(
        'href',
        expect.stringContaining('mentions-legales'),
    );

    // Privacy policy link test
    const privacyPolicy = getByRole('link', {
        name: 'Politique de confidentialité',
    });
    expect(privacyPolicy).toHaveAttribute(
        'href',
        expect.stringContaining('politique-de-confidentialite'),
    );

    // Cookie policy link test
    const cookiePolicy = getByRole('link', { name: 'Politique de cookies' });
    expect(cookiePolicy).toHaveAttribute(
        'href',
        expect.stringContaining('politique-de-cookies'),
    );

    // sitemap link test
    const sitemapLink = getByRole('link', { name: 'Plan du site' });
    expect(sitemapLink).toHaveAttribute(
        'href',
        expect.stringContaining('sitemap.xml'),
    );
});
