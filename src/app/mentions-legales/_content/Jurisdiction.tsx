import { Paragraph } from '@/shared/components/edition/Paragraph/Paragraph';
import { Section } from '@/shared/components/edition/Section/Section';

/**
 * Jurisdiction section of the legal notice
 */
export const Jurisdiction = () => {
    return (
        <Section heading="Droit applicable et attribution de juridiction">
            <Paragraph>
                Tout litige en relation avec l&apos;utilisation du site{' '}
                <em>https://bushiweb.dev</em> est soumis au droit français. En
                dehors des cas où la loi ne le permet pas, il est fait
                attribution exclusive de juridiction aux tribunaux compétents de{' '}
                <strong>Grenoble</strong>.
            </Paragraph>
        </Section>
    );
};
