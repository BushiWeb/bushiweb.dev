import { Paragraph, Heading, List as L, Link } from 'shared/components/edition';
import data from '../PrivacyPolicy.data';

/* Contact section of the privacy policy */
export default function Contact() {
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
                        <Link href={`mailto:${data.owner.email}`}>
                            {data.owner.email}
                        </Link>
                        ;
                    </L.ListItem>
                    <L.ListItem>
                        téléphone:{' '}
                        <Link href={`tel:${data.owner.phone}`}>
                            {data.owner.phone}
                        </Link>
                        .
                    </L.ListItem>
                </L.List>
            </address>
        </>
    );
}
