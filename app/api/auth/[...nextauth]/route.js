import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                const user = { id: 1, name: "admin", email: "admin@example.com" };

                if (credentials.username === "admin" && credentials.password === "admin") {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: "/login",
        error: "/auth/error"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            return session;
        }
    },
    session: {
        strategy: "jwt"
    }
});

export { handler as GET, handler as POST };
