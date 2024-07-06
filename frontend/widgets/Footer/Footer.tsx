import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@tanstack/react-router';
import { Logo } from 'shared/components/Logo/Logo';
import './Footer.css';

/* Global UI Footer */
export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <Link to="/">
                    <Logo className="logo" height={40} />
                </Link>
                <div className="footer-icons">
                    <a
                        href="https://www.linkedin.com/in/emeric-francisod"
                        className="linkedin"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            title="Mon profil LinkedIn"
                        />
                    </a>
                    <a href="https://github.com/BushiWeb" className="github">
                        <FontAwesomeIcon
                            icon={faGithub}
                            title="Ma page GitHub"
                        />
                    </a>
                </div>
            </div>
            <nav className="pattern-typography-body-s footer-navigation">
                <ul>
                    <li>
                        <Link to="/mentions-legales">Mentions légales</Link>
                    </li>
                    <li>
                        <Link to="/politique-de-confidentialite">
                            Politique de confidentialité
                        </Link>
                    </li>
                    <li>
                        <Link to="/politique-de-cookies">
                            Politique de cookies
                        </Link>
                    </li>
                    <li>
                        <a href="/sitemap.xml">Plan du site</a>
                    </li>
                </ul>
                <p>Copyright © 2024 Emeric Francisod, tous droits réservés</p>
            </nav>
        </footer>
    );
}
