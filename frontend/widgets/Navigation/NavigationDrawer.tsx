import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@tanstack/react-router';
import FocusTrap from 'focus-trap-react';
import { useContext, useEffect } from 'react';
import { NavigationContext } from './Navigation.context';
import './Navigation.css';
import { NavigationDrawer as NavigationDrawerProps } from './Navigation.props';
import { IconButton } from 'shared/components/IconButton/IconButton';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

/**
 *  Drawer version of the navigation.
 * Traps the focus.
 * Closed on escape, click on the backdrop or click on a link.
 */
export function NavigationDrawer({
    isOpen = false,
    setIsOpen,
}: NavigationDrawerProps) {
    const navigationLinks = useContext(NavigationContext);

    /* Listen for the Escape key press on the window to close the menu, and prevent scroll of the body */
    useEffect(() => {
        if (!isOpen) {
            return;
        }

        function handleEscape(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        }

        window.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, setIsOpen]);

    /* Don't render anything if the menu is closed */
    if (!isOpen) {
        return null;
    }

    /* Function to handle clicking on the backdrop or the links to close the menu */
    function handleCloseClick() {
        setIsOpen(false);
    }

    return (
        <FocusTrap focusTrapOptions={{ escapeDeactivates: false }}>
            <div className="navigation-drawer-trap">
                <div
                    className="navigation-drawer-backdrop"
                    onClick={handleCloseClick}
                    data-testid="backdrop"
                ></div>
                <div className="navigation-drawer">
                    <nav className="navigation-drawer__nav">
                        <IconButton
                            icon={faXmark}
                            title="Fermer la navigation"
                            onClick={handleCloseClick}
                            className="navigation-drawer__close-button"
                        />
                        <ul>
                            {navigationLinks.map(({ label, to }) => (
                                <li key={label}>
                                    <Link
                                        to={to}
                                        className="pattern-typography-label-l navigation-link"
                                        activeProps={{
                                            className: 'current',
                                        }}
                                        onClick={handleCloseClick}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="navigation-socials">
                        <a
                            href="https://www.linkedin.com/in/emeric-francisod"
                            className="navigation-socials-icon linkedin"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                title="Mon profil LinkedIn"
                            />
                        </a>
                        <a
                            href="https://github.com/BushiWeb"
                            className="navigation-socials-icon github"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                title="Ma page GitHub"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </FocusTrap>
    );
}
