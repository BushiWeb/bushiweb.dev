import { Paragraph } from '@/shared/components/edition/Paragraph/Paragraph';
import { Section } from '@/shared/components/edition/Section/Section';
import { Cookies } from '../CookiePolicy.data';
import { NecessaryCookies } from './NecessaryCookies';
import { OptionalCookies } from './OptionalCookies';
import { ThirdPartyCookies } from './ThirdPartyCookie';

/**
 * Description of all cookies saved on this website, for the cookie policy page.
 */
export const CookieDescription = ({
    title,
    necessary,
    thirdParty,
    introduction,
    cookies,
}: Cookies) => {
    return (
        <Section heading={title}>
            <Paragraph>{introduction}</Paragraph>

            {necessary ?
                <NecessaryCookies cookies={cookies} caption={title} />
            : thirdParty ?
                <ThirdPartyCookies cookies={cookies} caption={title} />
            :   <OptionalCookies cookies={cookies} caption={title} />}
        </Section>
    );
};
