import {
    Noto_Sans,
    JetBrains_Mono,
    IBM_Plex_Serif,
    Kaisei_HarunoUmi,
} from 'next/font/google';

export const primary = Noto_Sans({
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
    variable: '--font-primary',
});

export const secondary = IBM_Plex_Serif({
    subsets: ['latin', 'latin-ext'],
    weight: ['400', '700'],
    display: 'swap',
    variable: '--font-secondary',
});

export const mono = JetBrains_Mono({
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
    variable: '--font-mono',
});

export const display = Kaisei_HarunoUmi({
    subsets: ['latin', 'latin-ext'],
    weight: ['400', '700'],
    display: 'swap',
    variable: '--font-display',
});
