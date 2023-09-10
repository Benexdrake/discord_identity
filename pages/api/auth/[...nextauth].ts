import NextAuth from "next-auth/next";
import Providers from 'next-auth/providers/discord'
import config from '@/config.json'
import getUser from '@/components/GetUser'


const scopes = ['identify'].join(' ')
export default NextAuth({
    providers: [
        Providers({
            clientId: config.clientId,
            clientSecret: config.clientSecret,
            authorization: {params:{scope: scopes}},
            token: "https://discord.com/api/oauth2/token",
            userinfo: "https://discord.com/api/users/@me",
        })
    ],
    callbacks: {
        jwt({ token, account, user }) {
          if (account) {
            token.accessToken = account.access_token
            token.id = user?.id
          }
          return token
        },
        async session({ session, token }) {
            const user = await getUser(token.accessToken as string);
            session.user = user;
            return session;
          },
      }
});