import { BreakpointProvider } from 'features/breakpoint/BreakpointProvider';

/**
 * Wrapper for all renders during tests, allows to add all providers and routers.
 */
export const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <BreakpointProvider>{children}</BreakpointProvider>
);
