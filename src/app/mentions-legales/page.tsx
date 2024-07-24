import { Link } from '@/shared/components/edition/Link/Link';
import { Paragraph } from '@/shared/components/edition/Paragraph/Paragraph';
import { LEGAL_NOTICE_DATA } from './LegalNotice.data';
import { Section } from '@/shared/components/edition/Section/Section';
import { Copyright } from './_content/Copyright';
import { Edition } from './_content/Edition';
import { HypertextAndCookies } from './_content/HypertextAndCookies';
import { Jurisdiction } from './_content/Jurisdiction';
import { Responsabilities } from './_content/Responsabilities';
import { Rgpd } from './_content/Rgpd';

/**
 * Legal notice page.
 * Presents all the legal notice informations and some general usage conditions.
 */
const LegalNotice = () => {
    return (
        <Section
            heading="Mentions légales"
            className="grow bg-surface-background text-surface-on"
            childSections={[
                <Edition key="edition" />,
                <Copyright key="copyright" />,
                <Responsabilities key="responsabilities" />,
                <Rgpd key="rgpd" />,
                <HypertextAndCookies key="hypertext and cookies" />,
                <Jurisdiction key="jurisdiction" />,
            ]}
        >
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
        </Section>
    );
};

export default LegalNotice;
