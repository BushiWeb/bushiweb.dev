import eslint from '@eslint/js';
import react from 'eslint-plugin-react';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: [
            'logs',
            '*.log',
            'npm-debug.log*',
            'yarn-debug.log*',
            'yarn-error.log*',
            'pnpm-debug.log*',
            'lerna-debug.log*',
            'node_modules/',
            'dist',
            'dist-ssr',
            '*.local',
            '.vscode/*',
            '!.vscode/extensions.json',
            '.idea',
            '.DS_Store',
            '*.suo',
            '*.ntvs*',
            '*.njsproj',
            '*.sln',
            '*.sw?',
            '*.code-workspace',
        ],
    },
    eslint.configs.recommended,
    {
        linterOptions: {
            reportUnusedDisableDirectives: 'warn',
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            reactRefresh,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...reactRecommended.rules,
            ...reactJsxRuntime.rules,
            ...reactHooks.configs.recommended.rules,
            'reactRefresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'no-duplicate-imports': 'error',
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            ...tseslint.configs.recommendedTypeChecked,
            ...tseslint.configs.stylisticTypeChecked,
        ],
        languageOptions: {
            parserOptions: {
                project: ['tsconfig.json', 'tsconfig.node.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
);
