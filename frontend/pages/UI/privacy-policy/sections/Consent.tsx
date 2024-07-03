import { Paragraph, Heading } from 'shared/components/edition';

/* Consent section of the privacy policy */
export default function Consent() {
    return (
        <>
            <Heading level={2}>Consentement</Heading>
            <Paragraph>
                Les utilisateurs conviennent qu&apos;en utilisant notre site,
                ils consentent aux conditions énoncées dans la présente
                politique de confidentialité et à la collecte,
                l&apos;utilisation et la conservation des données énumérées dans
                la présente politique.
            </Paragraph>
        </>
    );
}
