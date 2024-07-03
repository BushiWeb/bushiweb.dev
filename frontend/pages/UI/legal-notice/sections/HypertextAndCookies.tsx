import { Paragraph, Heading, Link } from 'shared/components/edition';

/* Hypertext and cookies section of the legal notice */
export default function HypertextAndCookies() {
    return (
        <>
            <Heading level={2}>Liens hypertextes et cookies</Heading>
            <Paragraph>
                Le site <em>https://bushiweb.dev</em> contient des liens
                hypertextes vers d&apos;autres sites et dégage toute
                responsabilité à propos de ces liens externes ou des liens créés
                par d&apos;autres sites vers <em>https://bushiweb.dev</em>.
            </Paragraph>

            <Paragraph>
                La navigation sur le site <em>https://bushiweb.dev</em> est
                susceptible de provoquer l&apos;installation de cookie(s) sur
                l&apos;ordinateur de l&apos;utilisateur.
            </Paragraph>

            <Paragraph>
                Pour plus d&apos;informations sur ce qu&apos;est un cookie et
                sur la façon dont nous faisons usage des cookies, lisez notre{' '}
                <Link href="/politique-sur-les-cookies">
                    politique sur les cookie{' '}
                </Link>
                .
            </Paragraph>
        </>
    );
}
