import { useState } from 'react';
import { FAB } from 'shared/components/FAB/FAB.tsx';
import { NavigationContext, navigationLinks } from './Navigation.context.ts';
import './Navigation.css';
import { NavigationDrawer } from './NavigationDrawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

/* Page main navigation, displayed in the header on desktop and as a drawer on mobile */
export function Navigation() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <>
            <FAB onClick={() => setIsDrawerOpen((value) => !value)}>
                <FontAwesomeIcon
                    icon={faBars}
                    title="Accéder à la navigation"
                />
            </FAB>
            <NavigationContext.Provider value={navigationLinks}>
                <NavigationDrawer
                    isOpen={isDrawerOpen}
                    setIsOpen={setIsDrawerOpen}
                />
            </NavigationContext.Provider>
        </>
    );
}
