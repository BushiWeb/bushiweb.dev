import { createContext } from 'react';

export const navigationLinks = [
    {
        label: 'Accueil',
        to: '/',
    },
    {
        label: 'Me contacter',
        to: '/contact',
    },
    { label: 'Mentions légales', to: '/mentions-legales' },
    {
        label: 'Politique de confidentialité',
        to: '/politique-de-confidentialite',
    },
    {
        label: 'Politique de cookies',
        to: '/politique-de-cookies',
    },
];

export const NavigationContext =
    createContext<typeof navigationLinks>(navigationLinks);
