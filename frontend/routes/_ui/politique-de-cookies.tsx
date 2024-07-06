import { createFileRoute } from '@tanstack/react-router';
import { CookiePolicy } from 'pages/UI/cookie-policy/CookiePolicy';

export const Route = createFileRoute()({
    component: CookiePolicy,
});
