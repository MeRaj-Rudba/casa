import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";
export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const client = await connectToDatabase();

        const usersCollection = client.db().collection("users");

        const userCheck = await usersCollection.findOne({
          email: credentials.email,
        });
        if (!userCheck) {
          console.log("1");
          client.close();
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          userCheck.password
        );

        if (!isValid) {
          client.close();
          console.log("2");
          throw new Error("Could not log you in!");
        }
        const user = {
          userId: userCheck.userId,
          username: userCheck.username,
          email: credentials.email,
        };
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          console.log("3");
          return user;
        } else {
          // If you return null or false then the credentials will be rejected
          console.log("4");
          return null;
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error("error message") // Redirect to error page
          // throw "/path/to/redirect"        // Redirect to a URL
        }
      },
    }),
  ],

  secret: "test",
});
