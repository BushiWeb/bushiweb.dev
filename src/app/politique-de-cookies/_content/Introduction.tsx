import { Paragraph } from '@/shared/components/edition/Paragraph/Paragraph';
import { Section } from '@/shared/components/edition/Section/Section';

/**
 * Introduction of the cookie policy page.
 */
export const Introduction = () => {
    return (
        <Section
            heading="A propos des cookies"
            childSections={[
                <Section
                    key="what is a cookie"
                    heading="Qu'est-ce qu'un cookie?"
                >
                    <Paragraph>
                        Un cookie est un petit fichier idéntifié par un nom et
                        ayant une durée de validité limitée, après laquelle il
                        est supprimé. Il peut contenir des informations
                        indispensables au bon fonctionnement du site comme votre
                        identifiant de connexion ou votre panier sur un site
                        marchand, ainsi que des données permettant la mesure
                        d&apos;audience ou l&apos;intégration de services tiers
                        comme les réseaux sociaux. Il peut être déposé sur votre
                        navigateur par le site que vous consultez, mais
                        également par les services tiers auxquel le site peut
                        faire appel.
                    </Paragraph>
                </Section>,

                <Section
                    heading="Quels sont les types de cookies?"
                    key="cookie types"
                >
                    <Paragraph>
                        Les cookies peuvent être de{' '}
                        <strong>première partie</strong> ou de{' '}
                        <strong>tierce partie</strong>. Les cookies de{' '}
                        <em>première partie</em> sont déposés et utilisés par le
                        site que vous consultez. Vous trouverez une liste de ces
                        cookies dans la présente politique. Les cookies de{' '}
                        <em>tierce partie</em> sont déposés par les services
                        tiers auxquel le site fait appel. Les informations
                        concernant ces cookies sont présentes dans les
                        politiques des services en question, mais vous trouverez
                        dans la présente politique la liste et l&apos;utilité
                        des services tiers utilisés et déposant des cookies.
                    </Paragraph>

                    <Paragraph>
                        Certains cookies sont <strong>permanents</strong>,
                        d&apos;autres sont des{' '}
                        <strong>cookies de session</strong>. Les{' '}
                        <em>cookies de session</em> sont supprimés lorsque vous
                        fermez votre navigateur, tandis que les{' '}
                        <em>cookies permanents</em> sont conservés jusqu&apos;à
                        leur date d&apos;expiration.
                    </Paragraph>
                </Section>,
            ]}
        >
            <Paragraph>
                Lors de votre visite sur notre site internet, des cookies sont
                déposés sur votre appareil. Cette politique de cookies vous
                présente les cookies utilisés sur notre site et commnent faire
                valoir vos droits, ainsi que ce que sont les cookies et pourquoi
                ils sont utiles.
            </Paragraph>
        </Section>
    );
};
