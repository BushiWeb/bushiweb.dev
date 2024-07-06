import * as DL from 'shared/components/edition/DescriptionList/DescriptionList';
import { Heading } from 'shared/components/edition/Heading/Heading';
import { Link } from 'shared/components/edition/Link/Link';
import { LEGAL_NOTICE_DATA } from '../LegalNotice.data';

/* Host sub-section of the legal notice */
export function Host() {
    return (
        <>
            <Heading level={3}>Hébergeur</Heading>
            <DL.DescriptionList>
                <DL.DescriptionListItem
                    terms="Raison sociale"
                    descriptions={LEGAL_NOTICE_DATA.host.companyName}
                />
                <DL.DescriptionListItem
                    terms="Adresse"
                    descriptions={LEGAL_NOTICE_DATA.host.address}
                />
                <DL.DescriptionListItem
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
                <DL.DescriptionListItem
                    terms="Téléphone"
                    descriptions={
                        <address>
                            <Link href={`tel:${LEGAL_NOTICE_DATA.host.phone}`}>
                                {LEGAL_NOTICE_DATA.host.phone}
                            </Link>
                        </address>
                    }
                />
            </DL.DescriptionList>
        </>
    );
}
