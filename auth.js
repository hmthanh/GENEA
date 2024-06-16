import { MongoDBAdapter } from "@auth/mongodb-adapter"
import GitHubProvider from "next-auth/providers/github"
import NextAuth from "next-auth"
import clientPromise from "@/server/mongodb"

// export default NextAuth({
const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise, {
    collections: {
      Users: "users",
      Accounts: "accounts",
      Sessions: "sessions",
      VerificationTokens: "verification_tokens",
    },
    databaseName: "HemVip",
  }),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          username: profile.login,
          email: profile.email,
          image: profile.avatar_url,
          followers: profile.followers,
          verified: true,
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.username = user.username
      session.email = user.email
      session.name = user.name
      return session
    },
  },
})

export { handlers, auth, signIn, signOut }
