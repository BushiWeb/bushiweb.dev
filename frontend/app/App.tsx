import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from '../routeTree.gen';
import { BreakpointProvider } from 'features/breakpoint/BreakpointProvider';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

export function App() {
    return (
        <BreakpointProvider>
            <RouterProvider router={router} />;
        </BreakpointProvider>
    );
}
