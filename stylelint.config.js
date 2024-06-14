export default {
    extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
    plugins: [
        'stylelint-no-unresolved-module',
        'stylelint-plugin-defensive-css',
        'stylelint-plugin-logical-css',
        'stylelint-rem-over-px',
        'stylelint-use-nesting',
    ],
    reportNeedlessDisables: true,
    rules: {
        'declaration-no-important': true,
        'plugin/no-unresolved-module': true,
        'plugin/use-defensive-css': [
            true,
            {
                severity: 'warning',
                'accidental-hover': true,
                'background-repeat': true,
                'custom-propertiy-fallbacks': false,
                'flex-wrapping': false,
                'scroll-chaining': true,
                'scrollbar-gutter': true,
                'vendor-prefix-grouping': false,
            },
        ],
        'plugin/use-logical-properties-and-values': [
            true,
            { severity: 'warning' },
        ],
        'plugin/use-logical-units': [true, { severity: 'warning' }],
        'rem-over-px/rem-over-px': [
            true,
            { severity: 'warning', ignore: ['1px', '2px'], fontSize: 16 },
        ],
        'csstools/use-nesting': 'always',
    },
};
