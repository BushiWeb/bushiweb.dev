export const changeViewportWidth = (w: number) => {
    window.innerWidth = w;
    window.dispatchEvent(new Event('resize'));
};
