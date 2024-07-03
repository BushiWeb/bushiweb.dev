import './LegalNotice.css';
import data from './LegalNotice.data';
import {
    Paragraph,
    Link,
    Heading,
    DescriptionList as DL,
} from 'shared/components/edition';

/* Legal notice page page */
export default function LegalNotice() {
    return (
        <div className="legal-notice">
            <Heading>Mentions légales</Heading>
            <Paragraph>
                <em>Dernière mise à jour le {data.lastUpdated}</em>
            </Paragraph>
            <Paragraph>
                Merci au générateur{' '}
                <Link href="https://la-webeuse.com/generateur-mentions-legales/">
                    https://la-webeuse.com/generateur-mentions-legales/
                </Link>{' '}
                pour l&apos;aide apporté lors de la création de ces mentions
                légales.
            </Paragraph>

            <Heading level={2}>Édition du site</Heading>
            <Paragraph>
                En vertu de{' '}
                <Link href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000801164#LEGIARTI000042038977">
                    l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004
                </Link>{' '}
                pour la confiance dans l&apos;économie numérique, il est précisé
                aux utilisateurs du site internet{' '}
                <Link href={data.url}>{data.url}</Link> l&apos;identité des
                différents intervenants dans le cadre de sa réalisation et de
                son suivi.
            </Paragraph>

            <Heading level={3}>Propriétaire du site</Heading>
            <DL.DescriptionList>
                <DL.DescriptionListItem
                    terms="Identité"
                    descriptions={data.owner.fullName}
                />
                <DL.DescriptionListItem
                    terms="Adresse"
                    descriptions={data.owner.address}
                />
                <DL.DescriptionListItem
                    terms="Email"
                    descriptions={
                        <address>
                            <Link href={`mailto:${data.owner.email}`}>
                                {data.owner.email}
                            </Link>
                        </address>
                    }
                />
                <DL.DescriptionListItem
                    terms="Téléphone"
                    descriptions={
                        <address>
                            <Link href={`tel:${data.owner.phone}`}>
                                {data.owner.phone}
                            </Link>
                        </address>
                    }
                />
            </DL.DescriptionList>

            <Heading level={3}>Identification de l&apos;entreprise</Heading>
            <DL.DescriptionList>
                <DL.DescriptionListItem
                    terms="Raison sociale"
                    descriptions={data.company.companyName}
                />
                <DL.DescriptionListItem
                    terms="Nom commercial"
                    descriptions={data.company.businessName}
                />
                <DL.DescriptionListItem
                    terms="Numéro SIREN"
                    descriptions={data.company.siren}
                />
                <DL.DescriptionListItem
                    terms="RCS"
                    descriptions={data.company.rcs}
                />
                <DL.DescriptionListItem
                    terms="Adresse"
                    descriptions={data.company.address}
                />
                <DL.DescriptionListItem
                    terms="Numéro de TVA"
                    descriptions={data.company.vat}
                />
            </DL.DescriptionList>

            <Heading level={3}>Hébergeur</Heading>
            <DL.DescriptionList>
                <DL.DescriptionListItem
                    terms="Raison sociale"
                    descriptions={data.host.companyName}
                />
                <DL.DescriptionListItem
                    terms="Adresse"
                    descriptions={data.host.address}
                />
                <DL.DescriptionListItem
                    terms="Email"
                    descriptions={
                        <address>
                            <Link href={`mailto:${data.host.email}`}>
                                {data.host.email}
                            </Link>
                        </address>
                    }
                />
                <DL.DescriptionListItem
                    terms="Téléphone"
                    descriptions={
                        <address>
                            <Link href={`tel:${data.host.phone}`}>
                                {data.host.phone}
                            </Link>
                        </address>
                    }
                />
            </DL.DescriptionList>

            <Heading level={2}>
                Propriété intellectuelle et contrefaçons
            </Heading>
            <Paragraph>
                <strong>{data.owner.fullName}</strong> est propriétaire des
                droits de propriété intellectuelle et détient les droits
                d&apos;usage de tous les éléments accessibles sur le site
                internet, notamment les textes, images, graphismes, logos,
                vidéos, architecture, icônes et sons.
            </Paragraph>
            <Paragraph>
                Toute reproduction, représentation, modification, publication,
                adaption de tout ou partie des éléments du site, quel que soit
                le moyen ou le procédé utilisé, est interdite, sauf autorisation
                préalable écrite de <strong>{data.owner.fullName}</strong>
            </Paragraph>
            <Paragraph>
                Toute exploitation non autorisée du site ou de l&apos;un des
                éléments qu&apos;il contient sera considérée comme constitutive
                d&apos;une contrefaçon et poursuivie conformément aux
                disposition des articles{' '}
                <Link href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032655082">
                    L.335-2 et suivants du Code de Propriété Intellectuelle
                </Link>
                .
            </Paragraph>

            <Heading level={2}>Limitations de responsabilité</Heading>
            <Paragraph>
                {data.owner.fullName} ne pourra être tenu pour responsable des
                dommages directs et indirects causés au matériel de
                l&apos;utilisateur, lors de l&apos;accès au site{' '}
                <em>https://bushiweb.dev</em>.
            </Paragraph>

            <Paragraph>
                {data.owner.fullName} décline toute responsabilité quant à
                l&apos;utilisation qui pourrait être faite des informations et
                contenus présents sur <em>https://bushiweb.dev</em>.
            </Paragraph>

            <Paragraph>
                {data.owner.fullName} s&apos;engage à sécuriser au mieux le site{' '}
                <em>https://bushiweb.dev</em>, cependant sa responsabilité ne
                pourra être mise en cause si des données indésirables sont
                importées et installées sur son site à son insu.
            </Paragraph>

            <Paragraph>
                Si des espaces interactifs (espace contact ou commentaires) sont
                à la disposition des utilisateurs. {data.owner.fullName} se
                réserve le droit de supprimer, sans mise en demeure préalable,
                tout contenu déposé dans cet espace qui contreviendrait à la
                législation applicable en France, en particulier aux
                dispositions relatives à la protection des données.
            </Paragraph>

            <Paragraph>
                Le cas échéant, {data.owner.fullName} se réserve également la
                possibilité de mettre en cause la responsabilité civile et/ou
                pénale de l&apos;utilisateur, notamment en cas de message à
                caractère raciste, injurieux, diffamant, ou pornographique, quel
                que soit le support utilisé (texte, photographie …).
            </Paragraph>

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
        </div>
    );
}
