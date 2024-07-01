import Header from 'widgets/Header';
import './UI.css';
// import Home from './home';
import Footer from 'widgets/Footer';
import LegalNotice from './legal-notice';

/* Global UI for the pages */
export default function UI() {
    return (
        <div className="ui">
            <Header />
            <main>
                {/* <Home /> */}
                <LegalNotice />
            </main>
            <Footer />
        </div>
    );
}
