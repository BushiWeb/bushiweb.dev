import Header from 'widgets/Header';
import './UI.css';
import Home from './home';
import Footer from 'widgets/Footer';

/* Global UI for the pages */
export default function UI() {
    return (
        <div className="ui">
            <Header />
            <main>
                <Home />
            </main>
            <Footer />
        </div>
    );
}
