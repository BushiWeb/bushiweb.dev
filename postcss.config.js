/** @type {import('postcss-load-config').Config} */

export default {
    plugins: {
        tailwindcss: {},
        'postcss-preset-env': {
            stage: 2,
            minimumVendorImplementations: 0,
            browsers:
                '> 0.5%, last 5 versions, Firefox ESR, not dead, not op_mini all',
        },
        cssnano: {},
    },
};
