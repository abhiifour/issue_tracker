// lib/auth.ts
import GitHubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      httpOptions: {
        timeout: 10000, // wait 10 seconds
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  
};
