import { NecessaryCookie } from '../CookiePolicy.data';

/* Table showing informations on necessary cookies */
export default function NecessaryCookies({
    cookies,
}: {
    cookies: NecessaryCookie['cookies'];
}) {
    return (
        <table>
            <tr>
                <th>Nom du cookie</th>
                <th>Utilité</th>
                <th>Durée de conservation</th>
            </tr>

            {cookies.map(({ name, lifetime, usage }) => (
                <tr key={name}>
                    <td data-header="Nom du cookie">{name}</td>
                    <td data-header="Utilité">
                        {usage.map((value, index) => (
                            <p key={`${value}-${index}`}>{value}</p>
                        ))}
                    </td>
                    <td data-header="Durée de conservation">{lifetime}</td>
                </tr>
            ))}
        </table>
    );
}
