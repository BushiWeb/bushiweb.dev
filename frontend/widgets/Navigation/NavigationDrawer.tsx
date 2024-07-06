import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@tanstack/react-router';
import FocusTrap from 'focus-trap-react';
import { useContext, useEffect } from 'react';
import { NavigationContext } from './Navigation.context';
import './Navigation.css';
import { NavigationDrawer as NavigationDrawerProps } from './Navigation.props';

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
    function handleClick() {
        setIsOpen(false);
    }

    return (
        <FocusTrap focusTrapOptions={{ escapeDeactivates: false }}>
            <div className="navigation-drawer-trap">
                <div
                    className="navigation-drawer-backdrop"
                    onClick={handleClick}
                    data-testid="backdrop"
                ></div>
                <div className="navigation-drawer">
                    <nav className="navigation-drawer__nav">
                        <ul>
                            {navigationLinks.map(({ label, to }) => (
                                <li key={label}>
                                    <Link
                                        to={to}
                                        className="pattern-typography-label-l"
                                        activeProps={{
                                            className: 'current',
                                        }}
                                        onClick={handleClick}
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
