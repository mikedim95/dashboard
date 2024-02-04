import type { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/serverActions/firebase";
import useUserStore from "@/utils/clientActions/userStore";

export const options: NextAuthOptions = {
  pages: {
    signIn: "/signIn",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("user", await auth.currentUser?.getIdToken());
      console.log("token", token);
      if (user) {
        token.accessToken = await auth.currentUser!.getIdToken();
      }
      return token;
    },
    async session({ session, token }) {
      if (token.accessToken) {
        session.accessToken = token.accessToken;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(
          auth,
          (credentials as any).email || "",
          (credentials as any).password || ""
        )
          .then(async (responseFromFirebase) => {
            /* console.log("auth.currentUser");
            console.log(auth.currentUser?.getIdToken); */
            const user = await auth.currentUser;
            return user;
          })

          /* if (userCredential.user) {
              const user: User = {
                id: userCredential.user.uid,
                name: userCredential.user.displayName,
                email: userCredential.user.email,
                role: "admin",
              };
              return user;
            } */

          .catch((error) => console.log(error))
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
          });
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
