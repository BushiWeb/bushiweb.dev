import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import React, { MouseEvent } from 'react';
import { afterEach, vi } from 'vitest';

vi.mock('@tanstack/react-router', async (importOriginal) => {
    const mod = await importOriginal<typeof import('@tanstack/react-router')>();
    return {
        ...mod,
        // replace some exports
        Link: ({
            to,
            children,
            onClick,
        }: {
            to?: string;
            children: React.ReactNode;
            onClick: (a: MouseEvent) => void;
        }) => React.createElement('a', { href: to, onClick }, children),
        Outlet: () => React.createElement('div'),
    };
});

afterEach(() => {
    cleanup();
});
