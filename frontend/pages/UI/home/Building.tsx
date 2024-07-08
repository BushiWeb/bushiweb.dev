import { createPortal } from 'react-dom';
import './Home.css';
import { Logo } from 'shared/components/Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from '@tanstack/react-router';

/* Building page cover */
export function Building() {
    return createPortal(
        <div className="building">
            <Logo alt="BushiWeb" height={64} />
            <h1 className="pattern-typography-display-m">
                <span>BushiWeb,</span> développeur web freelance
            </h1>
            <p className="message pattern-typography-title-s">
                <em>Site actuellement en construction.</em>
            </p>
            <p className="contact pattern-typography-body-l">
                Pour demander un devis ou pour tout renseignement, vous pouvez
                m&apos;envoyer un mail à{' '}
                <a href="mailto:epf@bushiweb.dev">epf@bushiweb.dev</a>.
            </p>
            <div className="building-icons">
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
                    <FontAwesomeIcon icon={faGithub} title="Ma page GitHub" />
                </a>
            </div>
            <p className="pattern-typography-body-s">
                <Link to="/mentions-legales">Mentions légales</Link>
            </p>
        </div>,
        document.body,
    );
}
