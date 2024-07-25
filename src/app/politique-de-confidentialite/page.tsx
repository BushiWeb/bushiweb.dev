import { Paragraph } from '@/shared/components/edition/Paragraph/Paragraph';
import { PRIVACY_POLICY_DATA } from './PrivacyPolicy.data';
import { CollectedData } from './_content/CollectedData';
import { Consent } from './_content/Consent';
import { Contact } from './_content/Contact';
import { Goals } from './_content/Goals';
import { Juveniles } from './_content/Juveniles';
import { Laws } from './_content/Laws';
import { Updates } from './_content/Updates';
import { UserRights } from './_content/UserRights';
import { Section } from '@/shared/components/edition/Section/Section';

/**
 * Privacy policy page.
 */
const PrivacyPolicy = () => {
    return (
        <Section
            className="grow"
            heading="Politique de confidentialité"
            childSections={[
                <Goals key="goals" />,
                <UserRights key="user rights" />,
                <Consent key="consent" />,
                <CollectedData key="collected data" />,
                <Juveniles key="juveniles" />,
                <Laws key="laws" />,
                <Updates key="updates" />,
                <Contact key="contact" />,
            ]}
        >
            <Paragraph>
                <em>
                    Dernière mise à jour le {PRIVACY_POLICY_DATA.lastUpdated}
                </em>
            </Paragraph>
        </Section>
    );
};

export default PrivacyPolicy;
