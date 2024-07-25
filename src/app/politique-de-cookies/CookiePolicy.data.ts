import {
    WEBSITE_DATA,
    WebsiteInformations,
} from '@/shared/config/website-informations';

interface Cookie {
    name: string;
    usage: string[];
}

interface CookieType {
    title: string;
    introduction: string;
    necessary?: boolean;
    thirdParty?: boolean;
}

export interface NecessaryCookie extends CookieType {
    necessary: true;
    thirdParty?: false;
    cookies: ({
        lifetime: string;
    } & Cookie)[];
}

export interface OptionalCookie extends CookieType {
    necessary?: false;
    thirdParty?: false;
    cookies: ({
        lifetime: string;
    } & Cookie)[];
}

export interface ThirdPartyCookie extends CookieType {
    necessary?: false;
    thirdParty: true;
    cookies: ({
        privacyPolicyUrl: string;
    } & Cookie)[];
}

export type Cookies = NecessaryCookie | OptionalCookie | ThirdPartyCookie;

interface CookiePolicyData extends WebsiteInformations {
    lastUpdated: string;
    cookies: Cookies[];
}

export const COOKIE_POLICY_DATA: CookiePolicyData = {
    lastUpdated: '04/07/2024',
    cookies: [
        {
            title: 'Cookies nécessaires au site pour fonctionner',
            necessary: true,
            introduction:
                "Ces cookies sont nécessaires au bon fonctionnement du site. Il vous est possible de les bloquer en utilisant les paramètres de votre navigateur, mais votre expérience risque d'être dégradée.",
            cookies: [
                {
                    name: 'sys_id',
                    usage: [
                        "Permet d'identifier l'utilisateur sur le site internet",
                    ],
                    lifetime:
                        'Cookie de session, supprimé lors de la fermeture du navigateur',
                },
                {
                    name: 'consent',
                    usage: [
                        "Sauvegarde les préférences de l'tilisateur en matière de cookies",
                    ],
                    lifetime: '6 mois',
                },
            ],
        },
        {
            title: "Cookies de mesure d'audience",
            introduction:
                'Ces cookies sont optionels et ne sont pas déposés par défaut. Vous pouvez consentir à leur utilisation en modifiant les paramètres de gestion des cookies. En vous opposant au dépôt de ces cookies, votre visite ne sera pas prise en compte dans nos statistique, mais votre expérience ne sera pas impactée.',
            cookies: [
                {
                    lifetime: '1 an',
                    name: 'ip',
                    usage: ["Mesure de l'audience de notre site"],
                },
            ],
        },
        {
            title: 'Cookies destinés à améliorer votre expérience sur le site',
            thirdParty: true,
            introduction:
                'Ces cookies sont déposés par des tierces parties et sont optionnels. Par défaut, leur refus est supposé et ils ne seront pas utilisés. Vous pouvez consentir à leur utilisation en modifier les paramètres de gestion de cookies. Si vous vous opposez à leur dépôt, certaines fonctionnalités telles que les cartes interactives, ne seront pas disponibles.',
            cookies: [
                {
                    name: 'Google Maps',
                    privacyPolicyUrl: 'https://maps.google.com',
                    usage: ['Insérer des cartes interactives sur le site'],
                },
            ],
        },
    ],
    ...WEBSITE_DATA,
};
