import {
    WEBSITE_DATA,
    WebsiteInformations,
} from 'shared/config/website-information';

type DataID = string | { data: string; required: boolean };

interface CollectedData {
    data: DataID[];
    storageTime: string[];
    dataUsage: string[];
    consent: string[];
    noConsentConsequences: string[];
    dataAccess: string[];
    dataSecurity: string[];
}

interface Data {
    title: string;
    introduction?: string;
    collectedData?: CollectedData;
}

interface PrivacyPolicyData extends WebsiteInformations {
    lastUpdated: string;
    data: Data[];
}

export const PRIVACY_POLICY_DATA: PrivacyPolicyData = {
    lastUpdated: '01/07/2024',
    data: [
        {
            title: 'Données collectées automatiquement',
            introduction:
                'Aucune donnée personnelle n&apos;est collectée automatiquement lorsque vous visitez notre site.',
        },
        {
            title: 'Donnée recueillies via le formulaire de contact',
            introduction:
                'Le formulaire de contact est un outil permettant de nous envoyer un message.',
            collectedData: {
                data: [
                    'Nom et prénom',
                    'Email',
                    {
                        data: 'Numéro de téléphone',
                        required: false,
                    },
                ],
                storageTime: ['2 ans après le dernier contact'],
                dataUsage: [
                    'Prendre contact avec la personne concernée',
                    'Continuer les échanges avec la personne concernée',
                ],
                consent: [
                    "Case à cocher afin de valider l'envoi du formulaire, décochée par défaut",
                ],
                noConsentConsequences: [
                    "Le formulaire ne pourra être envoyé et traité, l'utilisateur ne pourra donc pas prendre contact avec nous via la page de contact.",
                ],
                dataAccess: [WEBSITE_DATA.owner.fullName],
                dataSecurity: [
                    "Stockage sur les serveurs de messagerie sécurisée d'IONOS",
                    'Copie locale conservée dans nos locaux en cas de perte des données présentes sur le serveur',
                    'Transfert des données via le protocole HTTPS sécurisé',
                ],
            },
        },
    ],
    ...WEBSITE_DATA,
};
