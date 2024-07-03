import { Paragraph, Heading } from 'shared/components/edition';

/* Juveniles section of the privacy policy */
export default function Juveniles() {
    return (
        <>
            <Heading level={2}>Mineurs</Heading>
            <Paragraph>
                Le{' '}
                <abbr title="Règlement Général sur la Protection des Données">
                    RGPD
                </abbr>{' '}
                précise que les personnes de moins de 15 ans sont considérées
                domme des mineurs aux fins de la collecte de données. Les
                mineurs doivent avoir le consentement d&apos;un représentant
                légal pour que leurs données soient recueillies, traitées et
                utilisées.
            </Paragraph>
        </>
    );
}
