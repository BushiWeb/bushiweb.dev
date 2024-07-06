import { Heading } from 'shared/components/edition/Heading/Heading';
import { Link } from 'shared/components/edition/Link/Link';
import { Paragraph } from 'shared/components/edition/Paragraph/Paragraph';
import './LegalNotice.css';
import { LEGAL_NOTICE_DATA } from './LegalNotice.data';
import { Copyright } from './sections/Copyright';
import { Edition } from './sections/Edition';
import { HypertextAndCookies } from './sections/HypertextAndCookies';
import { Jurisdiction } from './sections/Jurisdiction';
import { Responsabilities } from './sections/Responsabilities';
import { Rgpd } from './sections/Rgpd';

/* Legal notice page page */
export function LegalNotice() {
    return (
        <div className="legal-notice">
            <Heading>Mentions légales</Heading>
            <Paragraph>
                <em>Dernière mise à jour le {LEGAL_NOTICE_DATA.lastUpdated}</em>
            </Paragraph>
            <Paragraph>
                Merci au générateur{' '}
                <Link href="https://la-webeuse.com/generateur-mentions-legales/">
                    https://la-webeuse.com/generateur-mentions-legales/
                </Link>{' '}
                pour l&apos;aide apporté lors de la création de ces mentions
                légales.
            </Paragraph>

            <Edition />
            <Copyright />
            <Responsabilities />
            <Rgpd />
            <HypertextAndCookies />
            <Jurisdiction />
        </div>
    );
}
