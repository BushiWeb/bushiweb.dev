import { Paragraph } from '@/shared/components/edition/Paragraph/Paragraph';
import { Section } from '@/shared/components/edition/Section/Section';
import { LEGAL_NOTICE_DATA } from '../LegalNotice.data';

/**
 * Responsabilities section of the legal notice.
 */
export const Responsabilities = () => {
    return (
        <Section heading="Limitations de responsabilité">
            <Paragraph>
                {LEGAL_NOTICE_DATA.owner.fullName} ne pourra être tenu pour
                responsable des dommages directs et indirects causés au matériel
                de l&apos;utilisateur, lors de l&apos;accès au site{' '}
                <em>https://bushiweb.dev</em>.
            </Paragraph>

            <Paragraph>
                {LEGAL_NOTICE_DATA.owner.fullName} décline toute responsabilité
                quant à l&apos;utilisation qui pourrait être faite des
                informations et contenus présents sur{' '}
                <em>https://bushiweb.dev</em>.
            </Paragraph>

            <Paragraph>
                {LEGAL_NOTICE_DATA.owner.fullName} s&apos;engage à sécuriser au
                mieux le site <em>https://bushiweb.dev</em>, cependant sa
                responsabilité ne pourra être mise en cause si des données
                indésirables sont importées et installées sur son site à son
                insu.
            </Paragraph>

            <Paragraph>
                Si des espaces interactifs (espace contact ou commentaires) sont
                à la disposition des utilisateurs,{' '}
                {LEGAL_NOTICE_DATA.owner.fullName} se réserve le droit de
                supprimer, sans mise en demeure préalable, tout contenu déposé
                dans cet espace qui contreviendrait à la législation applicable
                en France, en particulier aux dispositions relatives à la
                protection des données.
            </Paragraph>

            <Paragraph>
                Le cas échéant, {LEGAL_NOTICE_DATA.owner.fullName} se réserve
                également la possibilité de mettre en cause la responsabilité
                civile et/ou pénale de l&apos;utilisateur, notamment en cas de
                message à caractère raciste, injurieux, diffamant, ou
                pornographique, quel que soit le support utilisé (texte,
                photographie …).
            </Paragraph>
        </Section>
    );
};
