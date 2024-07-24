import {
    DescriptionList,
    DescriptionListItem,
} from '@/shared/components/edition/DescriptionList/DescriptionList';
import { LEGAL_NOTICE_DATA } from '../LegalNotice.data';
import { Section } from '@/shared/components/edition/Section/Section';

/**
 * Copmpany sub-section of the edition section of the legal notice.
 */
export const Company = () => {
    return (
        <Section heading="Identification de l'entreprise">
            <DescriptionList>
                <DescriptionListItem
                    terms="Raison sociale"
                    descriptions={LEGAL_NOTICE_DATA.company.companyName}
                />
                <DescriptionListItem
                    terms="Nom commercial"
                    descriptions={LEGAL_NOTICE_DATA.company.businessName}
                />
                <DescriptionListItem
                    terms="Numéro SIREN"
                    descriptions={LEGAL_NOTICE_DATA.company.siren}
                />
                <DescriptionListItem
                    terms="RCS"
                    descriptions={LEGAL_NOTICE_DATA.company.rcs}
                />
                <DescriptionListItem
                    terms="Adresse"
                    descriptions={LEGAL_NOTICE_DATA.company.address}
                />
                <DescriptionListItem
                    terms="Numéro de TVA"
                    descriptions={LEGAL_NOTICE_DATA.company.vat}
                />
            </DescriptionList>
        </Section>
    );
};
