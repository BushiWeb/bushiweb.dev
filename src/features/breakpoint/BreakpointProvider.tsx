'use client';

import { useEffect, useState, createContext } from 'react';
import { getBreakpoint } from './Breakpoint.utils';

export const breakpointContext = createContext<number | null>(null);

/**
 * Adds the breakpoint context, containing a number corresponding to screen size ranges.
 */
export const BreakpointProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [breakpoint, setBreakpoint] = useState<number | null>(null);

    useEffect(() => {
        setBreakpoint(getBreakpoint());
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
};
