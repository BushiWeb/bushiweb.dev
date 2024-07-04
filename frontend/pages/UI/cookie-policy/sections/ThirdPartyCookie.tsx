import { Link } from 'shared/components/edition';
import { ThirdPartyCookie } from '../CookiePolicy.data';

/* Table showing informations on third party cookies */
export default function ThirdPartyCookies({
    cookies,
}: {
    cookies: ThirdPartyCookie['cookies'];
}) {
    return (
        <table>
            <tr>
                <th>Nom du cookie</th>
                <th>URL de la politique de cookies</th>
                <th>Utilité</th>
            </tr>

            {cookies.map(({ name, usage, privacyPolicyUrl }) => (
                <tr key={name}>
                    <td data-header="Nom du cookie">{name}</td>
                    <td data-header="URL de la politique de cookies">
                        <Link href={privacyPolicyUrl}>{privacyPolicyUrl}</Link>
                    </td>
                    <td data-header="Utilité">
                        {usage.map((value, index) => (
                            <p key={`${value}-${index}`}>{value}</p>
                        ))}
                    </td>
                </tr>
            ))}
        </table>
    );
}
