import plugin from 'tailwindcss/plugin';

export default plugin(function ({ addUtilities, theme }) {
    addUtilities({
        '.focus-ring': {
            'outline-width': theme('outlineWidth.2'),
            'outline-color': theme('colors.white'),
            'outline-style': 'solid',
            'outline-offset': theme('outlineOffset.2'),
        },
    });
});
