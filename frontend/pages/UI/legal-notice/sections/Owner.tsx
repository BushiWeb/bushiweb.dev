import {
    DescriptionList as DL,
    Heading,
    Link,
} from 'shared/components/edition';
import data from '../LegalNotice.data';

/* Owner sub-section of the legal notice */
export default function Owner() {
    return (
        <>
            <Heading level={3}>Propriétaire du site</Heading>
            <DL.DescriptionList>
                <DL.DescriptionListItem
                    terms="Identité"
                    descriptions={data.owner.fullName}
                />
                <DL.DescriptionListItem
                    terms="Adresse"
                    descriptions={data.owner.address}
                />
                <DL.DescriptionListItem
                    terms="Email"
                    descriptions={
                        <address>
                            <Link href={`mailto:${data.owner.email}`}>
                                {data.owner.email}
                            </Link>
                        </address>
                    }
                />
                <DL.DescriptionListItem
                    terms="Téléphone"
                    descriptions={
                        <address>
                            <Link href={`tel:${data.owner.phone}`}>
                                {data.owner.phone}
                            </Link>
                        </address>
                    }
                />
            </DL.DescriptionList>
        </>
    );
}
