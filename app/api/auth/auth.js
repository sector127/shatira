import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const BASE_PATH = "/api/auth";

const authOptions = {
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                username: {label: 'Username', type: 'text'},
                password: {label: 'Password', type: 'password'},
            },
            async authorize(credentials) {
                const users = [
                    {
                        id: 1,
                        userName: "admin",
                        name: "Giorgi Shatirishvili",
                        password: "password",
                        email: "giorgi@example.com",

                    }
                ];
                const user = users.find(user =>
                    user.userName === credentials.username &&
                    user.password === credentials.password);
                return user ? {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                } : null
            }
        })
    ],
    basePath: BASE_PATH,
    secret: process.env.NEXTAUTH_SECRET,
}

export const {handlers, auth, signIn, signOut} = NextAuth(authOptions)