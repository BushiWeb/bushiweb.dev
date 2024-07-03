import {
    DescriptionList as DL,
    Heading,
    Link,
} from 'shared/components/edition';
import data from '../LegalNotice.data';

/* Host sub-section of the legal notice */
export default function Host() {
    return (
        <>
            <Heading level={3}>Hébergeur</Heading>
            <DL.DescriptionList>
                <DL.DescriptionListItem
                    terms="Raison sociale"
                    descriptions={data.host.companyName}
                />
                <DL.DescriptionListItem
                    terms="Adresse"
                    descriptions={data.host.address}
                />
                <DL.DescriptionListItem
                    terms="Email"
                    descriptions={
                        <address>
                            <Link href={`mailto:${data.host.email}`}>
                                {data.host.email}
                            </Link>
                        </address>
                    }
                />
                <DL.DescriptionListItem
                    terms="Téléphone"
                    descriptions={
                        <address>
                            <Link href={`tel:${data.host.phone}`}>
                                {data.host.phone}
                            </Link>
                        </address>
                    }
                />
            </DL.DescriptionList>
        </>
    );
}
