import { Heading, Paragraph } from 'shared/components/edition';
import { Cookies } from '../CookiePolicy.data';
import NecessaryCookies from './NecessaryCookies';
import ThirdPartyCookies from './ThirdPartyCookie';
import OptionalCookies from './OptionalCookies';

/* Description of all cookies saved on this website */
export default function CookieDescription({
    title,
    necessary,
    thirdParty,
    introduction,
    cookies,
}: Cookies) {
    return (
        <>
            <Heading level={3}>{title}</Heading>
            <Paragraph>{introduction}</Paragraph>

            {necessary ?
                <NecessaryCookies cookies={cookies} />
            : thirdParty ?
                <ThirdPartyCookies cookies={cookies} />
            :   <OptionalCookies cookies={cookies} />}
        </>
    );
}
