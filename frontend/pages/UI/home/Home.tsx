import Background from './Background';
import './Home.css';

/* Home page */
export default function Home() {
    return (
        <div className="home">
            <div className="content">
                <h1 className="pattern-typography-display-m">
                    Votre site internet: votre idée, mon expertise
                </h1>
                <p className="pattern-typography-body-l">
                    Développeur web freelance, je vous accompagne dans
                    l&apos;installation de votre présence en ligne en
                    développant votre site web personnalisé, optimisé pour le
                    référencement et l&apos;accessibilité, et compatibles avec
                    tous les appareils.
                </p>
            </div>
            <Background />
        </div>
    );
}
