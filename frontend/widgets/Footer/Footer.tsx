import Logo from 'shared/components/Logo';
import './Footer.css';
import { Link } from '@tanstack/react-router';

/* Global UI Footer */
export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <Link to="/">
                    <Logo className="logo" height={40} />
                </Link>
            </div>
            <nav className="pattern-typography-body-s">
                <ul>
                    <li>
                        <Link to="/mentions-legales">Mentions légales</Link>
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
