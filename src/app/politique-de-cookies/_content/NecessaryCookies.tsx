import { Table } from '@/shared/components/edition/Table/Table';
import { NecessaryCookie } from '../CookiePolicy.data';

/**
 * Table showing informations on necessary cookies, for the cookie policy page.
 * @param {NecessaryCookie['cookies']} cookies - Description of the cookies.
 * @param {string} caption - Caption of the table.
 */
export const NecessaryCookies = ({
    cookies,
    caption,
}: {
    cookies: NecessaryCookie['cookies'];
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
