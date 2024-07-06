import { Heading } from 'shared/components/edition/Heading/Heading';
import { Paragraph } from 'shared/components/edition/Paragraph/Paragraph';

/* Update section of the privacy policy */
export function Updates() {
    return (
        <>
            <Heading level={2}>Modifications</Heading>
            <Paragraph>
                Cette politique de confidentialité peut être modifiée à
                l&apos;occasion afin de maintenir la conformité avec la loi et
                de tenir compte de tout changement à notre processus de collecte
                de données. Nous recommandons à nos utilisateurs de vérifier
                notre politique de temps à autre pour s&apos;assurer qu&apos;ils
                soient informés de toute mise à jour. Afin de facilité la prise
                de connaissance des modifications, la date de dernière mise à
                jour est disponible en haut de cette politique de
                confidentialité, et la liste des changements sera disponible en
                bas de celle-ci.
            </Paragraph>
        </>
    );
}
