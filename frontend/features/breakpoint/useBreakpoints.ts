import { useContext } from 'react';
import { breakpointContext } from './Breakpoint.context';

/**
 * Returns an integer corresponding to the current breakpoint.
 */
export function useBreakpoint() {
    const breakpoint = useContext(breakpointContext);

    return breakpoint;
}
