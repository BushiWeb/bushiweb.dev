import './UI.css';
import { Header } from 'widgets/Header/Header';
import { Footer } from 'widgets/Footer/Footer';
import { Outlet } from '@tanstack/react-router';

/* Global UI for the pages */
export function UI() {
    return (
        <div className="ui">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
