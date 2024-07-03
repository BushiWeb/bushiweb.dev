import { Paragraph, Heading, List as L } from 'shared/components/edition';

/* Goal section of the privacy policy */
export default function Goals() {
    return (
        <>
            <Heading level={2}>
                Objectif de cette politique de confidentialité
            </Heading>
            <Paragraph>
                Le but de cette politique de confidentialité est d&apos;informer
                les utilisateurs de notre site concernant:
            </Paragraph>
            <L.List>
                <L.ListItem>
                    les données personnelles que nous recueillons;
                </L.ListItem>
                <L.ListItem>
                    l&apos;utilisation des données recueillies;
                </L.ListItem>
                <L.ListItem>
                    les personnes ayant accès aux données recueillies;
                </L.ListItem>
                <L.ListItem>les droits des utilisateurs du site.</L.ListItem>
            </L.List>
        </>
    );
}
