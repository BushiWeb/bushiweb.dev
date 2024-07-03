import './PrivacyPolicy.css';
import data from './PrivacyPolicy.data';
import { Paragraph, Link, Heading } from 'shared/components/edition';

/* Legal notice page page */
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
            <ul>
                <li>les données personnelles que nous recueillons;</li>
                <li>l&apos;utilisation des données recueillies;</li>
                <li>les personnes ayant accès aux données recueillies;</li>
                <li>les droits des utilisateurs du site.</li>
            </ul>

            <Heading level={2}>Vos droits en tant qu&apos;utilisateur</Heading>
            <Paragraph>
                En vertu du{' '}
                <abbr title="Règlement Général sur la Protection des Données">
                    RGPD
                </abbr>
                , les utilisateurs ont les droits suivants en tant que personne
                concernées:
            </Paragraph>
            <ul>
                <li>droit d&apos;accès;</li>
                <li>droit de rectification;</li>
                <li>droit à l&apos;effacement;</li>
                <li>droit de restreindre le traitement;</li>
                <li>droit à la portabilité des données;</li>
                <li>droit d&apos;objection;</li>
            </ul>
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
            <ul>
                <li>
                    le <Link to="/contact">formulaire de contact</Link> du site
                    internet;
                </li>
                <li>
                    email à{' '}
                    <Link href={`mailto:${data.owner.email}`}>
                        {data.owner.email}
                    </Link>
                    ;
                </li>
                <li>
                    téléphone ou SMS au{' '}
                    <Link href={`tel:${data.owner.phone}`}>
                        {data.owner.phone}
                    </Link>
                    .
                </li>
            </ul>
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

            <Heading level={2}>
                Donnes personnelles que nous collections
            </Heading>
            <Paragraph>
                Certaines données sont collectées suivant les actions que vous
                effectuez sur notre site.
            </Paragraph>
            <Paragraph>
                Nous nous engageons à ne pas vendre ou partager vos données avec
                des tiers non précisés, sauf dans les cas suivants:
            </Paragraph>
            <ul>
                <li>si la loi l&apos;exige;</li>
                <li>si elle est requise pour toute procédure judiciaire;</li>
                <li>pour prouver ou protéger nos droits légaux;</li>
                <li>
                    à des acheteurs de cette entreprise dans le cas où nous
                    cherchons à vendre l&apos;entreprise.
                </li>
            </ul>
            <Paragraph>
                Alors que nous prenons toutes les précautions raisonnables pour
                nous assurer que nos données d&apos;utilisateur sont sécurisées
                et que les utilisateurs sont protégés, il reste toujours du
                risque de préjudice. L&apos;internet en sa totalité peut être,
                parfois, peu sûr. Nous sommes donc incapable de garantir la
                sécurité des données des utilisateurs au-delà de ce qui est
                raisonnablement pratique.
            </Paragraph>

            <Heading level={3}>Données collectées automatiquement</Heading>
            <Paragraph>
                Aucune donnée personnelle n&apos;est collectée automatiquement
                lorsque vous visitez notre site. La présente politique sera mise
                à jour si de nouvelles données personnelles viennent à être
                collectées automatiquement.
            </Paragraph>

            <Heading level={3}>
                Données recueillies via le formulaire de contact
            </Heading>
            <dl>
                <div>
                    <dt>Données recueillies</dt>
                    <dd>
                        <ul>
                            <li>nom et prénom;</li>
                            <li>adresse email;</li>
                            <li>numéro de téléphone (facultatif).</li>
                        </ul>
                    </dd>
                </div>
                <div>
                    <dt>Durée de stockage</dt>
                    <dd>
                        Les données personnelles seront stockées pour une durée
                        de 2 ans après le dernier contact.
                    </dd>
                </div>
                <div>
                    <dt>Utilisation des données</dt>
                    <dd>
                        Les données recueillies sont utilisées à des fins de
                        contact avec la personne concernée, pour répondre à une
                        demande ou continuer un échange par exemple.
                    </dd>
                </div>
                <div>
                    <dt>Consentement</dt>
                    <dd>
                        Les données sont recueillies avec le consentement de la
                        personne concernée, par l&apos;activation d&apos;une
                        case à cocher décochée par défaut. Si l&apos;utilisateur
                        ne coche pas cette case, le formulaire ne sera pas
                        envoyé ni traité. Si l&apos;utilisateur ne consente pas
                        à l&apos;utilisation de ses données, il ne pourra pas
                        prendre contact via le formulaire de contact du site
                        internet.
                    </dd>
                </div>
                <div>
                    <dt>Personnes ayant accès à ces données</dt>
                    <dd>
                        Seul Francisod Emeric a accès aux données recueillies
                    </dd>
                </div>
                <div>
                    <dt>Protection des données recueillies</dt>
                    <dd>
                        Les données personnelles sont stockées sur les serveurs
                        de messagerie d&apos;IONOS, sécurisés.
                    </dd>{' '}
                    <dd>
                        Nous conservons une copie locale des données dans nos
                        locaux afin de les protéger en cas de perte ou
                        destruction involontaire.
                    </dd>{' '}
                    <dd>
                        Toutes les données sont transférées en utilisant le
                        protocole de sécurité de la couche de transport.
                    </dd>
                </div>
            </dl>

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
            <ul>
                <li>
                    traitées de manière licite, loyale et transparente au regard
                    de la personne concernée (licéité, loyauté, transparence);
                </li>
                <li>
                    collectées pour des finalités déterminées, explicites et
                    légitimes, et ne pas être traitées ultérieurement d&apos;une
                    manière incompatible avec ces finalités; le traitement
                    ultérieur à des fins archivistiques dans l&apos;intérêt
                    public, à des fins de recherche scientifique ou historique
                    ou à des fins statistiques n&apos;est pas considéré,
                    conformément à <em>l&apos;article 86, paragraphe 1</em>,
                    comme incompatible avec les finalités initiales (limitation
                    des finalités);
                </li>
                <li>
                    adéquates, pertinentes et limitées à ce qui est nécessaire
                    au regard des finalités pour lesquelles elles sont traitées
                    (minimisation des données);
                </li>
                <li>
                    exactes et, si nécessaire, tenues à jour; toutes les mesures
                    raisonnables doivent être prises pour que les données à
                    caractère personnel qui sont inexactes, eu égard aux
                    finalités pour lesquelles elles sont traitées, soient
                    effacées ou rectifiées sans tarder (exactitude);
                </li>
                <li>
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
                </li>
                <li>
                    traitées de façon à garantir une sécurité appropriée des
                    données à caractère personnel, y compris la protection
                    contre le traitement non autorisé ou illicite et contre la
                    perte, la destruction ou les dégâts d&apos;origine
                    accidentelle, à l&apos;aide de mesures techniques ou
                    organisationnelles appropriées (intégrité et
                    confidentialité).
                </li>
            </ul>
            <Paragraph>
                Le traitement n&apos;est licite que si, et dans la mesure où, au
                moins une des conditions suivantes est remplie:
            </Paragraph>
            <ul>
                <li>
                    la personne concernée a consenti au traitement de ses
                    données à caractère personnel pour une ou plusieurs
                    finalités spécifiques;
                </li>
                <li>
                    le traitement est nécessaire à l&apos;exécution d&apos;un
                    contrat auquel la personne concernée est partie, ou à
                    l&apos;exécution de mesures précontractuelles prises à la
                    demande de celle-ci;
                </li>
                <li>
                    le traitement est nécessaire au respect d&apos;une
                    obligation légales à laquelle le responsable du traitement
                    est soumis;
                </li>
                <li>
                    le traitement est nécessaire à la sauvegarde des intérêts
                    vitaux de la personne concernée ou d&apos;une autre personne
                    physique;
                </li>
                <li>
                    le traitement est nécessaire à l&apos;exécution d&apos;une
                    mission d&apos;intérêt public ou relevant de l&apos;exercice
                    de l&apos;autorité publique dont est investi le responsable
                    du traitement;
                </li>
                <li>
                    le traitement est nécessaire aux fins des intérêts légitimes
                    poursuivis par le responsable du traitement ou par un tiers,
                    à moins que ne prévalent les intérêts ou les libertés et
                    droits fondamentaux de la personne concernée qui exige une
                    protection des données à caractère personnel, notamment
                    lorsque la personne concernée est un enfant.
                </li>
            </ul>

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
                <ul>
                    <li>
                        email:{' '}
                        <Link href={`mailto:${data.owner.email}`}>
                            {data.owner.email}
                        </Link>
                        ;
                    </li>
                    <li>
                        téléphone:{' '}
                        <Link href={`tel:${data.owner.phone}`}>
                            {data.owner.phone}
                        </Link>
                        .
                    </li>
                </ul>
            </address>
        </div>
    );
}
