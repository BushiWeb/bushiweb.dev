import eslint from '@eslint/js';
import reactPlugin from 'eslint-plugin-react/index.js';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import nextPlugin from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
    {
        ignores: [
            'node_modules',
            '.pnp',
            '.pnp.js',
            '.yarn/install-state.gz',
            'coverage',
            '.next/',
            'out/',
            'build',
            'dist',
            'dist-ssr',
            '.DS_Store',
            '*.pem',
            '.env*.local',
            '*.local',
            '.env*',
            '*.tsbuildinfo',
            'next-env.d.ts',
            'logs',
            '*.log',
            'npm-debug.log*',
            'yarn-debug.log*',
            'yarn-error.log*',
            'pnpm-debug.log*',
            'lerna-debug.log*',
            '.vscode/*',
            '!.vscode/extensions.json',
            '.idea',
            '*.suo',
            '*.ntvs*',
            '*.njsproj',
            '*.sln',
            '*.sw?',
            '*.code-workspace',
            '.eslintcache',
            '.prettier-cache',
            '.stylelintcache',
        ],
    },
    eslint.configs.recommended,
    {
        linterOptions: {
            reportUnusedDisableDirectives: 'warn',
        },
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'jsx-a11y': jsxA11yPlugin,
            '@next/next': nextPlugin,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactPlugin.configs['jsx-runtime'].rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...jsxA11yPlugin.configs.recommended.rules,
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            'no-duplicate-imports': 'error',
        },
    },
    {
        files: ['src/**/*.tsx', 'src/**/*.ts', '*.ts', 'tailwind-theme/*.ts'],
        extends: [
            ...tseslint.configs.recommendedTypeChecked,
            ...tseslint.configs.stylisticTypeChecked,
        ],
        languageOptions: {
            parserOptions: {
                project: ['tsconfig.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    prettierConfig,
);
