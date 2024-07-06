import { Link } from 'shared/components/edition/Link/Link';
import { Heading } from 'shared/components/edition/Heading/Heading';
import * as L from 'shared/components/edition/List/List';
import { Paragraph } from 'shared/components/edition/Paragraph/Paragraph';
import { PRIVACY_POLICY_DATA } from '../PrivacyPolicy.data';

/* Contact section of the privacy policy */
export function Contact() {
    return (
        <>
            <Heading level={2}>Contact</Heading>
            <Paragraph>
                Si vous avez des questions à nous posez, n&apos;hésitez pas à
                communiquer avec nous en utilisant les moyens suivants:
            </Paragraph>
            <address>
                <L.List>
                    <L.ListItem>
                        email:{' '}
                        <Link
                            href={`mailto:${PRIVACY_POLICY_DATA.owner.email}`}
                        >
                            {PRIVACY_POLICY_DATA.owner.email}
                        </Link>
                        ;
                    </L.ListItem>
                    <L.ListItem>
                        téléphone:{' '}
                        <Link href={`tel:${PRIVACY_POLICY_DATA.owner.phone}`}>
                            {PRIVACY_POLICY_DATA.owner.phone}
                        </Link>
                        .
                    </L.ListItem>
                </L.List>
            </address>
        </>
    );
}
