import { Link } from 'shared/components/edition/Link/Link';
import * as DL from 'shared/components/edition/DescriptionList/DescriptionList';
import { Heading } from 'shared/components/edition/Heading/Heading';
import { LEGAL_NOTICE_DATA } from '../LegalNotice.data';

/* Owner sub-section of the legal notice */
export function Owner() {
    return (
        <>
            <Heading level={3}>Propriétaire du site</Heading>
            <DL.DescriptionList>
                <DL.DescriptionListItem
                    terms="Identité"
                    descriptions={LEGAL_NOTICE_DATA.owner.fullName}
                />
                <DL.DescriptionListItem
                    terms="Adresse"
                    descriptions={LEGAL_NOTICE_DATA.owner.address}
                />
                <DL.DescriptionListItem
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
                <DL.DescriptionListItem
                    terms="Téléphone"
                    descriptions={
                        <address>
                            <Link href={`tel:${LEGAL_NOTICE_DATA.owner.phone}`}>
                                {LEGAL_NOTICE_DATA.owner.phone}
                            </Link>
                        </address>
                    }
                />
            </DL.DescriptionList>
        </>
    );
}
