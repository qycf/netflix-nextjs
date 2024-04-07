import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "@/services/auth";
import { GlobalContext } from "@/context";



export const authOptions = {
  pages: {
    signIn: '/signin',
  },
  providers: [

    GithubProvider({
      clientId: "Iv1.99521ff303864adf",
      clientSecret: "28df14953f16d3f913ff8c079a376f48071ee9c5",
    }),
    CredentialsProvider({
      name: 'Credentials',
      // 自定义登录页面
      credentials: {
        account: { label: "account", type: "text" },
        password: { label: "password", type: "password" }
      },
      authorize: async (credentials) => {
        // const { account, password } = await credentials.json();
        const { account, password } = credentials;
        const { data, headers } = await signIn({ account, password });
        if (data.code === 200) {
          return { token: headers.get("Authorization"), user: data.data };
        } else {
          // 抛出错误

          throw new Error(data.message);
        }

      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
        token.user = user.user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.accessToken = token.accessToken;
        session.user = token.user;
      }
      return session;
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
  },
  // 当关闭浏览器后,清除cookie
  session: {
    jwt: true,
    // maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: "default_secret_key",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
