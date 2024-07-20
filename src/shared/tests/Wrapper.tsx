/**
 * Wraps all tests render, in order to add providers.
 * @prop {React.ReactNode} children - Content to render.
 */
export const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};
