/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// vitest automatically sets NODE_ENV to 'test' when running tests
const isTest = process.env.NODE_ENV === 'test';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [!isTest && TanStackRouterVite(), react(), tsconfigPaths()],
    test: {
        environment: 'jsdom',
        setupFiles: ['./vitest-setup.ts'],
    },
});
