export const BREAKPOINTS = [0, 640, 1024, 1200];

export const getBreakpoint = () => {
    for (let i = BREAKPOINTS.length - 1; i >= 0; i--) {
        if (window.innerWidth > BREAKPOINTS[i]) {
            return i;
        }
    }

    return -1;
};
