import { Paragraph } from '@/shared/components/edition/Paragraph/Paragraph';
import { PRIVACY_POLICY_DATA } from './PrivacyPolicy.data';
import { CollectedData } from './sections/CollectedData';
import { Consent } from './sections/Consent';
import { Contact } from './sections/Contact';
import { Goals } from './sections/Goals';
import { Juveniles } from './sections/Juveniles';
import { Laws } from './sections/Laws';
import { Updates } from './sections/Updates';
import { UserRights } from './sections/UserRights';
import { Section } from '@/shared/components/edition/Section/Section';

/**
 * Privacy policy page.
 */
const PrivacyPolicy = () => {
    return (
        <Section
            className="grow bg-surface-background text-surface-on"
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
