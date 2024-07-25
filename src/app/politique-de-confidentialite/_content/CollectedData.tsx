import { Paragraph } from '@/shared/components/edition/Paragraph/Paragraph';
import { Section } from '@/shared/components/edition/Section/Section';
import { List, ListItem } from '@/shared/components/edition/List/List';
import {
    DescriptionList,
    DescriptionListItem,
} from '@/shared/components/edition/DescriptionList/DescriptionList';
import { PRIVACY_POLICY_DATA } from '../PrivacyPolicy.data';

/**
 * Collected data section of the privacy policy page.
 */
export const CollectedData = () => {
    return (
        <Section
            heading="Les données personnelles que nous collectons"
            childSections={PRIVACY_POLICY_DATA.data.map((value, index) => (
                <Section key={`${index}-${value.title}`} heading={value.title}>
                    {value.introduction && (
                        <Paragraph>{value.introduction}</Paragraph>
                    )}
                    {value.collectedData && (
                        <DescriptionList>
                            <DescriptionListItem
                                terms="Données recueillies"
                                descriptions={
                                    <ul>
                                        {value.collectedData.data.map(
                                            (data) => (
                                                <li
                                                    key={
                                                        (
                                                            typeof data ===
                                                            'string'
                                                        ) ?
                                                            data
                                                        :   data.data
                                                    }
                                                >
                                                    {typeof data === 'string' ?
                                                        data
                                                    :   `${data.data}(${!data.required ? ' (facultatif)' : ''})`
                                                    }
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                }
                            />
                            <DescriptionListItem
                                terms="Durée de stockage"
                                descriptions={value.collectedData.storageTime}
                            />
                            <DescriptionListItem
                                terms="Utilisation des données"
                                descriptions={value.collectedData.dataUsage}
                            />
                            <DescriptionListItem
                                terms="Consentement"
                                descriptions={value.collectedData.consent}
                            />
                            <DescriptionListItem
                                terms="Personnes ayant accès aux données"
                                descriptions={value.collectedData.dataAccess}
                            />
                            <DescriptionListItem
                                terms="Protection des données reccueillies"
                                descriptions={value.collectedData.dataSecurity}
                            />
                        </DescriptionList>
                    )}
                </Section>
            ))}
        >
            <Paragraph>
                Certaines données sont collectées suivant les actions que vous
                effectuez sur notre site.
            </Paragraph>

            <Paragraph>
                Nous nous engageons à ne pas vendre ou partager vos données avec
                des tiers non précisés, sauf dans les cas suivants:
            </Paragraph>

            <List>
                <ListItem>si la loi l&apos;exige;</ListItem>
                <ListItem>
                    si elle est requise pour toute procédure judiciaire;
                </ListItem>
                <ListItem>pour prouver ou protéger nos droits légaux;</ListItem>
                <ListItem>
                    à des acheteurs de cette entreprise dans le cas où nous
                    cherchons à vendre l&apos;entreprise.
                </ListItem>
            </List>

            <Paragraph>
                Alors que nous prenons toutes les précautions raisonnables pour
                nous assurer que nos données d&apos;utilisateur sont sécurisées
                et que les utilisateurs sont protégés, il reste toujours du
                risque de préjudice. L&apos;internet en sa totalité peut être,
                parfois, peu sûr. Nous sommes donc incapable de garantir la
                sécurité des données des utilisateurs au-delà de ce qui est
                raisonnablement pratique.
            </Paragraph>
        </Section>
    );
};
