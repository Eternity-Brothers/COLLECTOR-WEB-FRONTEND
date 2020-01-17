export class OktaConfig {

    public config = {
        clientId: '0oa1p2k23aQAaCdV5357',
        issuer: 'https://dev-805587.okta.com/oauth2/default',
        redirectUri: 'http://localhost:8080/implicit/callback',
        scopes: ['openid', 'profile', 'email'],
        pkce: true
      };
}
