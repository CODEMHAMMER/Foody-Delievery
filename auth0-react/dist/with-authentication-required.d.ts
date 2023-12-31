import React, { ComponentType, FC } from 'react';
import { Auth0ContextInterface, RedirectLoginOptions } from './auth0-context';
/**
 * Options for the withAuthenticationRequired Higher Order Component
 */
export interface WithAuthenticationRequiredOptions {
    /**
     * ```js
     * withAuthenticationRequired(Profile, {
     *   returnTo: '/profile'
     * })
     * ```
     *
     * or
     *
     * ```js
     * withAuthenticationRequired(Profile, {
     *   returnTo: () => window.location.hash.substr(1)
     * })
     * ```
     *
     * Add a path for the `onRedirectCallback` handler to return the user to after login.
     */
    returnTo?: string | (() => string);
    /**
     * ```js
     * withAuthenticationRequired(Profile, {
     *   onRedirecting: () => <div>Redirecting you to the login...</div>
     * })
     * ```
     *
     * Render a message to show that the user is being redirected to the login.
     */
    onRedirecting?: () => JSX.Element;
    /**
     * ```js
     * withAuthenticationRequired(Profile, {
     *   onBeforeAuthentication: () => { analyticsLibrary.track('login_triggered'); }
     * })
     * ```
     *
     * Allows executing logic before the user is redirected to the login page.
     */
    onBeforeAuthentication?: () => Promise<void>;
    /**
     * ```js
     * withAuthenticationRequired(Profile, {
     *   loginOptions: {
     *     appState: {
     *       customProp: 'foo'
     *     }
     *   }
     * })
     * ```
     *
     * Pass additional login options, like extra `appState` to the login page.
     * This will be merged with the `returnTo` option used by the `onRedirectCallback` handler.
     */
    loginOptions?: RedirectLoginOptions;
    /**
     * The context to be used when calling useAuth0, this should only be provided if you are using multiple Auth0Providers
     * within your application and you wish to tie a specific component to a Auth0Provider other than the Auth0Provider
     * associated with the default Auth0Context.
     */
    context?: React.Context<Auth0ContextInterface>;
}
/**
 * ```js
 * const MyProtectedComponent = withAuthenticationRequired(MyComponent);
 * ```
 *
 * When you wrap your components in this Higher Order Component and an anonymous user visits your component
 * they will be redirected to the login page and returned to the page they we're redirected from after login.
 */
declare const withAuthenticationRequired: <P extends object>(Component: React.ComponentType<P>, options?: WithAuthenticationRequiredOptions) => React.FC<P>;
export default withAuthenticationRequired;
//# sourceMappingURL=with-authentication-required.d.ts.map