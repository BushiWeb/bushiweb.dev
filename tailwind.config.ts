import type { Config } from 'tailwindcss';
import formsPlugin from '@tailwindcss/forms';
import containerQueriesPlugin from '@tailwindcss/container-queries';
import reactAriaPlugin from 'tailwindcss-react-aria-components';
import ringPlugin from './tailwind-theme/ring-plugin';
import baseColors from './tailwind-theme/base-colors';
import semanticColors from './tailwind-theme/semantic-colors';
import specialColors from './tailwind-theme/special-colors';
import spacing from './tailwind-theme/spacing';
import screens from './tailwind-theme/screens';
import borderRadius from './tailwind-theme/borderRadius';
import borderWidth from './tailwind-theme/borderWidth';
import fontSize from './tailwind-theme/fontSize';
import zIndex from './tailwind-theme/z-index';
import fontFamily from './tailwind-theme/fontFamily';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        screens,
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            ...baseColors,
            ...semanticColors,
            ...specialColors,
        },
        spacing,
        borderRadius,
        borderWidth,
        fontFamily,
        fontSize,
        zIndex,
    },
    plugins: [formsPlugin, containerQueriesPlugin, reactAriaPlugin, ringPlugin],
};
export default config;
