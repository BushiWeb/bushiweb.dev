import { Paragraph, Heading, Link } from 'shared/components/edition';
import data from '../LegalNotice.data';

/* Copyright section of the legal notice */
export default function Copyright() {
    return (
        <>
            <Heading level={2}>
                Propriété intellectuelle et contrefaçons
            </Heading>
            <Paragraph>
                <strong>{data.owner.fullName}</strong> est propriétaire des
                droits de propriété intellectuelle et détient les droits
                d&apos;usage de tous les éléments accessibles sur le site
                internet, notamment les textes, images, graphismes, logos,
                vidéos, architecture, icônes et sons.
            </Paragraph>
            <Paragraph>
                Toute reproduction, représentation, modification, publication,
                adaption de tout ou partie des éléments du site, quel que soit
                le moyen ou le procédé utilisé, est interdite, sauf autorisation
                préalable écrite de <strong>{data.owner.fullName}</strong>
            </Paragraph>
            <Paragraph>
                Toute exploitation non autorisée du site ou de l&apos;un des
                éléments qu&apos;il contient sera considérée comme constitutive
                d&apos;une contrefaçon et poursuivie conformément aux
                disposition des articles{' '}
                <Link href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032655082">
                    L.335-2 et suivants du Code de Propriété Intellectuelle
                </Link>
                .
            </Paragraph>
        </>
    );
}
