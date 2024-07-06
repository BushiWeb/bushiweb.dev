import { Heading } from 'shared/components/edition/Heading/Heading';
import * as L from 'shared/components/edition/List/List';
import { Paragraph } from 'shared/components/edition/Paragraph/Paragraph';

/* Applicable laws section of the privacy policy */
export function Laws() {
    return (
        <>
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
        </>
    );
}
