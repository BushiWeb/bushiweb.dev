import { BreakpointProvider } from '@/features/breakpoint/BreakpointProvider';

/**
 * Wraps all tests render, in order to add providers.
 * @prop {React.ReactNode} children - Content to render.
 */
export const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <BreakpointProvider>{children}</BreakpointProvider>
);
