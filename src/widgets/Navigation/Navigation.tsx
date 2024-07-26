'use client';

import { useBreakpoint } from '@/features/breakpoint/useBreakpoints';
import { createContext } from 'react';
import { UrlObject } from 'url';
import { NavigationInline } from './NavigationInline';
import { NavigtationDrawer } from './NavigationDrawer';

interface NavigationLink {
    label: string;
    to: UrlObject | __next_route_internal_types__.RouteImpl<string>;
}

export const navigationLinks: NavigationLink[] = [
    {
        label: 'Accueil',
        to: '/',
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

export const navigationContext = createContext(navigationLinks);

/**
 * Main navigation.
 * Depending on the viewport width, displays the links in a list or within a collapsible drawer.
 */
export const Navigation = () => {
    const breakpoint = useBreakpoint();

    if (breakpoint < 3) {
        return (
            <navigationContext.Provider value={navigationLinks}>
                <NavigtationDrawer />
            </navigationContext.Provider>
        );
    }

    return (
        <navigationContext.Provider value={navigationLinks}>
            <NavigationInline />
        </navigationContext.Provider>
    );
};
