import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcrypt";

import { type DefaultSession, NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { db } from "~/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      username: string;
      email: string;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

export const authConfig = {
  pages: {
    signIn: '/signin',
  },

  // adapter
  adapter: PrismaAdapter(db),

  // session
  session: {
    strategy: "jwt",
  },

  // providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john@mail.com" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        } 
        const existingUser = await db.user.findUnique({
          where: { email: credentials?.email as string },
        });
        if (!existingUser) {
          return null;
        }

        const passwordMatch = await compare(
          credentials?.password as string,
          existingUser.password
        )
        if (!passwordMatch) {
          return null;
        }

        return {
          id: `${existingUser.id}`,
          username: existingUser.username,
          email: existingUser.email,
        }
      }
    })
  ],

  // secret: process.env.AUTH_SECRET,

} satisfies NextAuthConfig;
