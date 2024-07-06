import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from 'widgets/TanStackRouterDevtools';

export const Route = createRootRoute({
    component: () => (
        <>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
});
