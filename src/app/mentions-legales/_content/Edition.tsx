import { Paragraph } from '@/shared/components/edition/Paragraph/Paragraph';
import { LEGAL_NOTICE_DATA } from '../LegalNotice.data';
import { Company } from './Company';
import { Host } from './Host';
import { Owner } from './Owner';
import { Section } from '@/shared/components/edition/Section/Section';
import { Link } from '@/shared/components/edition/Link/Link';

/**
 * Edition section of the legal notice.
 */
export const Edition = () => {
    return (
        <Section
            heading="Édition du site"
            childSections={[
                <Owner key="owner" />,
                <Company key="company" />,
                <Host key="host" />,
            ]}
        >
            <Paragraph>
                En vertu de{' '}
                <Link href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000801164#LEGIARTI000042038977">
                    l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004
                </Link>{' '}
                pour la confiance dans l&apos;économie numérique, il est précisé
                aux utilisateurs du site internet{' '}
                <Link href={LEGAL_NOTICE_DATA.url}>
                    {LEGAL_NOTICE_DATA.url}
                </Link>{' '}
                l&apos;identité des différents intervenants dans le cadre de sa
                réalisation et de son suivi.
            </Paragraph>
        </Section>
    );
};
