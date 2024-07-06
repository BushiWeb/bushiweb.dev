import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@tanstack/react-router';
import { useContext } from 'react';
import { NavigationContext } from './Navigation.context';
import './Navigation.css';

/**
 * Inline navigation, always visible
 */
export function NavigationInline() {
    const navigationLinks = useContext(NavigationContext);

    return (
        <div className="navigation-inline-container">
            <nav className="navigation-inline">
                <ul>
                    {navigationLinks.map(({ label, to }) => (
                        <li key={label}>
                            <Link
                                to={to}
                                className="pattern-typography-label-l navigation-link"
                                activeProps={{
                                    className: 'current',
                                }}
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
                    <FontAwesomeIcon icon={faGithub} title="Ma page GitHub" />
                </a>
            </div>
        </div>
    );
}
