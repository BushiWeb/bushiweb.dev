export interface NavigationDrawer {
    isOpen?: boolean;
    setIsOpen: (a: boolean) => void | ((a: (b: boolean) => boolean) => void);
}
