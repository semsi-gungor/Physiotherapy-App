import client from "@/lib/prisma";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "email",
        },
        password: {
          label: "Şifre:",
          type: "password",
        },
      },
      async authorize(credentials) {
        //db den eğer eşleşen kullanıcı varsa al ve döndür
        //burada credentialı tekrar değerlendirebilirsin
        const user = await client.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!user) {
          throw new Error("Hesap bulunamadı.");
        }

        const pwdComparison = await bcrypt.compare(
          credentials?.password!,
          user.password
        );

        if (!pwdComparison) {
          throw new Error("Şifreniz yanlış.");
        }

        if (user && pwdComparison) {
          return user;
        } else {
          return null;
        }
        /*const comparePassword = await bcrypt.compare(credentials.password, user.password) */
        // const user = {
        //   id: "42",
        //   email: "semsi_gungor@hotmail.com",
        //   password: "12345678",
        //   name: "Şemsi Güngör",
        //   role: "admin",
        // };
        // if (
        //   credentials?.email === user.email &&
        //   credentials.password === user.password
        // ) {
        //   return user;
        // } else {
        //   return null;
        // }
      },
    }),
  ],
  pages: {
    signIn: "/uye-girisi",
  },
  callbacks: {
    //role based accsess
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.fullName = user.fullName;
        token.id = user.id;
        token.dob = user.dob;
      }
      return token;
    },

    //eğer client componentlerde rolü kullanmak istiyorsal
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.fullName = token.fullName;
        session.user.id = token.id;
        session.user.dob = token.dob;
      }
      return session;
    },
  },
};
