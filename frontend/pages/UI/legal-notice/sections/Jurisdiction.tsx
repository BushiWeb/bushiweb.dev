import { Heading } from 'shared/components/edition/Heading/Heading';
import { Paragraph } from 'shared/components/edition/Paragraph/Paragraph';

/* Jurisdiction section of the legal notice */
export function Jurisdiction() {
    return (
        <>
            <Heading level={2}>
                Droit applicable et attribution de juridiction
            </Heading>
            <Paragraph>
                Tout litige en relation avec l&apos;utilisation du site{' '}
                <em>https://bushiweb.dev</em> est soumis au droit français. En
                dehors des cas où la loi ne le permet pas, il est fait
                attribution exclusive de juridiction aux tribunaux compétents de{' '}
                <strong>Grenoble</strong>.
            </Paragraph>
        </>
    );
}
