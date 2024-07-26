import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SocialLink } from './SocialLink';

/**
 * Components printing the social links.
 */
export const SocialLinks = () => {
    return (
        <div className="flex flex-row flex-nowrap items-center gap-300 p-150">
            <SocialLink
                icon={faLinkedin}
                title="Mon profil LinkedIn"
                link="https://www.linkedin.com/in/emeric-francisod"
                className="hover:text-linkedin"
            />
            <SocialLink
                icon={faGithub}
                title="Ma page GitHub"
                link="https://github.com/BushiWeb"
                className="hover:text-github-white"
            />
        </div>
    );
};
