import { useState } from 'react';
import { NavigationContext, navigationLinks } from './Navigation.context.ts';
import './Navigation.css';
import { NavigationDrawer } from './NavigationDrawer';

/* Page main navigation, displayed in the header on desktop and as a drawer on mobile */
export function Navigation() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <>
            <button onClick={() => setIsDrawerOpen((value) => !value)}>
                Ouvrir le menu
            </button>
            <NavigationContext.Provider value={navigationLinks}>
                <NavigationDrawer
                    isOpen={isDrawerOpen}
                    setIsOpen={setIsDrawerOpen}
                />
            </NavigationContext.Provider>
        </>
    );
}
