import NextAuth from "next-auth";

import { authConfig } from "~/server/auth/config";

export const {
    handlers: { GET, POST },
    auth,
    signIn
} = NextAuth(authConfig);

// const handlers = NextAuth(authConfig);

// export { handlers as GET, handlers as POST };