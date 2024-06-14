import postcssPresetEnv from 'postcss-preset-env';

export default {
    plugins: [
        postcssPresetEnv({
            stage: 2,
            minimumVendorImplementations: 0,
            browsers: '> 0.5%, last 5 versions, Firefox ESR, not dead',
        }),
    ],
};
