import { Paragraph } from '@/shared/components/edition/Paragraph/Paragraph';
import { Section } from '@/shared/components/edition/Section/Section';

/**
 * Update section of the cookie policy page.
 */
export const Updates = () => {
    return (
        <Section heading="Modifications">
            <Paragraph>
                Cette politique de cookies peut être modifiée à l&apos;occasion
                afin de maintenir la conformité avec la loi et de tenir compte
                de tout changement concernant les cookies. Le cas échéant, vous
                serez invités à renouveller vos préférences.
            </Paragraph>
        </Section>
    );
};
