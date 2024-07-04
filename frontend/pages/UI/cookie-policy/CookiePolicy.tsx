import './CookiePolicy.css';
import data from './CookiePolicy.data';
import { Paragraph, Heading } from 'shared/components/edition';
import { Consent, Contact, Cookies, Introduction, Updates } from './sections';

/* Privacy policy page component */
export default function CookiePolicy() {
    return (
        <div className="cookie-policy">
            <Heading>Politique de cookies</Heading>
            <Paragraph>
                <em>Dernière mise à jour le {data.lastUpdated}</em>
            </Paragraph>

            <Introduction />
            <Consent />
            <Cookies />
            <Updates />
            <Contact />
        </div>
    );
}
