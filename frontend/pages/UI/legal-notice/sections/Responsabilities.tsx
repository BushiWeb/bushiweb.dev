import { Paragraph, Heading } from 'shared/components/edition';
import data from '../LegalNotice.data';

/* Responsabilities section of the legal notice */
export default function Responsabilities() {
    return (
        <>
            <Heading level={2}>Limitations de responsabilité</Heading>
            <Paragraph>
                {data.owner.fullName} ne pourra être tenu pour responsable des
                dommages directs et indirects causés au matériel de
                l&apos;utilisateur, lors de l&apos;accès au site{' '}
                <em>https://bushiweb.dev</em>.
            </Paragraph>

            <Paragraph>
                {data.owner.fullName} décline toute responsabilité quant à
                l&apos;utilisation qui pourrait être faite des informations et
                contenus présents sur <em>https://bushiweb.dev</em>.
            </Paragraph>

            <Paragraph>
                {data.owner.fullName} s&apos;engage à sécuriser au mieux le site{' '}
                <em>https://bushiweb.dev</em>, cependant sa responsabilité ne
                pourra être mise en cause si des données indésirables sont
                importées et installées sur son site à son insu.
            </Paragraph>

            <Paragraph>
                Si des espaces interactifs (espace contact ou commentaires) sont
                à la disposition des utilisateurs. {data.owner.fullName} se
                réserve le droit de supprimer, sans mise en demeure préalable,
                tout contenu déposé dans cet espace qui contreviendrait à la
                législation applicable en France, en particulier aux
                dispositions relatives à la protection des données.
            </Paragraph>

            <Paragraph>
                Le cas échéant, {data.owner.fullName} se réserve également la
                possibilité de mettre en cause la responsabilité civile et/ou
                pénale de l&apos;utilisateur, notamment en cas de message à
                caractère raciste, injurieux, diffamant, ou pornographique, quel
                que soit le support utilisé (texte, photographie …).
            </Paragraph>
        </>
    );
}
