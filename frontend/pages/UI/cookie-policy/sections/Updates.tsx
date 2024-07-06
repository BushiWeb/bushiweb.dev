import { Heading } from 'shared/components/edition/Heading/Heading';
import { Paragraph } from 'shared/components/edition/Paragraph/Paragraph';

/* Update section of the cookie policy */
export function Updates() {
    return (
        <>
            <Heading level={2}>Modifications</Heading>
            <Paragraph>
                Cette politique de cookies peut être modifiée à l&apos;occasion
                afin de maintenir la conformité avec la loi et de tenir compte
                de tout changement concernant les cookies. Le cas échéant, vous
                serez invités à renouveller vos préférences.
            </Paragraph>
        </>
    );
}
