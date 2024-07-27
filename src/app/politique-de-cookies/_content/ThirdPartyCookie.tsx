import { Link } from '@/shared/components/edition/Link/Link';
import { ThirdPartyCookie } from '../CookiePolicy.data';
import { Table } from '@/shared/components/edition/Table/Table';

/**
 * Table showing informations on necessary cookies, for the cookie policy page.
 * @param {ThirdPartyCookie['cookies']} cookies - Description of the cookies.
 * @param {string} caption - Caption of the table.
 */
export const ThirdPartyCookies = ({
    cookies,
    caption,
}: {
    cookies: ThirdPartyCookie['cookies'];
    caption: string;
}) => {
    const mappedCookies = cookies.map(({ name, privacyPolicyUrl, usage }) => [
        name,
        <Link key="privacy-policy" href={privacyPolicyUrl}>
            {privacyPolicyUrl}
        </Link>,
        usage,
    ]);
    const headers = [
        'Nom du cookie',
        'URL de la politique de cookies',
        'Utilité',
    ];
    const data: [typeof headers, ...typeof mappedCookies] = [
        headers,
        ...mappedCookies,
    ];

    return <Table data={data} caption={caption} />;
};
