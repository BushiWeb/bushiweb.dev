import { Paragraph } from '@/shared/components/edition/Paragraph/Paragraph';
import { Section } from '@/shared/components/edition/Section/Section';

/**
 * Consent section of the privacy policy page.
 */
export const Consent = () => {
    return (
        <Section heading="Consentement">
            <Paragraph>
                Les utilisateurs conviennent qu&apos;en utilisant notre site,
                ils consentent aux conditions énoncées dans la présente
                politique de confidentialité et à la collecte,
                l&apos;utilisation et la conservation des données énumérées dans
                la présente politique.
            </Paragraph>
        </Section>
    );
};
