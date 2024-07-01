import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Suspense } from 'react';
import TanStackRouterDevtools from 'widgets/TanStackRouterDevtools';

export const Route = createRootRoute({
    component: () => (
        <>
            <Outlet />
            <Suspense>
                <TanStackRouterDevtools />
            </Suspense>
        </>
    ),
});
