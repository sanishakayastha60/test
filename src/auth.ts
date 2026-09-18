import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
  //receives configuration object; signIn used when we want to sign a user in,...auth-> find out if the current request has authenticated user , handlers -> http handlers for authentication routes
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        //validation ko lagi user le login gareko form bata paxi credentials.email haru use garna milxa
        if (
          typeof credentials?.email !== "string" ||
          typeof credentials.password !== "string"
        ) {
          return null;
        }
        const email = credentials.email;
        const password = credentials.password;

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        if (!user) {
          return null;
        }
        const passwordMatches = await bcrypt.compare(password, user.password);
        if (!passwordMatches) {
          return null;
        }
        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ], //providers tell Authjs how users are allowed to communicate jastai Google ki, Github ki,and so on.
  session: {
    strategy: "jwt", //use jwt for the session
  },
  pages: {
    signIn: "/login", //when authjs needs to send the use to a login page, use /login
  },
});
