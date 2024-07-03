import './LegalNotice.css';
import data from './LegalNotice.data';
import { Paragraph, Link, Heading } from 'shared/components/edition';
import {
    Copyright,
    Edition,
    HypertextAndCookies,
    Jurisdiction,
    Responsabilities,
    Rgpd,
} from './sections';

/* Legal notice page page */
export default function LegalNotice() {
    return (
        <div className="legal-notice">
            <Heading>Mentions légales</Heading>
            <Paragraph>
                <em>Dernière mise à jour le {data.lastUpdated}</em>
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
