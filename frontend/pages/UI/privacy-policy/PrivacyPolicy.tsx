import CollectedData from './CollectedData';
import './PrivacyPolicy.css';
import data from './PrivacyPolicy.data';
import { Paragraph, Link, Heading, List as L } from 'shared/components/edition';

/* Privacy policy page component */
export default function PrivacyPolicy() {
    return (
        <div className="privacy-policy">
            <Heading>Politique de confidentialité</Heading>
            <Paragraph>
                <em>Dernière mise à jour le {data.lastUpdated}</em>
            </Paragraph>

            <Heading level={2}>
                Objectif de cette politique de confidentialité
            </Heading>
            <Paragraph>
                Le but de cette politique de confidentialité est d&apos;informer
                les utilisateurs de notre site concernant:
            </Paragraph>
            <L.List>
                <L.ListItem>
                    les données personnelles que nous recueillons;
                </L.ListItem>
                <L.ListItem>
                    l&apos;utilisation des données recueillies;
                </L.ListItem>
                <L.ListItem>
                    les personnes ayant accès aux données recueillies;
                </L.ListItem>
                <L.ListItem>les droits des utilisateurs du site.</L.ListItem>
            </L.List>

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
                    <Link href={`mailto:${data.owner.email}`}>
                        {data.owner.email}
                    </Link>
                    ;
                </L.ListItem>
                <L.ListItem>
                    téléphone ou SMS au{' '}
                    <Link href={`tel:${data.owner.phone}`}>
                        {data.owner.phone}
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

            <Heading level={2}>Consentement</Heading>
            <Paragraph>
                Les utilisateurs conviennent qu&apos;en utilisant notre site,
                ils consentent aux conditions énoncées dans la présente
                politique de confidentialité et à la collecte,
                l&apos;utilisation et la conservation des données énumérées dans
                la présente politique.
            </Paragraph>

            <CollectedData />

            <Heading level={2}>Mineurs</Heading>
            <Paragraph>
                Le{' '}
                <abbr title="Règlement Général sur la Protection des Données">
                    RGPD
                </abbr>{' '}
                précise que les personnes de moins de 15 ans sont considérées
                domme des mineurs aux fins de la collecte de données. Les
                mineurs doivent avoir le consentement d&apos;un représentant
                légal pour que leurs données soient recueillies, traitées et
                utilisées.
            </Paragraph>

            <Heading level={2}>Lois applicables</Heading>
            <Paragraph>
                Conformément au{' '}
                <em>Règlement générale sur la protection des données</em> (
                <abbr title="Règlement Général sur la Protection des Données">
                    RGPD
                </abbr>
                ), cette politique de confidentialité est conforme aux
                règlements suivants:
            </Paragraph>
            <Paragraph>
                Les données à caractère personnel doivent être:
            </Paragraph>
            <L.List>
                <L.ListItem>
                    traitées de manière licite, loyale et transparente au regard
                    de la personne concernée (licéité, loyauté, transparence);
                </L.ListItem>
                <L.ListItem>
                    collectées pour des finalités déterminées, explicites et
                    légitimes, et ne pas être traitées ultérieurement d&apos;une
                    manière incompatible avec ces finalités; le traitement
                    ultérieur à des fins archivistiques dans l&apos;intérêt
                    public, à des fins de recherche scientifique ou historique
                    ou à des fins statistiques n&apos;est pas considéré,
                    conformément à <em>l&apos;article 86, paragraphe 1</em>,
                    comme incompatible avec les finalités initiales (limitation
                    des finalités);
                </L.ListItem>
                <L.ListItem>
                    adéquates, pertinentes et limitées à ce qui est nécessaire
                    au regard des finalités pour lesquelles elles sont traitées
                    (minimisation des données);
                </L.ListItem>
                <L.ListItem>
                    exactes et, si nécessaire, tenues à jour; toutes les mesures
                    raisonnables doivent être prises pour que les données à
                    caractère personnel qui sont inexactes, eu égard aux
                    finalités pour lesquelles elles sont traitées, soient
                    effacées ou rectifiées sans tarder (exactitude);
                </L.ListItem>
                <L.ListItem>
                    conservées sous une forme permettant l&apos;identification
                    des personnes concernées pendant une durée n&apos;excédant
                    pas celle nécessaire au regard des finalités pour lesquelles
                    elles sont traitées; les données à caractère personnel
                    peuvent être conservées pour des durées plus longues dans la
                    mesure où elle seront traitées exclusivement à des fins
                    archivistiques dans l&apos;intérêt public, à des fins de
                    recherche scientifique ou historique ou à des fins
                    statistiques conformément à{' '}
                    <em>l&apos;article 89, paragraphe 1</em>, pour autant que
                    soient mises en oeuvre les mesures techniques et
                    organisationnelles appropriées requises par le règlement
                    afin de garantir les droits et libertés de la personne
                    concernée (limitation de la conservation);
                </L.ListItem>
                <L.ListItem>
                    traitées de façon à garantir une sécurité appropriée des
                    données à caractère personnel, y compris la protection
                    contre le traitement non autorisé ou illicite et contre la
                    perte, la destruction ou les dégâts d&apos;origine
                    accidentelle, à l&apos;aide de mesures techniques ou
                    organisationnelles appropriées (intégrité et
                    confidentialité).
                </L.ListItem>
            </L.List>
            <Paragraph>
                Le traitement n&apos;est licite que si, et dans la mesure où, au
                moins une des conditions suivantes est remplie:
            </Paragraph>
            <L.List>
                <L.ListItem>
                    la personne concernée a consenti au traitement de ses
                    données à caractère personnel pour une ou plusieurs
                    finalités spécifiques;
                </L.ListItem>
                <L.ListItem>
                    le traitement est nécessaire à l&apos;exécution d&apos;un
                    contrat auquel la personne concernée est partie, ou à
                    l&apos;exécution de mesures précontractuelles prises à la
                    demande de celle-ci;
                </L.ListItem>
                <L.ListItem>
                    le traitement est nécessaire au respect d&apos;une
                    obligation légales à laquelle le responsable du traitement
                    est soumis;
                </L.ListItem>
                <L.ListItem>
                    le traitement est nécessaire à la sauvegarde des intérêts
                    vitaux de la personne concernée ou d&apos;une autre personne
                    physique;
                </L.ListItem>
                <L.ListItem>
                    le traitement est nécessaire à l&apos;exécution d&apos;une
                    mission d&apos;intérêt public ou relevant de l&apos;exercice
                    de l&apos;autorité publique dont est investi le responsable
                    du traitement;
                </L.ListItem>
                <L.ListItem>
                    le traitement est nécessaire aux fins des intérêts légitimes
                    poursuivis par le responsable du traitement ou par un tiers,
                    à moins que ne prévalent les intérêts ou les libertés et
                    droits fondamentaux de la personne concernée qui exige une
                    protection des données à caractère personnel, notamment
                    lorsque la personne concernée est un enfant.
                </L.ListItem>
            </L.List>

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

            <Heading level={2}>Contact</Heading>
            <Paragraph>
                Si vous avez des questions à nous posez, n&apos;hésitez pas à
                communiquer avec nous en utilisant les moyens suivants:
            </Paragraph>
            <address>
                <L.List>
                    <L.ListItem>
                        email:{' '}
                        <Link href={`mailto:${data.owner.email}`}>
                            {data.owner.email}
                        </Link>
                        ;
                    </L.ListItem>
                    <L.ListItem>
                        téléphone:{' '}
                        <Link href={`tel:${data.owner.phone}`}>
                            {data.owner.phone}
                        </Link>
                        .
                    </L.ListItem>
                </L.List>
            </address>
        </div>
    );
}
