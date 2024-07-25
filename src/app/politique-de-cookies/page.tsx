import { Paragraph } from '@/shared/components/edition/Paragraph/Paragraph';
import { COOKIE_POLICY_DATA } from './CookiePolicy.data';
import { Consent } from './_content/Consent';
import { Contact } from './_content/Contact';
import { Cookies } from './_content/Cookies';
import { Introduction } from './_content/Introduction';
import { Updates } from './_content/Updates';
import { Section } from '@/shared/components/edition/Section/Section';

/**
 * Cookie policy page.
 */
const CookiePolicy = () => {
    return (
        <Section
            className="grow"
            heading="Politique de cookies"
            childSections={[
                <Introduction key="introduction" />,
                <Consent key="consent" />,
                <Cookies key="cookies" />,
                <Updates key="updates" />,
                <Contact key="contact" />,
            ]}
        >
            <Paragraph>
                <em>
                    Dernière mise à jour le {COOKIE_POLICY_DATA.lastUpdated}
                </em>
            </Paragraph>
        </Section>
    );
};

export default CookiePolicy;
