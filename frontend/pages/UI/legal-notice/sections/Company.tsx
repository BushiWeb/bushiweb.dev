import { DescriptionList as DL, Heading } from 'shared/components/edition';
import data from '../LegalNotice.data';

/* Company sub-section of the legal notice */
export default function Company() {
    return (
        <>
            <Heading level={3}>Identification de l&apos;entreprise</Heading>
            <DL.DescriptionList>
                <DL.DescriptionListItem
                    terms="Raison sociale"
                    descriptions={data.company.companyName}
                />
                <DL.DescriptionListItem
                    terms="Nom commercial"
                    descriptions={data.company.businessName}
                />
                <DL.DescriptionListItem
                    terms="Numéro SIREN"
                    descriptions={data.company.siren}
                />
                <DL.DescriptionListItem
                    terms="RCS"
                    descriptions={data.company.rcs}
                />
                <DL.DescriptionListItem
                    terms="Adresse"
                    descriptions={data.company.address}
                />
                <DL.DescriptionListItem
                    terms="Numéro de TVA"
                    descriptions={data.company.vat}
                />
            </DL.DescriptionList>
        </>
    );
}
