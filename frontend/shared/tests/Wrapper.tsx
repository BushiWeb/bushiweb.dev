/**
 * Wrapper for all renders during tests, allows to add all providers and routers.
 */
const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
);

export default Wrapper;
