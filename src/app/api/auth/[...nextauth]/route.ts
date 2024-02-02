import NextAuth, { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session }: any) {
      session.user = { ...session.user }
      session.user.accessToken = session.accessToken

      return session
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/dashboard/`
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
