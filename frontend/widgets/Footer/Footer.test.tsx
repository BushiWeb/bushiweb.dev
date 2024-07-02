import { render } from 'shared/tests/tests-utils';
import { expect, test } from 'vitest';
import Footer from './Footer';

test('The Footer component renders with the logo and the links', () => {
    const logoName = 'BushiWeb';
    const { getByRole } = render(<Footer />);
    getByRole('contentinfo');

    // Logo and home link test
    const homeLink = getByRole('link', { name: logoName });
    getByRole('img', { name: logoName });
    expect(homeLink).toHaveAttribute('href', '/');

    // Legal notice link test
    const legalNoticeLink = getByRole('link', { name: 'Mentions légales' });
    expect(legalNoticeLink).toHaveAttribute(
        'href',
        expect.stringContaining('mentions-legales'),
    );

    // sitemap link test
    const sitemapLink = getByRole('link', { name: 'Plan du site' });
    expect(sitemapLink).toHaveAttribute(
        'href',
        expect.stringContaining('sitemap.xml'),
    );
});
