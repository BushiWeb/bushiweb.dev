import { Heading } from 'shared/components/edition/Heading/Heading';
import { Paragraph } from 'shared/components/edition/Paragraph/Paragraph';
import './CookiePolicy.css';
import { COOKIE_POLICY_DATA } from './CookiePolicy.data';
import { Consent } from './sections/Consent';
import { Contact } from './sections/Contact';
import { Cookies } from './sections/Cookies';
import { Introduction } from './sections/Introduction';
import { Updates } from './sections/Updates';

/* Privacy policy page component */
export function CookiePolicy() {
    return (
        <div className="cookie-policy">
            <Heading>Politique de cookies</Heading>
            <Paragraph>
                <em>
                    Dernière mise à jour le {COOKIE_POLICY_DATA.lastUpdated}
                </em>
            </Paragraph>

            <Introduction />
            <Consent />
            <Cookies />
            <Updates />
            <Contact />
        </div>
    );
}
