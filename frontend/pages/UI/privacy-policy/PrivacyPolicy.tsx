import CollectedData from './sections/CollectedData';
import './PrivacyPolicy.css';
import data from './PrivacyPolicy.data';
import { Paragraph, Heading } from 'shared/components/edition';
import {
    Goals,
    UserRights,
    Consent,
    Juveniles,
    Laws,
    Updates,
    Contact,
} from './sections';

/* Privacy policy page component */
export default function PrivacyPolicy() {
    return (
        <div className="privacy-policy">
            <Heading>Politique de confidentialité</Heading>
            <Paragraph>
                <em>Dernière mise à jour le {data.lastUpdated}</em>
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
