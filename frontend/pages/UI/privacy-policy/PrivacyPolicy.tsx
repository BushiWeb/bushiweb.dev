import { Heading } from 'shared/components/edition/Heading/Heading';
import { Paragraph } from 'shared/components/edition/Paragraph/Paragraph';
import './PrivacyPolicy.css';
import { PRIVACY_POLICY_DATA } from './PrivacyPolicy.data';
import { CollectedData } from './sections/CollectedData';
import { Consent } from './sections/Consent';
import { Contact } from './sections/Contact';
import { Goals } from './sections/Goals';
import { Juveniles } from './sections/Juveniles';
import { Laws } from './sections/Laws';
import { Updates } from './sections/Updates';
import { UserRights } from './sections/UserRights';

/* Privacy policy page component */
export function PrivacyPolicy() {
    return (
        <div className="privacy-policy">
            <Heading>Politique de confidentialité</Heading>
            <Paragraph>
                <em>
                    Dernière mise à jour le {PRIVACY_POLICY_DATA.lastUpdated}
                </em>
            </Paragraph>

            <Goals />
            <UserRights />
            <Consent />
            <CollectedData />
            <Juveniles />
            <Laws />
            <Updates />
            <Contact />
        </div>
    );
}
