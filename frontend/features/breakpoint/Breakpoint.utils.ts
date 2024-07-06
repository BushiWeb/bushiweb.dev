import { BREAKPOINTS } from './Breakpoint.const';

export function getBreakpoint() {
    for (let i = BREAKPOINTS.length - 1; i >= 0; i--) {
        if (window.innerWidth > BREAKPOINTS[i]) {
            return i;
        }
    }

    return -1;
}
