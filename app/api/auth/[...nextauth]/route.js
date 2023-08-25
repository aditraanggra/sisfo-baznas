import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'username',
          type: 'text',
          placeholder: 'Input Username...',
        },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials.username || !credentials.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username,
          },
        })

        if (!user) {
          return null
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!passwordMatch) {
          throw new Error('Password Tidak Sesuai!!')
        }

        return user
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session }) {
      // console.log('jwt callbacks', { token, user, session })
      if (user) {
        return {
          ...token,
          id: user.id,
          role: user.role,
          divisi: user.divisi,
        }
      }
      return token
    },
    async session({ session, token, user }) {
      // console.log('session callbacks', { session, token, user })
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
          divisi: token.divisi,
        },
      }

      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
