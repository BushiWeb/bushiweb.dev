import { Heading } from 'shared/components/edition/Heading/Heading';
import { Link } from 'shared/components/edition/Link/Link';
import { Paragraph } from 'shared/components/edition/Paragraph/Paragraph';

/* Consent section of the cookie policy */
export function Consent() {
    return (
        <>
            <Heading level={2}>
                Recueil du consentement à l&apos;utilisation des cookies
            </Heading>

            <Paragraph>
                Il est dans votre droit de pouvoir librement vous opposer à
                l&apos;utilisation des cookies non essentiels au fonctionnement
                du site et des cookies de services tiers.
            </Paragraph>

            <Paragraph>
                Lors de votre première visite, votre consentement vous sera
                demandé par une banière. Tous les cookies soumis au consentement
                sont désactivés par défaut, et le resteront tant que vous ne
                donnez pas explicitement votre consentement. Vous aurez la
                possibilité de paramtérer vos choix pour chaque catégorie de
                cookies indépendamment. Vos préférences seront ensuite
                sauvegardées pour une période de 6 mois, après laquelle nous
                vous demanderons de confirmer vos choix à nouveau.
            </Paragraph>

            <Paragraph>
                Vous serez également ammené à consentir à l&apos;utilisation des
                cookies en cas de cette politique de cookies.
            </Paragraph>

            <Paragraph>
                Vous pourrez à tout moment modifier vos préférences soit via le
                lien <Link to="/gestion-des-cookies">gestion des cookies</Link>{' '}
                accessible dans le pied de page, soit à l&apos;aide du bouton
                flottant &quot;Gestion des cookies&quot;.
            </Paragraph>

            <Paragraph>
                La plupart des navigateurs proposent également la possibilité de
                gérer les cookies, permettant de supprimer tous les cookies ou
                de refuser les cookies tiers. Il est important de noter que ces
                paramètres sont indépendant des sites consultés.
            </Paragraph>

            <Paragraph>
                Nous utilisons la <em>Plateforme de Gestion de Consentement</em>{' '}
                <Link href="https://www.axept.io/fr/">Axceptio</Link>, conforme
                aux RGPD, permettant de recueillir les consentements des
                utilisateurs du site et de fournir une preuve de ces
                consentements.
            </Paragraph>
        </>
    );
}
