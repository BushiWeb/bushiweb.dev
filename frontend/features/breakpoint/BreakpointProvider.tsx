import { useEffect, useState } from 'react';
import { getBreakpoint } from './Breakpoint.utils';
import { breakpointContext } from './Breakpoint.context';

/**
 * Adds the breakpoint context, containing a number corresponding to screen size ranges.
 */
export function BreakpointProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [breakpoint, setBreakpoint] = useState(getBreakpoint());

    useEffect(() => {
        const eventListener = () => {
            setBreakpoint(getBreakpoint());
        };

        window.addEventListener('resize', eventListener);

        return () => {
            window.removeEventListener('resize', eventListener);
        };
    }, []);

    return (
        <breakpointContext.Provider value={breakpoint}>
            {children}
        </breakpointContext.Provider>
    );
}
