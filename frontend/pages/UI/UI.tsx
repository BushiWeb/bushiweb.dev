import Header from 'widgets/Header';
import './UI.css';
import Footer from 'widgets/Footer';
import { Outlet } from '@tanstack/react-router';

/* Global UI for the pages */
export default function UI() {
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
