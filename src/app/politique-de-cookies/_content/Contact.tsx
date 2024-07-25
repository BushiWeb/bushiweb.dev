import { Link } from '@/shared/components/edition/Link/Link';
import { Paragraph } from '@/shared/components/edition/Paragraph/Paragraph';
import { Section } from '@/shared/components/edition/Section/Section';
import { List, ListItem } from '@/shared/components/edition/List/List';
import { COOKIE_POLICY_DATA } from '../CookiePolicy.data';

/**
 * Contact section of the cookie policy page.
 */
export const Contact = () => {
    return (
        <Section heading="Contact">
            <Paragraph>
                Si vous avez des questions à nous posez, n&apos;hésitez pas à
                communiquer avec nous en utilisant les moyens suivants:
            </Paragraph>
            <address>
                <List>
                    <ListItem>
                        email:{' '}
                        <Link href={`mailto:${COOKIE_POLICY_DATA.owner.email}`}>
                            {COOKIE_POLICY_DATA.owner.email}
                        </Link>
                        ;
                    </ListItem>
                    <ListItem>
                        téléphone:{' '}
                        <Link href={`tel:${COOKIE_POLICY_DATA.owner.phone}`}>
                            {COOKIE_POLICY_DATA.owner.phone}
                        </Link>
                        .
                    </ListItem>
                </List>
            </address>
        </Section>
    );
};
