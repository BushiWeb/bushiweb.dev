import Logo from 'shared/components/Logo';
import './Header.css';
import { Link } from '@tanstack/react-router';
import Navigation from 'widgets/Navigation';

/* Global UI header */
export default function Header() {
    return (
        <header className="header">
            <Link to="/">
                <Logo height={48} />
            </Link>
            <Navigation />
        </header>
    );
}
