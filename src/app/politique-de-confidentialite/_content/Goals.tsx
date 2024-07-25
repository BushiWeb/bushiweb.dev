import { Paragraph } from '@/shared/components/edition/Paragraph/Paragraph';
import { Section } from '@/shared/components/edition/Section/Section';
import { List, ListItem } from '@/shared/components/edition/List/List';

/**
 * Goal section of the privacy policy page.
 */
export const Goals = () => {
    return (
        <Section heading="Objectif de cette politique de confidentialité">
            <Paragraph>
                Le but de cette politique de confidentialité est d&apos;informer
                les utilisateurs de notre site concernant:
            </Paragraph>
            <List>
                <ListItem>
                    les données personnelles que nous recueillons;
                </ListItem>
                <ListItem>l&apos;utilisation des données recueillies;</ListItem>
                <ListItem>
                    les personnes ayant accès aux données recueillies;
                </ListItem>
                <ListItem>les droits des utilisateurs du site.</ListItem>
            </List>
        </Section>
    );
};
