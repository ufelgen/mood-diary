import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [
  CredentialsProvider({
    name: "credentials",
    credentials: {
      username: { label: "Username", type: "text", placeholder: "username" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      if (
        credentials.username === "test-user" &&
        credentials.password === "test-user"
      ) {
        return {
          name: "Test User",
          email: "test-user@example.com",
        };
      } else if (
        credentials.username === "Flo" &&
        credentials.password === "!Haus"
      ) {
        return {
          name: "Flo",
          email: "flo@example.com",
        };
      } else {
        return null;
      }
    },
  }),
  GithubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }),
];

export const authOptions = {
  providers,
};
export default NextAuth(authOptions);
