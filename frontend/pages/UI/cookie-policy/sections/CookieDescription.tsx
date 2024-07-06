import { Heading } from 'shared/components/edition/Heading/Heading';
import { Paragraph } from 'shared/components/edition/Paragraph/Paragraph';
import { Cookies } from '../CookiePolicy.data';
import { NecessaryCookies } from './NecessaryCookies';
import { OptionalCookies } from './OptionalCookies';
import { ThirdPartyCookies } from './ThirdPartyCookie';

/* Description of all cookies saved on this website */
export function CookieDescription({
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
