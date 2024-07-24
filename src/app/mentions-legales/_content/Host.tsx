import {
    DescriptionList,
    DescriptionListItem,
} from '@/shared/components/edition/DescriptionList/DescriptionList';
import { LEGAL_NOTICE_DATA } from '../LegalNotice.data';
import { Section } from '@/shared/components/edition/Section/Section';
import { Link } from '@/shared/components/edition/Link/Link';

/**
 * Hos sub-section of the edition section of the legal notice.
 */
export const Host = () => {
    return (
        <Section heading="Hébergeur">
            <DescriptionList>
                <DescriptionListItem
                    terms="Raison sociale"
                    descriptions={LEGAL_NOTICE_DATA.host.companyName}
                />
                <DescriptionListItem
                    terms="Adresse"
                    descriptions={LEGAL_NOTICE_DATA.host.address}
                />
                <DescriptionListItem
                    terms="Email"
                    descriptions={
                        <address>
                            <Link
                                href={`mailto:${LEGAL_NOTICE_DATA.host.email}`}
                            >
                                {LEGAL_NOTICE_DATA.host.email}
                            </Link>
                        </address>
                    }
                />
                <DescriptionListItem
                    terms="Téléphone"
                    descriptions={
                        <address>
                            <Link href={`tel:${LEGAL_NOTICE_DATA.host.phone}`}>
                                {LEGAL_NOTICE_DATA.host.phone}
                            </Link>
                        </address>
                    }
                />
            </DescriptionList>
        </Section>
    );
};
