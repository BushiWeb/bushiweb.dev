import { Heading } from 'shared/components/edition/Heading/Heading';
import { Link } from 'shared/components/edition/Link/Link';
import * as L from 'shared/components/edition/List/List';
import { Paragraph } from 'shared/components/edition/Paragraph/Paragraph';
import { COOKIE_POLICY_DATA } from '../CookiePolicy.data';

/* Contact section of the cookie policy */
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
                        <Link href={`mailto:${COOKIE_POLICY_DATA.owner.email}`}>
                            {COOKIE_POLICY_DATA.owner.email}
                        </Link>
                        ;
                    </L.ListItem>
                    <L.ListItem>
                        téléphone:{' '}
                        <Link href={`tel:${COOKIE_POLICY_DATA.owner.phone}`}>
                            {COOKIE_POLICY_DATA.owner.phone}
                        </Link>
                        .
                    </L.ListItem>
                </L.List>
            </address>
        </>
    );
}
