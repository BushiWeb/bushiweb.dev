import { Paragraph, Heading, Link } from 'shared/components/edition';

/* RGPD section of the legal notice */
export default function Rgpd() {
    return (
        <>
            <Heading level={2}>CNIL et gestion des données</Heading>
            <Paragraph>
                Conformément aux dispositions de{' '}
                <Link href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000886460">
                    la loi 78-17 du 6 janvier 1978 modifiée
                </Link>
                , l&apos;utilisateur du site <em>https://bushiweb.dev</em>{' '}
                dispose d&apos;un droit d&apos;accès, de modification et de
                suppression des informations collectées. Pour exercer ce droit,
                envoyez un message à{' '}
                <Link href="mailto:epf@bushiweb.dev">epf@bushiweb.dev</Link> .
            </Paragraph>

            <Paragraph>
                Pour plus d&apos;informations sur la façon dont nous traitons
                vos données (type de données, finalité, destinataire...), lisez
                notre{' '}
                <Link href="/politique-de-confidentialite">
                    politique de confidentialité
                </Link>
                .
            </Paragraph>
        </>
    );
}
