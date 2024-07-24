import {
    DescriptionList,
    DescriptionListItem,
} from '@/shared/components/edition/DescriptionList/DescriptionList';
import { LEGAL_NOTICE_DATA } from '../LegalNotice.data';
import { Section } from '@/shared/components/edition/Section/Section';
import { Link } from '@/shared/components/edition/Link/Link';

/**
 * Owner sub-section for the edition section of the legal notice.
 */
export const Owner = () => {
    return (
        <Section heading="Propriétaire du site">
            <DescriptionList>
                <DescriptionListItem
                    terms="Identité"
                    descriptions={LEGAL_NOTICE_DATA.owner.fullName}
                />
                <DescriptionListItem
                    terms="Adresse"
                    descriptions={LEGAL_NOTICE_DATA.owner.address}
                />
                <DescriptionListItem
                    terms="Email"
                    descriptions={
                        <address>
                            <Link
                                href={`mailto:${LEGAL_NOTICE_DATA.owner.email}`}
                            >
                                {LEGAL_NOTICE_DATA.owner.email}
                            </Link>
                        </address>
                    }
                />
                <DescriptionListItem
                    terms="Téléphone"
                    descriptions={
                        <address>
                            <Link href={`tel:${LEGAL_NOTICE_DATA.owner.phone}`}>
                                {LEGAL_NOTICE_DATA.owner.phone}
                            </Link>
                        </address>
                    }
                />
            </DescriptionList>
        </Section>
    );
};
