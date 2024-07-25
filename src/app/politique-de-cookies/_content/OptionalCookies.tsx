import { Table } from '@/shared/components/edition/Table/Table';
import { OptionalCookie } from '../CookiePolicy.data';

/**
 * Table showing informations on optional cookies, for the cookie policy page.
 * @param {OptionalCookie['cookies']} cookies - Description of the cookies.
 * @param {string} caption - Caption of the table.
 */
export const OptionalCookies = ({
    cookies,
    caption,
}: {
    cookies: OptionalCookie['cookies'];
    caption: string;
}) => {
    const mappedCookies = cookies.map(({ name, lifetime, usage }) => [
        name,
        usage,
        lifetime,
    ]);
    const headers = ['Nom du cookie', 'Utilité', 'Durée de conservation'];
    const data = [headers, ...mappedCookies];

    return <Table data={data} caption={caption} />;
};
