import { Link } from 'shared/components/edition/Link/Link';
import { Heading } from 'shared/components/edition/Heading/Heading';
import { Paragraph } from 'shared/components/edition/Paragraph/Paragraph';
import { PRIVACY_POLICY_DATA } from '../PrivacyPolicy.data';
import * as L from 'shared/components/edition/List/List';

/* User's rights section of the privacy policy */
export function UserRights() {
    return (
        <>
            <Heading level={2}>Vos droits en tant qu&apos;utilisateur</Heading>
            <Paragraph>
                En vertu du{' '}
                <abbr title="Règlement Général sur la Protection des Données">
                    RGPD
                </abbr>
                , les utilisateurs ont les droits suivants en tant que personne
                concernées:
            </Paragraph>
            <L.List>
                <L.ListItem>droit d&apos;accès;</L.ListItem>
                <L.ListItem>droit de rectification;</L.ListItem>
                <L.ListItem>droit à l&apos;effacement;</L.ListItem>
                <L.ListItem>droit de restreindre le traitement;</L.ListItem>
                <L.ListItem>droit à la portabilité des données;</L.ListItem>
                <L.ListItem>droit d&apos;objection;</L.ListItem>
            </L.List>
            <Paragraph>
                Vous trouverez de plus amples informations sur ces droits au{' '}
                <em>chapitre 3 (art 12-23) du RGPD</em>.
            </Paragraph>

            <Heading level={3}>Comment appliquer vos droits?</Heading>
            <Paragraph>
                Si vous souhaitez que vos renseignements soient supprimés ou
                modifiés d&apos;une façon ou d&apos;une autre, vous pouvez nous
                le communiquer via:
            </Paragraph>
            <L.List>
                <L.ListItem>
                    le <Link to="/contact">formulaire de contact</Link> du site
                    internet;
                </L.ListItem>
                <L.ListItem>
                    email à{' '}
                    <Link href={`mailto:${PRIVACY_POLICY_DATA.owner.email}`}>
                        {PRIVACY_POLICY_DATA.owner.email}
                    </Link>
                    ;
                </L.ListItem>
                <L.ListItem>
                    téléphone ou SMS au{' '}
                    <Link href={`tel:${PRIVACY_POLICY_DATA.owner.phone}`}>
                        {PRIVACY_POLICY_DATA.owner.phone}
                    </Link>
                    .
                </L.ListItem>
            </L.List>
            <Paragraph>
                Dans le but de simplifier et accélérer la procédure, merci de
                nous communiquer un moyen de vous identifier dans le but de
                trouver ces données. Cette information ne sera pas stockée et
                sera uniquement utilisée pour traiter cette demande en
                particulier.
            </Paragraph>
        </>
    );
}
