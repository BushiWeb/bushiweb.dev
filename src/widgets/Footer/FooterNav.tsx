import Link from 'next/link';
import { UrlObject } from 'url';

type NextLinkTarget =
    | UrlObject
    | __next_route_internal_types__.RouteImpl<string>;

type NavLinks = (
    | {
          to: NextLinkTarget;
          href?: string;
          label: string;
      }
    | {
          to?: NextLinkTarget;
          href: string;
          label: string;
      }
)[];

const NAV_LINKS: NavLinks = [
    {
        to: '/mentions-legales',
        label: 'Mentions légales',
    },
    {
        to: '/politique-de-confidentialite',
        label: 'Politique de confidentialité',
    },
    /* {
        to: '/politique-de-cookies',
        label: 'Politique de cookies',
    }, */
    {
        href: '/sitemap.xml',
        label: 'Plan du site',
    },
];

/**
 * Navigation section of the footer.
 */
export const FooterNav = () => {
    return (
        <nav className="flex flex-col flex-nowrap items-center gap-150 bg-surface-background px-300 pb-300 pt-150 text-center font-primary text-s1 font-normal leading-normal text-surface-on-variant desktop:flex-row desktop:flex-wrap desktop:justify-between desktop:px-500 desktop:pt-300">
            <ul className="flex flex-row flex-wrap justify-center gap-50">
                {NAV_LINKS.map(({ label, to, href }) => (
                    <li
                        className="border-r-10 border-solid border-r-outline px-100 last:border-none"
                        key={label}
                    >
                        {to ?
                            <Link href={to}>{label}</Link>
                        :   <a href={href}>{label}</a>}
                    </li>
                ))}
            </ul>
            <p>Copyright © 2024 Emeric Francisod, tous droits réservés</p>
        </nav>
    );
};
