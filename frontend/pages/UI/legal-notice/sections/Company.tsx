import { LEGAL_NOTICE_DATA } from '../LegalNotice.data';
import * as DL from 'shared/components/edition/DescriptionList/DescriptionList';
import { Heading } from 'shared/components/edition/Heading/Heading';

/* Company sub-section of the legal notice */
export function Company() {
    return (
        <>
            <Heading level={3}>Identification de l&apos;entreprise</Heading>
            <DL.DescriptionList>
                <DL.DescriptionListItem
                    terms="Raison sociale"
                    descriptions={LEGAL_NOTICE_DATA.company.companyName}
                />
                <DL.DescriptionListItem
                    terms="Nom commercial"
                    descriptions={LEGAL_NOTICE_DATA.company.businessName}
                />
                <DL.DescriptionListItem
                    terms="Numéro SIREN"
                    descriptions={LEGAL_NOTICE_DATA.company.siren}
                />
                <DL.DescriptionListItem
                    terms="RCS"
                    descriptions={LEGAL_NOTICE_DATA.company.rcs}
                />
                <DL.DescriptionListItem
                    terms="Adresse"
                    descriptions={LEGAL_NOTICE_DATA.company.address}
                />
                <DL.DescriptionListItem
                    terms="Numéro de TVA"
                    descriptions={LEGAL_NOTICE_DATA.company.vat}
                />
            </DL.DescriptionList>
        </>
    );
}
