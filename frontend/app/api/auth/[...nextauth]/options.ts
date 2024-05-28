import type { NextAuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import CredentialsProvider from "next-auth/providers/credentials";


export const options: NextAuthOptions = {
    providers: [
        KeycloakProvider({
            clientId: process.env.KEYCLOAK_ID as string,
            clientSecret: process.env.KEYCLOAK_SECRET as string,
            issuer: process.env.KEYCLOAK_ISSUER as string
        })
    ],

    // callbacks: {
    //     async jwt({ token, account } : {token: any, account: any}) {

    //         const nowTimeStamp = Math.floor(Date.now() / 1000);

    //         if (account) {
    //             // New session is created
    //             console.log(account);
    //             token.decoded = jwtDecode(account.access_token);
    //             token.access_token = account.access_token;
    //             token.id_token = account.id_token;
    //             token.expires_at = account.expires_at;
    //             token.refresh_token = account.refresh_token;
    //             return token;
    //         } else if (nowTimeStamp < token.expires_at) {
    //             // Token has not expired yet. Return it
    //             return token;
    //         } else {
    //             console.log('Token has expired! Refresh it.')
    //             // todo
    //             return token;
    //         }
    //     },
    //     async session({ session, token }: { session: any, token: any}) {

    //         session.access_token = encrypt(token.access_token);
    //         session.id_token = encrypt(token.id_token);
    //         session.roles = encrypt(token.decoded.realm_access.roles);
    //         return session;
    //     }
    // }
}