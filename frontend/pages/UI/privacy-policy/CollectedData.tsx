import data from './PrivacyPolicy.data';
import {
    Paragraph,
    Heading,
    DescriptionList as DL,
    List as L,
} from 'shared/components/edition';
import React from 'react';

/* Collected data section of the privacy policy */
export default function CollectedData() {
    return (
        <>
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
            <L.List>
                <L.ListItem>si la loi l&apos;exige;</L.ListItem>
                <L.ListItem>
                    si elle est requise pour toute procédure judiciaire;
                </L.ListItem>
                <L.ListItem>
                    pour prouver ou protéger nos droits légaux;
                </L.ListItem>
                <L.ListItem>
                    à des acheteurs de cette entreprise dans le cas où nous
                    cherchons à vendre l&apos;entreprise.
                </L.ListItem>
            </L.List>
            <Paragraph>
                Alors que nous prenons toutes les précautions raisonnables pour
                nous assurer que nos données d&apos;utilisateur sont sécurisées
                et que les utilisateurs sont protégés, il reste toujours du
                risque de préjudice. L&apos;internet en sa totalité peut être,
                parfois, peu sûr. Nous sommes donc incapable de garantir la
                sécurité des données des utilisateurs au-delà de ce qui est
                raisonnablement pratique.
            </Paragraph>

            {data.data.map((value, index) => (
                <React.Fragment key={`${index}-${value.title}`}>
                    <Heading level={3}>{value.title}</Heading>
                    {value.introduction && (
                        <Paragraph>{value.introduction}</Paragraph>
                    )}
                    {value.collectedData && (
                        <DL.DescriptionList>
                            <DL.DescriptionListItem
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
                            <DL.DescriptionListItem
                                terms="Durée de stockage"
                                descriptions={value.collectedData.storageTime}
                            />
                            <DL.DescriptionListItem
                                terms="Utilisation des données"
                                descriptions={value.collectedData.dataUsage}
                            />
                            <DL.DescriptionListItem
                                terms="Consentement"
                                descriptions={value.collectedData.consent}
                            />
                            <DL.DescriptionListItem
                                terms="Personnes ayant accès aux données"
                                descriptions={value.collectedData.dataAccess}
                            />
                            <DL.DescriptionListItem
                                terms="Protection des données reccueillies"
                                descriptions={value.collectedData.dataSecurity}
                            />
                        </DL.DescriptionList>
                    )}
                </React.Fragment>
            ))}
        </>
    );
}
